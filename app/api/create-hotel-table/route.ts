import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const result =
      await sql`CREATE TABLE IF NOT EXISTS newhotels (hotelName VARCHAR(255),
  pricePerNight DECIMAL(10, 2),
  roomType1 VARCHAR(255),
  roomType1Price DECIMAL(10, 2),
  roomType2 VARCHAR(255),
  roomType2Price DECIMAL(10, 2),
  roomType3 VARCHAR(255),
  roomType3Price DECIMAL(10, 2),
  hotelAddress VARCHAR(255),
  hotelMobile VARCHAR(15),
  description TEXT,
  nearbyPlace1 VARCHAR(255),
  nearbyPlace1Dist DECIMAL(10, 2),
  nearbyPlace2 VARCHAR(255),
  nearbyPlace2Dist DECIMAL(10, 2),
  nearbyPlace3 VARCHAR(255),
  nearbyPlace3Dist DECIMAL(10, 2),
  mapLink VARCHAR(255));`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
