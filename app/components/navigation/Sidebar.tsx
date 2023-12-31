import { SideBarData } from "../../config/JSON/sitedata";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <div className="bg-black text-white p-10 w-1/6 h-screen sticky left-0 top-0">
      {SideBarData.map((item, index) => {
        return <SidebarItem data={item} key={index} />;
      })}
    </div>
  );
};

export default Sidebar;
