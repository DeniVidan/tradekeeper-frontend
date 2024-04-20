"use client"
import Image from "next/image";


export default function Home() {

  return (
    
      <div className="w-full">
        <div className="navbar justify-end">
          <div className="flex flex-row justify-end gap-1">
            <div className="light-dark-mode flex justify-center border border-weak_white rounded-xl h-10 w-10 cursor-pointer">
              {" "}
              <Image
                src="/moon-icon.svg"
                alt="moon icon"
                width={20}
                height={20}
                priority
              />
            </div>
            <div className="notifications flex justify-center border border-weak_white rounded-xl h-10 w-10 cursor-pointer">
              <Image
                src="/bell-icon.svg"
                alt="bell icon"
                width={20}
                height={20}
                priority
              />
            </div>
            <div className="cursor-pointer account border flex border-transparent bg-detail_blue rounded-xl h-10">
              <div className="account-img flex items-center pl-0.5">
                <Image
                  src="/MaskaDeni.jpg"
                  alt="profile image"
                  width={35}
                  height={35}
                  className="rounded-lg"
                  priority
                  
                />
              </div>
              <div className="account-info flex flex-col px-2 justify-center">
                <span className="text-sm">Deni V</span>
                <span className="text-light_white text-xs">deni*****@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}
