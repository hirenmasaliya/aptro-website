import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const res = await fetch("http://localhost:3001/api/partner", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    // 3. Parse the response (which contains the Temp ID)
    const data = await res.json();

    // 4. Return the result back to your frontend
    return NextResponse.json(data, { status: res.status });
    
  } catch (error) {
    console.error("Internal API Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process application" },
      { status: 500 }
    );
  }
}