"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./Sidebar.css";
import { useRouter, usePathname } from "next/navigation";
import { Service, Auth } from "@/services/service";
import {
  Dropdown,
  DropdownItem,
  Drawer,
  DropdownDivider,
} from "flowbite-react";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const handleToggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  const handleLogout = () => {
    try {
      let response = Auth.logout();
      router.push("login");
      router.refresh();

      /*       if (response.success == true) {
        console.log(response.success == true)
        router.replace('/');
      } */
      console.log("res: ", response);
    } catch (error) {
      console.log("err: ", error);
    }
  };

  return (
    <div>
      <nav className="fixed top-0 z-50 w-full border-b border-weak_white bg-bg dark:border-gray-200">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                onClick={handleToggleSidebar}
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-900 focus:outline-none focus:ring-2 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-500"
              >
                <span className="sr-only">
                  {sidebarOpen ? "Close sidebar" : "Open sidebar"}
                </span>
                {sidebarOpen ? (
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.70711 3.70711C3.31658 4.09763 3.31658 4.7308 3.70711 5.12132L8.82843 10.2426L3.70711 15.364C3.31658 15.7545 3.31658 16.3877 3.70711 16.7782C4.09763 17.1687 4.7308 17.1687 5.12132 16.7782L10.2426 11.6569L15.364 16.7782C15.7545 17.1687 16.3877 17.1687 16.7782 16.7782C17.1687 16.3877 17.1687 15.7545 16.7782 15.364L11.6569 10.2426L16.7782 5.12132C17.1687 4.7308 17.1687 4.09763 16.7782 3.70711C16.3877 3.31658 15.7545 3.31658 15.364 3.70711L10.2426 8.82843L5.12132 3.70711C4.7308 3.31658 4.09763 3.31658 3.70711 3.70711Z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                  </svg>
                )}
              </button>
              <a href="https://flowbite.com" className="flex ms-2 md:me-24">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 me-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Tradekeeper
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <div
                className="flex items-center ms-3 gap-3"
                style={{ cursor: "pointer" }}
              >
                <Dropdown
                  dismissOnClick={true}
                  renderTrigger={() => (
                    <div className="p-2 border rounded-lg border-bg_transparent">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.89 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16ZM16 17H8V11C8 8.52 9.51 6.5 12 6.5C14.49 6.5 16 8.52 16 11V17Z"
                          fill="#ffffff8f"
                          strokeWidth="0.5"
                        />
                      </svg>
                    </div>
                  )}
                >
                  <Dropdown.Item className="dropdown-item">
                    notifications
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item">
                    notifications
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item">
                    notifications
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item">
                    notifications
                  </Dropdown.Item>
                </Dropdown>

                <Dropdown
                  dismissOnClick={true}
                  renderTrigger={() => (
                    <div className="flex bg-weak_white rounded-full">
                      <button
                        type="button"
                        className="flex text-sm"
                        aria-expanded="false"
                        data-dropdown-toggle="dropdown-user"
                      >
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="w-10 h-10 rounded-full self-center"
                          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                          alt="user photo"
                        />
                        <div className="flex flex-col px-1">
                          <span className="flex items-start font-bold">
                            {JSON.parse(localStorage.getItem("user")).username}
                          </span>
                          <span className="flex items-start opacity-40">
                            {JSON.parse(localStorage.getItem("user")).email}
                          </span>
                        </div>
                      </button>
                      <svg
                        className="self-center"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 10L12 15L17 10H7Z" fill="#ffffff8f" />
                      </svg>
                    </div>
                  )}
                >
                  <Dropdown.Item className="dropdown-item flex gap-2">
                    <span>
                      <Image
                        src="/profile-image.svg"
                        alt="profile icon"
                        width={0}
                        height={0}
                        style={{ width: "20px", height: "auto" }}
                        priority
                      />
                    </span>
                    <span>Profile settings</span>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item">
                    Earnings
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item className="dropdown-item flex gap-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#ff070796"
                        class="w-5 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                        />
                      </svg>
                    </span>
                    <span>Log out</span>
                  </Dropdown.Item>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-bg border-r border-weak_white sm:translate-x-0 dark:bg-bg dark:border-gray-700 ${
          sidebarOpen ? "" : "-translate-x-full"
        }`}
        aria-label="Sidebar"
        tabIndex={-1}
      >
        <div className="flex flex-col justify-between h-full px-3 pb-4 overflow-y-auto bg-bg dark:bg-bg">
          <ul className="space-y-2 font-medium flex flex-col">
            <a
              style={{ cursor: "pointer" }}
              className={`px-5 py-3 rounded-xl ${
                pathname === "/" ? "bg-detail_blue" : ""
              }`}
              onClick={() => router.push("/")}
            >
              <li
                className={`flex ${
                  pathname === "/" ? "active" : "inactive hover:text-slate-300"
                } `}
              >
                <Image
                  src="/Dashboard.svg"
                  alt="dashboard icon"
                  className={
                    pathname === "/" ? "nav-icon-active" : "opacity-50"
                  }
                  width={0}
                  height={0}
                  style={{ width: "25px", height: "auto" }}
                  priority
                />
                <span className="pl-4">Dashboard</span>
              </li>
            </a>{" "}
            <a
              style={{ cursor: "pointer" }}
              className={`px-5 py-3 rounded-xl ${
                pathname === "/portfolio" ? "bg-detail_blue" : ""
              }`}
              onClick={() => router.push("/portfolio")}
            >
              <li
                className={`flex ${
                  pathname === "/portfolio"
                    ? "active"
                    : "inactive hover:text-slate-300"
                } `}
              >
                <Image
                  src="/wallet-icon.svg"
                  alt="wallet icon"
                  className={
                    pathname === "/portfolio" ? "nav-icon-active" : "opacity-50"
                  }
                  width={0}
                  height={0}
                  style={{ width: "25px", height: "auto" }}
                  priority
                />
                <span className="pl-4">Portfolio</span>
              </li>
            </a>{" "}
            <a
              style={{ cursor: "pointer" }}
              className={`px-5 py-3 rounded-xl ${
                pathname === "/analytics" ? "bg-detail_blue" : ""
              }`}
              onClick={() => router.push("/analytics")}
            >
              <li
                className={`flex ${
                  pathname === "/analytics"
                    ? "active"
                    : "inactive hover:text-slate-300"
                } `}
              >
                <Image
                  src="/chart-icon.svg"
                  alt="chart icon"
                  className={
                    pathname === "/analytics" ? "nav-icon-active" : "opacity-50"
                  }
                  width={0}
                  height={0}
                  style={{ width: "25px", height: "auto" }}
                  priority
                />
                <span className="pl-4">Analytics</span>
              </li>
            </a>
            <a
              style={{ cursor: "pointer" }}
              className={`px-5 py-3 rounded-xl ${
                pathname === "/settings" ? "bg-detail_blue" : ""
              }`}
              onClick={() => router.push("/settings")}
            >
              <li
                className={`flex ${
                  pathname === "/settings"
                    ? "active"
                    : "inactive hover:text-slate-300"
                } settings`}
              >
                <Image
                  src="/settings-icon.svg"
                  alt="settings icon"
                  className={`${
                    pathname === "/settings"
                      ? "nav-icon-active"
                      : "opacity-50 settings-hover:opacity-100"
                  } `}
                  width={0}
                  height={0}
                  style={{ width: "25px", height: "auto" }}
                  priority
                />
                <span className="pl-4">Settings</span>
              </li>
            </a>
          </ul>
          <a
            onClick={handleLogout}
            className="cursor-pointer"
            style={{ display: "flex", padding: "12px 20px" }}
          >
            <Image
              src="/logout-icon.svg"
              alt="logout icon"
              width={25}
              height={30}
              style={{ width: "25px", height: "auto" }}
              priority
            />
            <span style={{ paddingLeft: "20px" }}> Log out </span>
          </a>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
