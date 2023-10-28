import React from "react";
import { HotelDataType } from "../../config/types/types";

const HotelCard = (props: any) => {
  const data: HotelDataType = props.data;
  return <div> {data.hotelname}</div>;
};

export default HotelCard;
