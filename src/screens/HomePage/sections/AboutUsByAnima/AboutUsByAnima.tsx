import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const AboutUsByAnima = (): JSX.Element => {
  // Feature items for the right column
  const featureItems = [
    "Innovation And Development",
    "Quality And Precision",
    "The Unique Experience",
    "Difference And Excellence",
  ];

  // Icon items for the center column
  const iconItems = [
    { src: "/group-10.png", alt: "Icon 1" },
    { src: "/group-11.png", alt: "Icon 2" },
    { src: "/group-12.png", alt: "Icon 3" },
    { src: "/straw--1--1.png", alt: "Straw", isImage: true },
  ];

  return (
    <section className="flex items-center gap-8 w-full py-16">
      {/* Left Column - About Us */}
      <div className="flex flex-col w-[358px] items-start gap-6">
        <h2 className="self-stretch [font-family:'Baloo_Bhaina_2',Helvetica] font-bold text-[#333333] text-5xl tracking-[-1.20px] leading-10">
          About Us
        </h2>

        <p className="self-stretch [font-family:'Baloo_Bhaina_2',Helvetica] font-normal text-[#333333] text-base tracking-[0] leading-6">
          Whether you're looking for products for personal or commercial use, we
          offer solutions that meet all needs and requirements.
        </p>

        <div className="flex items-center justify-center self-stretch w-full">
          <Button className="flex-1 bg-[#232b55] rounded-[100px] [font-family:'Baloo_Bhaina_2',Helvetica] font-semibold text-white text-base h-12">
            Know More
          </Button>

          <Button
            className="w-12 h-12 bg-[#232b55] rounded-[100px] ml-2 p-0 flex items-center justify-center"
            aria-label="More information"
          >
            <ArrowRightIcon className="h-6 w-6 text-white" />
          </Button>
        </div>
      </div>

      {/* Center Column - Image with Icons */}
      <div className="relative w-[373px] h-[540px]">
        <div className="relative w-[408px] h-[540px]">
          <img
            className="w-[358px] h-[540px] object-cover"
            alt="Image"
            src="/image-33.png"
          />

          <div className="flex flex-col w-[100px] items-start gap-12 absolute top-[38px] left-[308px]">
            {iconItems.map((icon, index) => (
              <Card
                key={index}
                className="flex w-[90px] h-[90px] items-center justify-center gap-2.5 rounded-[191px] border-[5px] border-solid border-white p-0 bg-transparent"
              >
                <CardContent className="flex w-20 h-20 items-center justify-center p-[25px] bg-white rounded-[50px]">
                  {icon.isImage ? (
                    <img
                      className="w-[61.31px] h-[61.31px]"
                      alt={icon.alt}
                      src={icon.src}
                    />
                  ) : (
                    <div
                      className="relative w-[50px] h-[50px] rotate-180"
                      style={{ backgroundImage: `url(${icon.src})`, backgroundSize: '100% 100%' }}
                      aria-label={icon.alt}
                    />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column - Features */}
      <div className="flex flex-col items-start gap-6">
        {featureItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-center gap-2 px-0 py-1 self-stretch w-full"
          >
            <div className="w-fit [background:linear-gradient(90deg,rgba(35,43,85,1)_0%,rgba(193,23,25,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Baloo_Bhaina_2',Helvetica] font-normal text-transparent text-2xl tracking-[0] leading-[30px] whitespace-nowrap">
              {item}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};