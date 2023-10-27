"use client";
import FormInput from "../../components/form/FormInput";
import { CreateHotelFormData } from "../../config/create-hotel-form";
import { useRecoilValue } from "recoil";
import { HotelFormAtom } from "../../config/atoms/hotel-atoms";
import axios from "axios";
import { NextResponse } from "next/server";

const CreateHotel = () => {
  const hotelData = useRecoilValue(HotelFormAtom);

  // ==== POST DATA ====
  const handleSubmit = async (req: Request, res: Response) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/add-hotel",
        hotelData,
      );
      console.log(response.data);
      return NextResponse.json(response.data);
    } catch (error: any) {
      console.log(error);
      return NextResponse.json({ message: error.message });
    }
  };

  return (
    <div className="page-container">
      <button onClick={handleSubmit}>Submit</button>
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
