import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSectionByAnima = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
    { name: "Home", icon: "/group-8.png", active: true },
    { name: "About Us", active: false },
    { name: "Products", active: false },
    { name: "Contact Us", active: false },
  ];

  // Carousel indicators
  const indicators = [{ active: true }, { active: false }, { active: false }];

  return (
    <div className="flex flex-col w-full items-center relative">
      <div className="flex flex-col h-[550px] items-center gap-[79px] relative self-stretch w-full [background:linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_100%),linear-gradient(180deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0)_100%),url(/frame-17532.png)_50%_50%_/_cover]">
        <header className="flex flex-col w-full items-center gap-3.5 pt-5 pb-4 px-[120px] relative flex-[0_0_auto] bg-transparent">
          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            {/* Logo */}
            <div className="relative w-[110px] h-[72px]">
              <div className="relative h-[72px]">
                <div className="absolute w-[110px] h-10 top-0 left-0 bg-[url(/vector-2.svg)] bg-[100%_100%]">
                  <img
                    className="absolute w-[26px] h-[7px] top-[33px] left-[81px]"
                    alt="Vector"
                    src="/vector.svg"
                  />
                  <img
                    className="absolute w-[17px] h-1.5 top-[18px] left-[85px]"
                    alt="Vector"
                    src="/vector.svg"
                  />
                </div>
                <img
                  className="absolute w-[89px] h-2 top-[54px] left-2.5"
                  alt="Group"
                  src="/group-4.png"
                />
                <img
                  className="absolute w-[94px] h-1.5 top-[46px] left-2"
                  alt="Group"
                  src="/group-5.png"
                />
                <img
                  className="absolute w-[94px] h-2 top-16 left-2"
                  alt="Group"
                  src="/group-6.png"
                />
              </div>
            </div>


            {/* Language Selector */}
            <div className="inline-flex items-center justify-center gap-1 px-1.5 py-0 relative flex-[0_0_auto] rounded-[91px]">
              <div className="relative w-4 h-4">
                <div className="relative h-2.5 top-[3px] bg-[url(/vector-6.svg)] bg-[100%_100%]">
                  <div className="relative w-4 h-2.5 bg-[url(/vector-1.svg)] bg-[100%_100%]">
                    <img
                      className="absolute w-4 h-2.5 top-0 left-0"
                      alt="Group"
                      src="/group-9.png"
                    />
                  </div>
                </div>
              </div>
              <div className="relative w-5 h-[18px] [font-family:'Baloo_Bhaina_2',Helvetica] font-normal text-white text-base tracking-[0] leading-4 whitespace-nowrap">
                En
              </div>
              <ChevronDownIcon className="h-4 w-4 text-white rotate-180" />
            </div>
          </div>
        </header>

        {/* Hero Content */}
        <div className="inline-flex items-center justify-center gap-[120px] relative flex-[0_0_auto]">
          <div className="flex w-[1120px] items-end justify-between relative">
            <div className="flex flex-col items-start justify-center gap-4 relative flex-1 grow">
              <div className="relative w-[670px] mt-[-1.00px] [font-family:'Baloo-Regular',Helvetica] font-normal text-white text-4xl tracking-[0] leading-[normal]">
                Best World Emballag
              </div>
              <div className="relative self-stretch [font-family:'Baloo_Bhaina_2',Helvetica] font-normal text-white text-xl tracking-[0] leading-[30px]">
                Little things for comfort and ease in your life
                <br />
                Our company specializes in importing and distributing plastic
                table tools at the Moroccan market.
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="inline-flex items-center justify-center relative flex-[0_0_auto]">
              <Button className="inline-flex items-center justify-center gap-3 px-8 py-0 relative flex-[0_0_auto] bg-[#232b55] rounded-[100px] overflow-hidden h-12">
                <span className="[font-family:'Baloo_Bhaina_2',Helvetica] font-semibold text-white text-base tracking-[0] whitespace-nowrap">
                  Know More
                </span>
              </Button>

              <Button
                className="flex w-12 h-12 items-center justify-center gap-3 px-8 py-0 relative bg-[#232b55] rounded-[100px] overflow-hidden ml-2"
                variant="default"
              >
                <div className="relative w-6 h-6 ml-[-20.00px] mr-[-20.00px]">
                  <img
                    className="absolute w-3 h-3 top-1.5 left-1.5"
                    alt="Svgrepo iconcarrier"
                    src="/svgrepo-iconcarrier-3.png"
                  />
                </div>
              </Button>
            </div>
          </div>

          {/* Carousel Navigation */}
          <div className="inline-flex flex-col items-center gap-6 relative flex-[0_0_auto]">
            <img
              className="relative flex-[0_0_auto]"
              alt="Left arrow button"
              src="/left-arrow-button-3.svg"
            />

            <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
              {indicators.map((indicator, index) => (
                <div
                  key={index}
                  className={`relative w-2 h-2 ${indicator.active ? "bg-white" : "border border-solid border-white"} rounded-[100px] -rotate-90`}
                />
              ))}
            </div>

            <img
              className="relative flex-[0_0_auto]"
              alt="Left arrow button"
              src="/left-arrow-button-2.svg"
            />
          </div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <div className="inline-flex items-center gap-2.5 p-2.5 relative flex-[0_0_auto] mt-[-34px] bg-[#fffcf5] rounded-[100px]">
        <div className="flex flex-col w-14 h-14 items-center justify-center relative bg-[#232b55] rounded-[100px] overflow-hidden">
          <img className="relative w-8 h-8" alt="Icon" src="/icon-1.svg" />
          <img
            className="relative w-8 h-8 mt-[-15px]"
            alt="Icon"
            src="/icon.svg"
          />
        </div>
      </div>
    </div>
  );
};
