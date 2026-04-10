import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://aptro-admin.vercel.app/api/plans");

    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Fetch failed" },
      { status: 500 }
    );
  }
}