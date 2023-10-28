"use client";
import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { HotelTabsAtom } from "../../config/atoms/hotel-atoms";

const FormTabData = ["Basic", "Images", "Sticky Contact Bar", "SEO"];

const FormTabs = () => {
  const tab = useRecoilValue(HotelTabsAtom);
  const setTab = useSetRecoilState(HotelTabsAtom);
  const handleTabClick = (tab: string) => {
    setTab(tab);
  };
  return (
    <div className="my-8 flex justify-between border-2 border-black rounded-md">
      {FormTabData.map((item, index) => {
        return (
          <div
            className={tab === item ? "tab bg-mango-500" : "tab"}
            onClick={() => handleTabClick(item)}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default FormTabs;
