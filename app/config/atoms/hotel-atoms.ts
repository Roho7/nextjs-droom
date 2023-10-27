import { atom } from "recoil";

export const HotelFormAtom = atom({
  key: "HotelFormData",
  default: {
    hotelName: "",
    pricePerNight: "",
    roomType1: "",
    roomType1Price: "",
    roomType2: "",
    roomType2Price: "",
    roomType3: "",
    roomType3Price: "",
    hotelAddress: "",
    hotelMobile: "",
    description: "",
    nearbyPlace1: "",
    nearbyPlace1Dist: "",
    nearbyPlace2: "",
    nearbyPlace2Dist: "",
    nearbyPlace3: "",
    nearbyPlace3Dist: "",
    mapLink: "",
  },
});
