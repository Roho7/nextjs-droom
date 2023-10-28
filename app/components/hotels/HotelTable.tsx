import axios, { AxiosError } from "axios";
import React from "react";
import HotelCard from "./HotelCard";
import { HotelDataType } from "../../config/types/types";
import HotelTableHeading from "./HotelTableHeading";
import { getHotelUrl } from "../../config/URLs/URL";

export const getData = async (): Promise<HotelDataType[] | undefined> => {
  // ===== FETCH HOTEL DETAILS =======
  try {
    const res = await axios.get(getHotelUrl);
    console.log(res);
    const data: HotelDataType[] = res.data.hotels.rows;
    return data;
  } catch (err) {
    console.log(err);
  }
};

const HotelTable = async () => {
  const data = await getData();
  return (
    <div className="flex flex-col gap-2 py-4">
      <HotelTableHeading />
      {data?.map((item, index) => {
        return <HotelCard data={item} key={index} />;
      })}
    </div>
  );
};

export default HotelTable;
