"use client";
import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

const FormInput = ({ name, placeholder, label, type, incremental }: any) => {
  const [value, setValue] = useState(0);
  const handleIncrement = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    operator: string,
  ) => {
    e.preventDefault();
    if (operator === "add") {
      setValue(() => value + 1);
    } else {
      setValue(() => value - 1);
    }
  };

  if (incremental) {
    return (
      <div className="flex gap-2 w-full">
        <div className="flex flex-col">
          <label htmlFor={name}>{label}</label>
          <input type={type} id={name} name={name} placeholder={placeholder} />
        </div>

        <div className="flex flex-col">
          <label htmlFor="price">Price</label>
          <div className="flex gap-2">
            <input
              type={type}
              id="price"
              name="price"
              placeholder="Price"
              value={value}
            />
            <button
              className="bg-grass-500 px-4 rounded-md"
              onClick={(e) => handleIncrement(e, "add")}
            >
              <BiPlus />
            </button>
            <button
              className="bg-tang-500 px-4 rounded-md"
              onClick={(e) => handleIncrement(e, "minus")}
            >
              <BiMinus />
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col">
        <label htmlFor={name}>{label}</label>
        <input type={type} id={name} name={name} placeholder={placeholder} />
      </div>
    );
  }
};

export default FormInput;
