import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import {
  DashboardIcon,
  OrderIcon,
  ReportIcon,
  ProductIcon,
  LogoutIcon,
  UserIcon,
  BahanBakuIcon,
} from "./icon";

const Sidebar = ({ user, handleLogin }) => {
  const menu = {
    admin: [
      ["/", "Dashboard"],
      ["/order", "Order"],
      ["/report", "Report"],
      ["/product", "Product"],
      ["/bahanbaku", "Bahan Baku"],
    ],
    supplier: [
      ["/", "Dashboard"],
      ["/pesanan", "Pesanan"],

    ],
    guest: [
      ["/", "Dashboard"],
      ["/ordercustomer", "Order"],
      ["/detail", "Detail"],
      ["/about", "About"],
    ],
  };

  // active menu
  const [activeMenu, setActiveMenu] = React.useState();

  // lagoout handle
  const navigate = useNavigate();
  const handleLogout = () => {
    handleLogin(false);
    navigate("/");
  };

  return (
    <aside className="flex-none min-w-[15%] h-[calc(100vh-65px)] px-6 py-10 flex flex-col items-center bg-white shadow-md">
      <ul className="flex flex-col gap-3">
        {menu[user].map(([path, page], i) => (
          <NavLink
            key={i}
            to={path}
            className={({ isActive }) =>
              isActive ? setActiveMenu(page) : null
            }
          >
            <div
              className={`px-3 py-2 rounded-md flex items-center gap-3 ${
                activeMenu === page
                  ? "bg-primary text-blue-600 stroke-blue-600"
                  : "bg-inherit text-gray-800 stroke-gray-900 active:text-blue-600 active:stroke-blue-600"
              }`}
            >
              {user === "admin"
                ? (() => {
                    switch (page) {
                      case "Dashboard":
                        return <DashboardIcon />;
                      case "Order":
                        return <OrderIcon />;
                      case "Report":
                        return <ReportIcon />;
                      case "Product":
                        return <ProductIcon />;
                      case "Bahan Baku":
                        return <BahanBakuIcon />;
                      default:
                        return null;
                    }
                  })()
                : user === "supplier"
                ? (() => {
                    switch (page) {
                      case "Dashboard":
                        return <DashboardIcon />;
                      case "Pesanan":
                        return <OrderIcon />;
                      default:
                        return null;
                    }
                  })()
                : (() => {
                    switch (page) {
                      case "Dashboard":
                        return <DashboardIcon />;
                      case "Detail":
                        return <OrderIcon />;
                      case "Order":
                        return <OrderIcon />;
                      case "About":
                        return <UserIcon />;
                      default:
                        return null;
                    }
                  })()}

              {page}
            </div>
          </NavLink>
        ))}
      </ul>
      <Link
        onClick={handleLogout}
        className="mt-auto px-3 py-2 rounded-md flex items-center gap-3 bg-inherit text-gray-800 stroke-gray-900 active:text-blue-600 active:stroke-blue-600"
      >
        <LogoutIcon />
        Log Out
      </Link>
    </aside>
  );
};

export default Sidebar;
