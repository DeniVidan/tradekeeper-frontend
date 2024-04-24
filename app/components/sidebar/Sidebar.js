"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./Sidebar.css";
import { useRouter, usePathname } from "next/navigation";
import { Service, Auth } from "@/services/service";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
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
    <div className="sidebar">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="logo-container">
          <Image
            src="/logo-tk.png"
            alt="Logo"
            className="logo-img"
            width={70}
            height={70}
            style={{ width: '70px', height: 'auto' }}
            priority
          />
          <h1 className="name">TRADEKEEPER</h1>
        </div>
        <div className="links">
          <ul>
            <a onClick={() => router.push("/")}>
              <li
                className={`${
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
            <a onClick={() => router.push("/portfolio")}>
              <li
                className={`${
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
            <a onClick={() => router.push("/analytics")}>
              <li
                className={`${
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
            <a onClick={() => router.push("/settings")}>
              <li
                className={`${
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
            {/* Add more links as needed */}
          </ul>
        </div>
      </div>

      <a
        onClick={handleLogout}
        className="cursor-pointer"
        style={{ display: "flex", padding: "20px 25px" }}
      >
        <Image
          src="/logout-icon.svg"
          alt="logout icon"
          /* className={pathname === '/settings' ? "nav-icon-active" : "nav-icon-inactive"} */
          width={0}
          height={0}
          style={{ width: "25px", height: "auto" }}
          priority
        />
        <span style={{ paddingLeft: "20px" }}> Log out </span>
      </a>
    </div>
  );
};

export default Sidebar;
