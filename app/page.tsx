"use client"
import Image from "next/image";
import Topbar from "./components/topbar/Topbar";
import SmallCardPortfolio from "./components/cards/SmallCardPortfolio";
import SmallCardProfit from "./components/cards/SmallCardProfit";
import SmallCardOpenPositions from "./components/cards/SmallCardOpenPositions";
import config from "@/tailwind.config";
import { useEffect, useLayoutEffect } from 'react';
import {Service, Auth} from '@/services/service'
import { redirect } from 'next/navigation';
import useRequireAuth from "@/services/useRequireAuth";
import { useRouter } from "next/navigation";



export default function Home() {
  const colors = config.theme?.extend?.colors;
  const router = useRouter()


  useLayoutEffect(() => {
    const isAuth = Auth.state.authenticate;
    if(!isAuth){
      router.push("login")
      router.refresh()
    }
  }, [])


  useRequireAuth();

  return (
    <main className="flex w-full justify-between p-11 mt-5">
      <div className="wrapper flex flex-col">
        <div className="title text-3xl font-bold">
          <h1> Overview </h1>
        </div>
        <div className="content-wrapper mt-10">
          <div className="card-wrapper flex flex-wrap gap-10">
            <SmallCardPortfolio
              icon="/wallet-icon-colored.svg"
              first_section_value={`${"$" + 1205.65}`}
              second_section_value = "/trendline.svg"
              card_title="Portfolio"
              color="black"
              bg_color={colors?.detail_lightblue}
              width={300}
              height={300}
            />
            <SmallCardProfit
              icon="/money-colored.svg"
              first_section_value = "/computer-guy.svg"
              second_section_value={`${"+ $" + 12.5} PnL`}
              third_section_value={`${"$" + 103.35}`}
              card_title="Profit"
              color="white"
              bg_color={colors?.detail_blue}
              width={300}
              height={300}
            />
            <SmallCardOpenPositions
                icon="/money-colored.svg"
                first_section_value={`${"+ $" + 13.58}`}
                card_title="Open positions"
                color="white"
                bg_color={colors?.detail_blue}
                width={300}
                height={300}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
