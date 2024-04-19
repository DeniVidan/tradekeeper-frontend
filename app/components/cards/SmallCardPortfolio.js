import React from "react";
import Image from "next/image";

export default function SmallCardPortfolio(props) {
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
          <Image
            /* className="invert" */
            alt="icon image"
            src={props.icon}
            width={50}
            height={50}
            priority
          />
        </div>

        <div className="title text-3xl font-bold self-center">
          <h1 className="text-2xl pl-4" style={{ color: props.color }}>
            {props.card_title}
          </h1>
        </div>
      </div>
      <div className="card-content flex flex-col justify-between gap-10" style={{ color: props.color }}>
        <div className="first-section text-4xl font-black pt-3">
            {props.first_section_value}
        </div>
        <div className="middle-section">
            <Image
            src={props.second_section_value}
            width={props.width}
            height={props.height}
            alt="chart"
            priority
            />
        </div>
        <div className="last-section">
          <div className="timeframe-wrapper flex gap-3 text-sm font-black">
            <span>1W</span>
            <span style={{opacity: 0.5}}>1D</span>
            <span style={{opacity: 0.5}}>4H</span>
            <span style={{opacity: 0.5}}>1H</span>
            <span style={{opacity: 0.5}}>15M</span>
          </div>
        </div>
      </div>
    </div>
  );
}
