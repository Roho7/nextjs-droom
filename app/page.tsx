import Link from "next/link";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Sidebar />
    </div>
  );
}
