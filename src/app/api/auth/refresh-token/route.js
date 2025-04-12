import { NextResponse } from "next/server";
import { query } from "@/core/lib/db";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const { refreshToken } = await req.json();

    if (!refreshToken) {
      return NextResponse.json(
        { message: "Refresh token is required" },
        { status: 400 }
      );
    }

    let payload;
    try {
      payload = jwt.verify(refreshToken, process.env.JWT_SECRET);
    } catch (err) {
      return NextResponse.json({ message: "Invalid or expired token" }, { status: 401 });
    }

    const phone = payload.phone;

    const userRows = await query("SELECT * FROM users WHERE phone = ?", [phone]);
    if (userRows.length === 0 || userRows[0].refresh_token !== refreshToken) {
      return NextResponse.json({ message: "Invalid refresh token" }, { status: 403 });
    }

    const newAccessToken = jwt.sign({ phone }, process.env.JWT_SECRET, {
      expiresIn: "6h",
    });
    const newRefreshToken = jwt.sign({ phone }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    await query(
      "UPDATE users SET access_token = ?, refresh_token = ? WHERE phone = ?",
      [newAccessToken, newRefreshToken, phone]
    );

    return NextResponse.json({
      message: "Token refreshed",
      data: {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      },
    });
  } catch (error) {
    console.error("Token Refresh Error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
