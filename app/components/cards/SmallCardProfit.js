import React from "react";
import Image from "next/image";

export default function SmallCardProfit(props) {
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
      <div className="card-content" style={{ color: props.color }}>
        <div className="first-section text-4xl font-black flex justify-center">
            <Image
                src={props.first_section_value}
                width={215}
                height={215}
                alt="chart"
                priority
            />
        </div>
        <div className="middle-section text-sm pt-3 text-lime-300 font-semibold">
        {props.second_section_value}
        </div>
        <div className="last-section text-4xl font-bold">
          {props.third_section_value}
        </div>
      </div>
    </div>
  );
}
