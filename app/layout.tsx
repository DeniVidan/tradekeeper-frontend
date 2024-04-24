"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import { useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });
import { Auth } from "@/services/service";
import { useRouter, usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();


  useEffect(() => {  
    const isAuth = Auth.state.authenticate; // Move isAuth outside of useLayoutEffect
    if (!isAuth && pathname !== "/register") {
      router.push("login");
      router.refresh();
    }
  }, []);

  function pokazi() {
    const isAuth = Auth.state.authenticate;
    console.log(isAuth)
    return isAuth
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="wrapper">
          {pokazi() /* && 
            (
              
                
              
            ) */
          }
<Sidebar />
          <div className="flex flex-col w-full pt-5 pr-7">
            <div>
              {/* <Topbar /> */}
            </div>
            <div>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
