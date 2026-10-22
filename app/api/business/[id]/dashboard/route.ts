import { NextResponse } from "next/server";

// 1. Add the context parameter to receive dynamic route params like [id]
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id  = (await params).id; 

    const authHeader = request.headers.get("authorization") || request.headers.get("Authorization");

    const fetchHeaders: HeadersInit = {
      "Content-Type": "application/json",
    };

    if (authHeader) {
      fetchHeaders["Authorization"] = authHeader;
    }

    // 2. Fix the string interpolation by using backticks (`) instead of double quotes (")
    const externalResponse = await fetch(`https://aptro-admin.vercel.app/api/business/${id}/dashboard`, {
      method: "GET",
      headers: fetchHeaders,
    });

    // Parse the response
    const data = await externalResponse.json();

    if (!externalResponse.ok) {
      return NextResponse.json(
        { error: data.error || data.message || "Failed to load dashboard data" },
        { status: externalResponse.status }
      );
    }

    return NextResponse.json(data, { status: 200 });

  } catch (error: any) {
    console.error("Dashboard API Proxy Error:", error);
    
    return NextResponse.json(
      { error: "Internal server error. Failed to connect to the backend service." },
      { status: 500 }
    );
  }
}