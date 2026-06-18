import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // 1. Extract the form data sent from your ContactPage
    const body = await req.json();

    // 2. Forward the POST request to your Vercel admin API
    const res = await fetch("https://aptro-admin.vercel.app/api/support", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Pass the form data along
      body: JSON.stringify(body), 
    });

    // 3. Parse the response from the Vercel API
    const data = await res.json();

    // 4. Send the result back to the frontend, keeping the correct status code
    return NextResponse.json(data, { status: res.status });
    
  } catch (error) {
    console.error("Proxy Error:", error);
    return NextResponse.json(
      { success: false, message: "Fetch failed" },
      { status: 500 }
    );
  }
}