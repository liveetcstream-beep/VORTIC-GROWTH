import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { businessName, contactName, phone, tradeType, suburb, website, source } = body;

    // Server log for lead capture tracking
    console.log("📥 NEW LEAD CAPTURED:", {
      timestamp: new Date().toISOString(),
      businessName,
      contactName,
      phone,
      tradeType,
      suburb,
      website,
      source: source || "Vortic Growth Form",
    });

    return NextResponse.json({
      success: true,
      message: "Lead recorded successfully",
      lead: { businessName, phone, suburb },
    });
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json(
      { success: false, message: "Error recording lead" },
      { status: 500 }
    );
  }
}
