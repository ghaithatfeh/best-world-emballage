import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Product data for mapping
const products = [
  {
    id: 1,
    image: "/image-29.png",
    avatars: [
      { src: "/image-26.png", alt: "User avatar" },
      { src: "/image-27.png", alt: "User avatar" },
      { src: "/image-28.png", alt: "User avatar" },
    ],
    extraAvatars: 7,
    code: "0303",
    name: "Vip Coffee Spoon",
  },
  {
    id: 2,
    image: "/image-29.png",
    avatars: [
      { src: "/image-26.png", alt: "User avatar" },
      { src: "/image-27.png", alt: "User avatar" },
      { src: "/image-28.png", alt: "User avatar" },
    ],
    extraAvatars: 2,
    code: "0303",
    name: "Fork",
  },
  {
    id: 3,
    image: "/image-29.png",
    avatars: [
      { src: "/image-26.png", alt: "User avatar" },
      { src: "/image-27.png", alt: "User avatar" },
      { src: "/image-28.png", alt: "User avatar" },
    ],
    code: "0303",
    name: "Vip Coffee Spoon",
  },
  {
    id: 4,
    image: "/image-29.png",
    avatars: [
      { src: "/image-26.png", alt: "User avatar" },
      { src: "/image-27.png", alt: "User avatar" },
      { src: "/image-28.png", alt: "User avatar" },
    ],
    extraAvatars: 2,
    code: "0303",
    name: "Knife",
  },
  {
    id: 5,
    image: "/image-29.png",
    avatars: [
      { src: "/image-26.png", alt: "User avatar" },
      { src: "/image-27.png", alt: "User avatar" },
      { src: "/image-28.png", alt: "User avatar" },
    ],
    extraAvatars: 7,
    code: "0303",
    name: "Straight Straw",
  },
  {
    id: 6,
    image: "/image-29.png",
    avatars: [
      { src: "/image-30.png", alt: "User avatar" },
      { src: "/image-31.png", alt: "User avatar" },
      { src: "/image-32.png", alt: "User avatar" },
    ],
    code: "0303",
    name: "Flexible Straw",
  },
  {
    id: 7,
    image: "/image-29.png",
    avatars: [
      { src: "/image-26.png", alt: "User avatar" },
      { src: "/image-27.png", alt: "User avatar" },
      { src: "/image-28.png", alt: "User avatar" },
    ],
    extraAvatars: 7,
    code: "0303",
    name: "Wrapped Straight Straw",
  },
  {
    id: 8,
    image: "/image-29.png",
    avatars: [
      { src: "/image-30.png", alt: "User avatar" },
      { src: "/image-31.png", alt: "User avatar" },
      { src: "/image-32.png", alt: "User avatar" },
    ],
    extraAvatars: 7,
    code: "0303",
    name: "Wrapped Flexible Straw",
  },
];

export const TopProductsByAnima = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-6 py-12 w-full">
      <h2 className="[font-family:'Baloo_Bhaina_2',Helvetica] font-bold text-[#333333] text-5xl text-center tracking-[-1.20px] leading-10">
        Top Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-7xl">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-7xl">
        {products.slice(4, 8).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex items-center">
        <Button className="bg-[#232b55] text-white rounded-full px-8 h-12 [font-family:'Baloo_Bhaina_2',Helvetica] font-semibold">
          See All
          <div className="w-6 h-6 ml-2 flex items-center justify-center">
            <img
              className="w-3 h-3"
              alt="Icon"
              src="/svgrepo-iconcarrier-2.png"
            />
          </div>
        </Button>
      </div>
    </section>
  );
};

interface ProductCardProps {
  product: {
    image: string;
    avatars: { src: string; alt: string }[];
    extraAvatars?: number;
    code: string;
    name: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="w-full rounded-2xl overflow-hidden shadow-[0px_0px_6px_#28293d12] border-none">
      <div className="relative">
        <img
          className="w-full h-[230px] object-cover"
          alt="Product"
          src={product.image}
        />
        <div className="flex items-center gap-2.5 absolute -bottom-4 left-4">
          {product.avatars.map((avatar, index) => (
            <Avatar
              key={index}
              className="w-[38px] h-[38px] border-2 border-white"
            >
              <img
                src={avatar.src}
                alt={avatar.alt}
                className="w-full h-full object-cover"
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          ))}
          {product.extraAvatars && (
            <div className="flex w-11 h-11 items-center justify-center bg-white rounded-full border-[3px] border-solid">
              <span className="[font-family:'Baloo_Bhaina_2',Helvetica] font-medium text-[#333333] text-sm text-center">
                +{product.extraAvatars}
              </span>
            </div>
          )}
        </div>
      </div>
      <CardContent className="flex flex-col items-start gap-3 pt-6 pb-4">
        <span className="[font-family:'Baloo_Bhaina_2',Helvetica] font-normal text-[#c91430] text-sm tracking-[0.20px] leading-[22px]">
          Product Code: {product.code}
        </span>
        <h3 className="self-stretch [font-family:'Baloo_Bhaina_2',Helvetica] font-bold text-[#333333] text-xl tracking-[0] leading-[18px]">
          {product.name}
        </h3>
        <div className="flex items-center gap-1">
          <span className="[font-family:'Baloo_Bhaina_2',Helvetica] font-medium text-[#232b55] text-sm tracking-[0] leading-4">
            Learn More
          </span>
          <ChevronRightIcon className="w-4 h-4 rotate-90 text-[#232b55]" />
        </div>
      </CardContent>
    </Card>
  );
};
