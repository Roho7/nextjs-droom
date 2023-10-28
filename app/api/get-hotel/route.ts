import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  const hotels = await sql`SELECT * from newhotels;`;

  return NextResponse.json({ hotels }, { status: 200 });
}
