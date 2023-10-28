import axios from "axios";
import React from "react";
import HotelCard from "./HotelCard";
import { HotelDataType } from "../../config/types/types";

const HotelList = async () => {
  const response = await axios.get("http://localhost:3000/api/add-hotel");
  const data: HotelDataType[] = response.data.hotels.rows;
  return (
    <div className="">
      {data.map((item, index) => {
        return <HotelCard data={item} key={index} />;
      })}
    </div>
  );
};

export default HotelList;
