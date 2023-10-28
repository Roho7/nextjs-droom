"use client";
import FormInput from "../../components/form/FormInput";
import { CreateHotelFormData } from "../../config/JSON/create-hotel-form";
import { useRecoilValue } from "recoil";
import { HotelFormAtom, HotelTabsAtom } from "../../config/atoms/hotel-atoms";
import axios from "axios";
import { NextResponse } from "next/server";
import { BiChevronLeft } from "react-icons/bi";
import { addHotelUrl } from "../../config/URLs/URL";
import FormTabs from "../../components/form/FormTabs";
import UploadPhoto from "../../components/form/UploadPhoto";

const CreateHotel = () => {
  const hotelData = useRecoilValue(HotelFormAtom);
  const tabState = useRecoilValue(HotelTabsAtom);

  // ==== POST DATA ====
  const handleSubmit = async () => {
    if (hotelData.hotelName === "") {
      alert("Please fill in the details");
    } else {
      try {
        const response = await axios.post(addHotelUrl, hotelData);
        alert("Hotel Created Successfully");
        return NextResponse.json(response.data);
      } catch (error: any) {
        console.log(error);
        return NextResponse.json({ message: error.message });
      }
    }
  };

  return (
    <div className="page-container">
      <div className="flex justify-between">
        <div className="flex items-center cursor-pointer">
          <BiChevronLeft />
          <h1>Create Hotel</h1>
        </div>
        <button onClick={handleSubmit} className="bg-mango-500 link">
          Save Hotel
        </button>
      </div>
      <FormTabs />
      {tabState === "Basic" && (
        <form action="" className="w-full">
          {CreateHotelFormData.map((item, index) => {
            return (
              <FormInput
                name={item.name}
                type={item.type}
                placeholder={item.placeholder}
                label={item.label}
                //   incremental={item.incremental}
                key={index}
              />
            );
          })}
        </form>
      )}
      {tabState === "Images" && <UploadPhoto />}
    </div>
  );
};

export default CreateHotel;
