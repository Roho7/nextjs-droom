export interface SideBarItemType {
  id: number;
  name: string;
  path: string;
  subpages?: {
    name: string;
    path: string;
  }[];
  icon: JSX.Element;
}

export interface HotelDataType {
  hotelname: string;
  pricePernight: string;
  roomtype1: string;
  roomtype1price: string;
  roomtype2: string;
  roomtype2price: string;
  roomtype3: string;
  roomtype3price: string;
  hoteladdress: string;
  hotelmobile: string;
  description: string;
  nearbyplace1: string;
  nearbyplace1dist: string;
  nearbyplace2: string;
  nearbyplace2dist: string;
  nearbyplace3: string;
  nearbyplace3dist: string;
  maplink: string;
}
