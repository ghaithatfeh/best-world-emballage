import React from "react";
import { AboutUsByAnima } from "./sections/AboutUsByAnima";
import { BottomSectionByAnima } from "./sections/BottomSectionByAnima";
import { HeroSectionByAnima } from "./sections/HeroSectionByAnima";
import { MoreThanFiveYearsByAnima } from "./sections/MoreThanFiveYearsByAnima";
import { TopProductsByAnima } from "./sections/TopProductsByAnima";

export const HomePage = (): JSX.Element => {
  return (
    <div
      className="bg-[#fffcf5] flex flex-col items-center w-full"
      data-model-id="38:543"
    >
      <div className="bg-[#fffcf5] w-full max-w-[1440px] relative">
        {/* Hero Section */}
        {/* <HeroSectionByAnima /> */}

        {/* About Us Section */}
        <div className="relative w-full">
          <AboutUsByAnima />
          <img
            className="w-full h-auto"
            alt="Mask group"
            src="/mask-group-1.png"
          />
        </div>

        {/* Top Products Section */}
        <TopProductsByAnima />

        {/* More Than Five Years Section */}
        <div className="relative w-full">
          <MoreThanFiveYearsByAnima />
          <img
            className="absolute w-[104px] h-[123px] top-0 right-0"
            alt="Mask group"
            src="/mask-group.png"
          />
        </div>

        {/* Bottom Section */}
        <BottomSectionByAnima />
      </div>
    </div>
  );
};
