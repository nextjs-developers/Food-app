import { NextResponse } from "next/server";
import { createConnection } from "@/core/lib/db";

export async function POST(req) {
  try {
    const { phone, otp } = await req.json();
    if (!phone || !otp) {
      return NextResponse.json(
        { message: "Phone and OTP are required" },
        { status: 400 }
      );
    }

    const connection = await createConnection();
    try {
      const [otpRows] = await connection.execute(
        "SELECT * FROM otps WHERE phone = ? AND otp = ? AND expires_at > NOW()",
        [phone, otp]
      );

      if (otpRows.length === 0) {
        return NextResponse.json(
          { message: "Invalid or expired OTP" },
          { status: 400 }
        );
      }

      const [userRows] = await connection.execute(
        "SELECT id, name, email, phone FROM users WHERE phone = ?",
        [phone]
      );

      if (userRows.length === 0) {
        return NextResponse.json(
          { message: "User not found" },
          { status: 404 }
        );
      }

      await connection.execute("DELETE FROM otps WHERE phone = ?", [phone]);

      return NextResponse.json({ message: "OTP verified", user: userRows[0] });
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
