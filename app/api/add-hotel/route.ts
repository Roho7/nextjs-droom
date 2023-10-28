import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { HotelDataType } from "../../config/types/types";

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const data: string | number[] = Object.values(body);
  try {
    await sql`
    INSERT INTO newhotels
    (hotelName, pricePerNight, roomType1, roomType1Price, roomType2, roomType2Price, roomType3, roomType3Price, hotelAddress, hotelMobile, description, nearbyPlace1, nearbyPlace1Dist, nearbyPlace2, nearbyPlace2Dist, nearbyPlace3, nearbyPlace3Dist, mapLink)
    VALUES
    (
      ${data[0]}, ${data[1]}, ${data[2]}, ${data[3]}, ${data[4]}, ${data[5]}, ${data[6]}, ${data[7]}, ${data[8]}, ${data[9]}, ${data[10]}, ${data[11]}, ${data[12]}, ${data[13]}, ${data[14]}, ${data[15]}, ${data[16]}, ${data[17]}
    );
  `;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ status: 200 });
}

export async function GET(req: Request, res: Response) {
  const hotels = await sql`
    SELECT * from newhotels
  `;

  return NextResponse.json({ hotels }, { status: 200 });
}
