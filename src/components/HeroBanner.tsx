import React from "react";
import Image from "next/image";
import { playfairDisplay, forum, openSans } from "@/app/fonts/fonts";

const HeroBanner = () => {
  return (
    <div className="relative w-full h-72 md:h-96 lg:h-[40rem] overflow-hidden">
      {/* Hero Banner Background Image */}
      <div className="-z-10">
        <Image
          priority
          src="/Banner.png"
          fill={true}
          className="object-cover object-center"
          alt="hero image example"
        />
      </div>

      {/* Text Overlay */}
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-20 p-6 rounded-lg">
        <h1
          className={`${playfairDisplay.className} lg:mb-10 text-3xl md:text-4xl lg:text-[6rem] font-bold drop-shadow-xl max-w-md md:max-w-md lg:max-w-[80rem] lg:leading-[5.5rem]`}
        >
          Where Comfort Meets Nature
        </h1>
        <h2
          className={`${forum.className} mt-4 lg:mt-3 text-lg md:text-2xl lg:text-4xl italic font-normal drop-shadow-xl`}
        >
          Your perfect getaway spot.
        </h2>
        <button
          className={`${openSans.className} mt-10 text-xs md:text-sm lg:text-xl bg-transparent hover:underline text-white  font-semibold py-2 px-6 rounded-lg transition duration-300 `}
        >
          Explore More
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
