import {
  BiHomeAlt,
  BiBox,
  BiBarChartAlt2,
  BiDirections,
  BiReceipt,
  BiRadar,
} from "react-icons/bi";
import {
  HiOutlineDocumentDuplicate,
  HiOutlineCurrencyRupee,
} from "react-icons/hi";

export const SideBarData = [
  {
    name: "Home",
    path: "/home",
    icon: <BiHomeAlt />,
  },
  {
    name: "Pages",
    path: "/pages",
    subpages: [
      {
        name: "All Pages",
        path: "/pages",
      },
      {
        name: "Add New",
        path: "/addnewpage",
      },
    ],
    icon: <HiOutlineDocumentDuplicate />,
  },
  {
    name: "Hotels",
    path: "/hotels",
    subpages: [
      {
        name: "Hotels",
        path: "/hotels",
      },
      {
        name: "Hotel Types",
        path: "/hoteltypes",
      },
      {
        name: "Room Types",
        path: "/roomtypes",
      },
      {
        name: "Amenities",
        path: "/amenities",
      },
      {
        name: "Lead Forms",
        path: "/leadforms",
      },
    ],
    icon: <BiBox />,
  },

  {
    name: "Leads",
    path: "/leads",
    subpages: [
      {
        name: "Leads",
        path: "/leads",
      },
    ],
    icon: <BiDirections />,
  },
  {
    name: "Bookings",
    path: "/bookings",
    subpages: [
      {
        name: "Bookings",
        path: "/bookings",
      },
      {
        name: "Vouchers",
        path: "/vouchers",
      },
      {
        name: "Invoices",
        path: "/invoices",
      },
      {
        name: "Commissions",
        path: "/commissions",
      },
      {
        name: "Bonuses",
        path: "/Bonuses",
      },
    ],
    icon: <BiReceipt />,
  },
  {
    name: "Vendors",
    path: "/vendors",
    subpages: [
      {
        name: "Vendors",
        path: "/vendors",
      },
    ],
    icon: <BiRadar />,
  },
  {
    name: "Payments",
    path: "/payments",
    subpages: [
      {
        name: "Payments",
        path: "/payments",
      },
    ],
    icon: <HiOutlineCurrencyRupee />,
  },
  {
    name: "Analytics",
    path: "/analytics",
    subpages: [
      {
        name: "Analytics",
        path: "/analytics",
      },
    ],
    icon: <BiBarChartAlt2 />,
  },
];
