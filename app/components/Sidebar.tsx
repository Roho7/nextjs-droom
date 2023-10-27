import { SideBarData } from "../config/sitedata";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <div className="bg-black text-white p-10 w-1/6 h-screen fixed">
      {SideBarData.map((item, index) => {
        return <SidebarItem data={item} key={index} />;
      })}
    </div>
  );
};

export default Sidebar;
