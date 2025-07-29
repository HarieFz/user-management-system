import { HiBars3 } from "react-icons/hi2";
import Logo from "../assets/logos/logo-2.png";
import { Link, useLocation } from "react-router-dom";

export interface MenuItem {
  id: string;
  path: string;
  label: string;
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: "user-aktif",
    path: "/",
    label: "User Aktif",
  },
  {
    id: "menu-2",
    path: "/menu-2",
    label: "Menu 2",
  },
  {
    id: "menu-3",
    path: "/menu-3",
    label: "Menu 3",
  },
  {
    id: "menu-4",
    path: "/menu-4",
    label: "Menu 4",
  },
  {
    id: "menu-5",
    path: "/menu-5",
    label: "Menu 5",
  },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="bg-white py-5">
      <div className="mb-2.5 px-4 py-[19px]">
        <div className="flex items-center justify-between ps-3">
          <img src={Logo} alt="logo" className="w-26 h-auto" />

          <HiBars3 size={24} color="black" />
        </div>
      </div>

      <nav>
        <div className="w-full flex flex-col">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`w-full h-[45px] ${
                location.pathname === item.path ? "bg-[#FD5725] text-white" : "bg-transparent text-black"
              } flex items-center gap-2.5 px-6 font-bold text-sm`}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <div className="w-[16.67px] h-[16.67px] bg-[#7E1810] rounded" />
              </div>

              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
