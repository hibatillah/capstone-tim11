import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { DashboardIcon, OrderIcon, ReportIcon, ProductIcon, LogoutIcon, UserIcon } from "./icon";

const Sidebar = ({ user, handleLogin }) => {
  const menu = {
    admin: [
      ["/", "Dashboard"],
      ["/order", "Order"],
      ["/report", "Report"],
      ["/product", "Product"],
    ],
    supplier: [["/", "Dashboard"]],
    guest: [
      ["/", "Dashboard"],
      ["/detail", "Detail"],
      ["/about", "About"],
    ],
  };

  // active menu
  const acitveUser = menu[user];
  const [activeMenu, setActiveMenu] = React.useState();

  // lagoout handle
  const navigate = useNavigate();
  const handleLogout = () => {
    handleLogin();
    navigate('/')
  }

  return (
    <aside className="flex-none min-w-[15%] h-[calc(100vh-65px)] px-6 py-10 flex flex-col items-center bg-white shadow-md">
      <ul className="flex flex-col gap-3">
        {acitveUser.map(([path, page], i) => (
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
                      default:
                        return null;
                    }
                  })()
                : user === "supplier"
                ? (() => {
                    switch (page) {
                      case "Dashboard":
                        return <DashboardIcon />;
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
      <Link onClick={handleLogout} className="mt-auto px-3 py-2 rounded-md flex items-center gap-3 bg-inherit text-gray-800 stroke-gray-900 active:text-blue-600 active:stroke-blue-600">
        <LogoutIcon />
        Log Out
      </Link>
    </aside>
  );
};

export default Sidebar;