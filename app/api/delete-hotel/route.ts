import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

// export async function GET(request: Request) {
//   try {
//     const result = await sql`DROP TABLE hotels;`;
//     return NextResponse.json({ result }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }
// }

export async function POST(request: Request) {
  const body = await request.json();
  const hotelName = body.hotelName;
  try {
    const result =
      await sql`DELETE from newhotels WHERE hotelname = ${hotelName};`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
