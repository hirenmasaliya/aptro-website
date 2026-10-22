import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    const authHeader = request.headers.get("authorization") || request.headers.get("Authorization");

    const fetchHeaders: HeadersInit = {
      "Content-Type": "application/json",
    };

    if (authHeader) {
      fetchHeaders["Authorization"] = authHeader;
    } else {
      return NextResponse.json({ error: "Missing authorization token" }, { status: 401 });
    }

    const externalResponse = await fetch(`https://aptro-admin.vercel.app/api/business/${id}/inventory`, {
      method: "GET",
      headers: fetchHeaders,
    });

    const data = await externalResponse.json().catch(() => ({}));

    if (!externalResponse.ok) {
      return NextResponse.json(
        { error: data.error || data.message || "Failed to load orders" },
        { status: externalResponse.status }
      );
    }

    // Forward the data exactly as it comes from the API
    return NextResponse.json(data, { status: 200 });

  } catch (error: any) {
    console.error("Orders API Proxy Error:", error);
    return NextResponse.json(
      { error: "Internal server error. Failed to connect to backend." },
      { status: 500 }
    );
  }
}