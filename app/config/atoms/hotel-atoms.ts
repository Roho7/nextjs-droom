import { atom } from "recoil";

export const HotelFormAtom = atom({
  key: "HotelFormData",
  default: {
    hotelName: "",
    pricePerNight: 0,
    roomType1: "",
    roomType1Price: 0,
    roomType2: "",
    roomType2Price: 0,
    roomType3: "",
    roomType3Price: 0,
    hotelAddress: "",
    hotelMobile: "",
    description: "",
    nearbyPlace1: "",
    nearbyPlace1Dist: 0,
    nearbyPlace2: "",
    nearbyPlace2Dist: 0,
    nearbyPlace3: "",
    nearbyPlace3Dist: 0,
    mapLink: "",
  },
});

export const HotelTabsAtom = atom({
  key: "HotelTabs",
  default: "Basic",
});
