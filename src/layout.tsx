import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

export default function Layout() {
  return (
    <div className="min-h-dvh w-full h-full flex">
      <aside className="fixed inset-0 w-[260px] h-dvh overflow-y-auto">
        <Sidebar />
      </aside>
      <div className="min-h-dvh w-[calc(100%-260px)] ms-[260px] h-full p-6 bg-[#F1F3FC] flex flex-col justify-between font-plus-jakarta-sans">
        <div>
          <Header />
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
