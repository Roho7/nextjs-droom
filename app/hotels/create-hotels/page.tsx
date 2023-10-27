import React from "react";
import FormInput from "../../components/form/FormInput";
import { CreateHotelFormData } from "../../config/create-hotel-form";

const CreateHotel = () => {
  return (
    <div className="page-container">
      <form action="" className="w-full">
        {CreateHotelFormData.map((item, index) => {
          return (
            <FormInput
              name={item.name}
              type={item.type}
              placeholder={item.placeholder}
              label={item.label}
              incremental={item.incremental}
              key={index}
            />
          );
        })}
      </form>
    </div>
  );
};

export default CreateHotel;
