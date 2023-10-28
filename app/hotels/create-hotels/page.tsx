"use client";
import FormInput from "../../components/form/FormInput";
import { CreateHotelFormData } from "../../config/JSON/create-hotel-form";
import { useRecoilValue } from "recoil";
import { HotelFormAtom } from "../../config/atoms/hotel-atoms";
import axios from "axios";
import { NextResponse } from "next/server";

const CreateHotel = () => {
  const hotelData = useRecoilValue(HotelFormAtom);

  // ==== POST DATA ====
  const handleSubmit = async () => {
    if (hotelData.hotelName === "") {
      alert("Please fill in the details");
    } else {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/add-hotel",
          hotelData,
        );
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
      <button onClick={handleSubmit} className="bg-grass-500 link">
        Submit
      </button>
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
    </div>
  );
};

export default CreateHotel;
