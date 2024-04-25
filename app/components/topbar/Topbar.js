"use client";
import Image from "next/image";
import { useContext } from "react";
import getUserData from "@/services/getUserData";
import { useRouter, usePathname } from "next/navigation";

export default function Topbar() {
  const router = useRouter();
  const pathname = usePathname();
  let user = JSON.parse(localStorage.getItem("user"))

  //console.log("user data: ", user);

  return (
    <div className="w-full">
      <div className="navbar justify-end">
        <div className="flex flex-row justify-end gap-1">
          {user.token ? (
            <div className="flex flex-row justify-end gap-1 ">
              <div className="light-dark-mode flex justify-center border border-weak_white rounded-xl h-10 w-10 cursor-pointer">
                {" "}
                <Image
                  src="/moon-icon.svg"
                  alt="moon icon"
                  width={0}
                  height={0}
                  style={{ width: "20px", height: "auto" }}
                  priority
                />
              </div>
              <div className="notifications flex justify-center border border-weak_white rounded-xl h-10 w-10 cursor-pointer">
                <Image
                  src="/bell-icon.svg"
                  alt="bell icon"
                  width={0}
                  height={0}
                  style={{ width: "20px", height: "auto" }}
                  priority
                />
              </div>

              <div className="cursor-pointer account border flex border-transparent bg-detail_blue rounded-xl h-10">
                <div className="account-img flex items-center pl-0.5">
                  <Image
                    src="/MaskaDeni.jpg"
                    alt="profile image"
                    width={0}
                    height={0}
                    style={{ width: "35px", height: "auto" }}
                    className="rounded-lg"
                    priority
                  />
                </div>
                <div className="account-info flex flex-col px-2 justify-center">
                  <span className="text-sm">{JSON.parse(localStorage.getItem("user")).username}</span>
                  <span className="text-light_white text-xs">{JSON.parse(localStorage.getItem("user")).email}</span>
                </div>
              </div>
            </div>
          ) : pathname === "/login" ? (
            <div className="self-center text-end bg-detail_blue">
              Register cigan
            </div>
          ) : (
            <div className="self-center text-end bg-detail_blue">
              Login cigan
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
