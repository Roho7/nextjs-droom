"use client";
import { BiChevronDown } from "react-icons/bi";
import { SideBarItemType } from "../../config/types/types";
import Link from "next/link";

const SidebarItem = (props: any) => {
  const item: SideBarItemType = props.data;

  const handleDropdown = (id: string) => {
    const dropdown = document.getElementById(id);
    dropdown?.classList.toggle("hidden");
  };

  return (
    <>
      <Link
        className="flex justify-between py-2 cursor-pointer text-xl hover:text-mango-500"
        onClick={() => handleDropdown(item.name)}
        href={item.path}
      >
        <div className="flex items-center gap-2">
          <span>{item.icon}</span>
          <span>{item.name}</span>
        </div>
        {item.subpages && <BiChevronDown />}
      </Link>
      <div className="hidden" id={item.name}>
        {item.subpages?.map((page, idx) => {
          return (
            <div className="cursor-pointer hover:text-mango-500 px-6" key={idx}>
              {page.name}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SidebarItem;
