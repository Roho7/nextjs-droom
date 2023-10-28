import axios from "axios";
import React from "react";
import HotelCard from "./HotelCard";
import { HotelDataType } from "../../config/types/types";
import HotelTableHeading from "./HotelTableHeading";

const HotelTable = async () => {
  // ===== FETCH HOTEL DETAILS =======
  const response = await axios.get("http://localhost:3000/api/add-hotel");
  const data: HotelDataType[] = response.data.hotels.rows;

  return (
    <div className="flex flex-col gap-2 py-4">
      <HotelTableHeading />
      {data.map((item, index) => {
        return <HotelCard data={item} key={index} />;
      })}
    </div>
  );
};

export default HotelTable;
