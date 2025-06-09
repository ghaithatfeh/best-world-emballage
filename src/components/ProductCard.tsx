import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { ChevronRightIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface Props {
	product: {
		image: string;
		avatars: { src: string; alt: string }[];
		extraAvatars?: number;
		code: string;
		name: string;
	};
}

const ProductCard = ({ product }: Props) => {
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

export default ProductCard;