import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // 1. Parse the credentials from the incoming frontend request
    const body = await request.json();
    const { email, password } = body;

    // Basic validation
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // 2. Call your external Aptro Admin API
    const externalApiResponse = await fetch("https://aptro-admin.vercel.app/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Pass the email and password forward
      body: JSON.stringify({ email, password }),
    });

    // 3. Parse the response from the external API
    const data = await externalApiResponse.json();

    // 4. If the external API returns an error (e.g., 401 Unauthorized), relay that exact status
    if (!externalApiResponse.ok) {
      return NextResponse.json(
        { error: data.error || data.message || "Invalid credentials" },
        { status: externalApiResponse.status }
      );
    }

    // 5. Return the successful response (along with any tokens/user data) back to the client
    return NextResponse.json(data, { status: 200 });

  } catch (error: any) {
    console.error("Login API Proxy Error:", error);
    
    // Handle network errors or unexpected crashes
    return NextResponse.json(
      { error: "Internal server error. Failed to connect to the authentication service." },
      { status: 500 }
    );
  }
}