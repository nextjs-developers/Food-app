import { NextResponse } from "next/server";
import { query } from "@/core/lib/db";
import jwt from "jsonwebtoken";

export async function POST(req) {
	try {
		const { phone, otp } = await req.json();
		
		if (!phone || !otp) {
			return NextResponse.json(
				{ message: "Phone and OTP are required" },
				{ status: 400 }
			);
		}

		const otpRows = await query(
			"SELECT * FROM otps WHERE phone = ? AND otp = ? AND expires_at > NOW()",
			[phone, otp]
		);

		if (otpRows.length === 0) {
			return NextResponse.json(
				{ message: "Invalid or expired OTP" },
				{ status: 400 }
			);
		}
   
		await query("DELETE FROM otps WHERE phone = ?", [phone]);

    const accessToken = jwt.sign(
      {phone},
      process.env.JWT_SECRET,
      { expiresIn: "6h" }
    );
    const refreshToken = jwt.sign({ phone }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    await query(
      "INSERT INTO users (access_token, refresh_token, phone) VALUES (?, ?, ?)",
      [accessToken, refreshToken, phone]
    );

		return NextResponse.json({ message: "OTP verified", data: {accessToken , refreshToken} });
	} catch (error) {
		console.error("Database Error:", error);
		return NextResponse.json(
			{ message: "Internal server error" },
			{ status: 500 }
		);
	}
}
