"use client";
import React, {useState} from 'react';
import Image from "next/image";
import './Sidebar.css'
import { useRouter, usePathname  } from 'next/navigation';
import { Service, Auth } from "@/services/service";


const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();


  const handleLogout = async () => {
    try {
      let response =  Auth.logout();
      router.push('/login')

      
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
    <aside className="sidebar">
      <div style={{display: "flex", flexDirection: "column"}}>
        <div className="logo-container">
          <Image
            src="/logo-tk.png"
            alt="Logo"
            className="logo-img"
            width={70}
            height={70}
            priority  />
          <h1 className="name">TRADEKEEPER</h1>
        </div>
        <nav className="links">
          <ul>
            <li
              className={`${pathname === '/' ? "active" : "inactive hover:text-slate-300"} `}>
              <Image
              src="/Dashboard.svg"
              alt="dashboard icon"
              className={pathname === '/' ? "nav-icon-active" : "opacity-50"}
              width={25}
              height={30}
              priority
              />
              <a onClick={() => router.push('/')}>Dashboard</a>
            </li>
            <li
              className={`${pathname === '/portfolio' ? "active" : "inactive hover:text-slate-300"} `}>
              <Image
              src="/wallet-icon.svg"
              alt="wallet icon"
              className={pathname === '/portfolio' ? "nav-icon-active" : "opacity-50"}
              width={25}
              height={30}
              priority
              />
              <a onClick={() => router.push('/portfolio')}>Portfolio </a>
            </li>
            <li
            className={`${pathname === '/analytics' ? "active" : "inactive hover:text-slate-300"} `}>
              <Image
              src="/chart-icon.svg"
              alt="chart icon"
              className={pathname === '/analytics' ? "nav-icon-active" : "opacity-50"}
              width={25}
              height={30}
              priority
              />
              <a onClick={() => router.push('/analytics')}>Analytics</a>
            </li>
            <li
              className={`${pathname === '/settings' ? "active" : "inactive hover:text-slate-300"} settings`}>
              <Image
              src="/settings-icon.svg"
              alt="settings icon"
              className={`${pathname === '/settings' ? "nav-icon-active" : "opacity-50 settings-hover:opacity-100"} `}
              width={25}
              height={30}
              priority
              />
              <a onClick={() => router.push('/settings')}>Settings</a>
            </li>
            {/* Add more links as needed */}
          </ul>
        </nav>
      </div>

      <a onClick={handleLogout} className='cursor-pointer' style={{display:"flex", padding: "20px 25px"}}>
        <Image
          style={{}}
          src="/logout-icon.svg"
          alt="logout icon"
          /* className={pathname === '/settings' ? "nav-icon-active" : "nav-icon-inactive"} */
          width={25}
          height={30}
          priority
          />
        <span style={{paddingLeft: "20px"}}> Log out </span>
        </a>
    </aside>
  );
};

export default Sidebar;
