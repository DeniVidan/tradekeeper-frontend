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

  function isAuth() {
    const isAuth = Auth.state.authenticate;
    //console.log("pokazi: ", isAuth);
    return isAuth;
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="wrapper">
          <div className="z-10">
            {isAuth() && <Sidebar />}
          </div>
          

          <div className="flex flex-col w-full">
            <div className="z-0">
              <Topbar />
            </div>
            <div className="sm:ml-64">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
