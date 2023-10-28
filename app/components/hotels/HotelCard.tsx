import React from "react";
import { HotelDataType } from "../../config/types/types";
import HotelDeleteButton from "./HotelDeleteButton";
import HotelEditButton from "./HotelEditButton";

const HotelCard = (props: any) => {
  const data: HotelDataType = props.data;
  return (
    <div className="p-4 bg-white border-2 border-black rounded-md grid grid-cols-7 grid-rows-1 items-center">
      <span>{data.hotelname}</span>
      <span>{data.pricepernight}</span>
      <span>{data.pricepernight}</span>
      <span>{data.pricepernight}</span>
      <span>{data.pricepernight}</span>
      <span>{data.pricepernight}</span>
      <div>
        <HotelDeleteButton data={data.hotelname} /> <HotelEditButton />
      </div>
    </div>
  );
};

export default HotelCard;
