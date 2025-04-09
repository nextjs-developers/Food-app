import { query } from "@/core/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const branchRows = await query(
      `SELECT id, name, address, phone, time_work, image_url FROM branch`
    );

    if (branchRows.length === 0) {
      return NextResponse.json(
        { message: "No branches found" },
        { status: 404 }
      );
    }

    return NextResponse.json(branchRows);
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
}
