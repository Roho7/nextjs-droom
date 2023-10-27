import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  console.log(body);
  //   try {
  //     await sql`INSERT INTO hotels
  //   (hotelName, pricePerNight, roomType1, roomType1Price, roomType2, roomType2Price, roomType3, roomType3Price, hotelAddress, hotelMobile, description, nearbyPlace1, nearbyPlace1Dist, nearbyPlace2, nearbyPlace2Dist, nearbyPlace3, nearbyPlace3Dist, mapLink)
  //   VALUES
  //   ('${body.hotelName}', ${pricePerNight}, '${roomType1}', ${roomType1Price}, '${roomType2}', ${roomType2Price}, '${roomType3}', ${roomType3Price}, '${hotelAddress}', '${hotelMobile}', '${description}', '${nearbyPlace1}', ${nearbyPlace1Dist}, '${nearbyPlace2}', ${nearbyPlace2Dist}, '${nearbyPlace3}', ${nearbyPlace3Dist}, '${mapLink}');
  // `;
  //   } catch (error) {
  //     return NextResponse.json({ error }, { status: 500 });
  //   }

  return NextResponse.json({ body }, { status: 200 });
}
