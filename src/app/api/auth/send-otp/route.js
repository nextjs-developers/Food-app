import { NextResponse } from "next/server";
import { createConnection } from "@/core/lib/db";
import { randomInt } from "crypto";

export async function POST(req) {
	try {
		const { phone } = await req.json();
		if (!phone) {
			return NextResponse.json(
				{ status: 400, message: "phone number is required" },
				{ status: 400 }
			);
		}

		const otp = randomInt(10000, 99999);
		const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

		const connection = await createConnection();

		await connection.execute("DELETE FROM otps WHERE phone = ?", [phone]);

		await connection.execute(
			"INSERT INTO otps (phone, otp, expires_at) VALUES (?, ?, ?)",
			[phone, otp, expiresAt]
		);
		return NextResponse.json({ message: "sended code successfully", otp: otp });
	} catch (error) {
		console.error("Database Error:", error);
		return NextResponse.json({ message: "db error" }, { status: 500 });
	}
}
