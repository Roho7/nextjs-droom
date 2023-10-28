import React from "react";

const HotelTableHeading = () => {
  return (
    <div>
      <div className="p-4 text-gray-500 grid grid-cols-7 grid-rows-1 items-center">
        <span>Image</span>
        <span>Hotel Name</span>
        <span>Price</span>
        <span>Impression</span>
        <span>Clicks</span>
        <span>Bookings</span>
        <span>Actions</span>
      </div>
    </div>
  );
};

export default HotelTableHeading;
