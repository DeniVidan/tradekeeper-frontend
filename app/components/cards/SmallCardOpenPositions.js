import React from "react";
import Image from "next/image";

export default function SmallCardOpenPositions(props) {
  return (
    <div
      className={`card-wrapper rounded-3xl px-6 py-4`}
      style={{
        backgroundColor: props.bg_color,
        minWidth: props.width,
        minHeight: props.height,
        maxWidth: props.width,
        maxHeight: props.height,
      }}
    >
      <div className="card-title flex">
        <div className="icon-img">
          {/*           <Image
            className="invert"
            alt="icon image"
            src={props.icon}
            width={50}
            height={50}
            priority
          /> */}
        </div>

        <div className="title text-3xl font-bold self-center">
          <h1 className="text-2xl" style={{ color: props.color }}>
            {props.card_title}
          </h1>
        </div>
      </div>
      <div className="card-content" style={{ color: props.color }}>
        <div className="first-section text-2xl font-bold flex justify-start gap-2 text-lime-300 mt-2">
          <span className="">{props.first_section_value + " "}</span> 
          <span className="text-sm self-center">total PnL</span> 
        </div>
        <div className="middle-section text-sm mt-4 font-semibold">
          <div className="flex justify-start gap-10">
            <span className="text-xl">1. BTC</span>
            <span className="text-lime-300 self-center">+ $12.44</span>
          </div>
          <div className="flex justify-start gap-10">
            <span className="text-xl">2. ETH</span>
            <span className="text-red-500 self-center">- $5.91</span>
          </div>
          <div className="flex justify-start gap-10">
            <span className="text-xl">3. SOL</span>
            <span className="text-lime-300 self-center">+ $7.05</span>
          </div>
          {props.second_section_value}
        </div>
      </div>
    </div>
  );
}
