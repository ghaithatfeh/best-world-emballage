import { MapPinIcon, MailIcon, PhoneIcon, SendIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { FaPaperPlane } from "react-icons/fa";
import { GoogleMapsEmbed } from "@next/third-parties/google";

export const ContactSection = () => {
	// Contact info data
	const contactInfo = [
		{
			id: 1,
			icon: <PhoneIcon className="w-5 h-5 text-white" />,
			label: "Phone",
			value: "+212520397044",
		},
		{
			id: 2,
			icon: <MailIcon className="w-5 h-5 text-white" />,
			label: "E-Mail",
			value: "info@bestworldemballage.com",
		},
		{
			id: 3,
			icon: <MapPinIcon className="w-5 h-5 text-white" />,
			label: "Location",
			value: "Morocco, Al-Dar Al-Baidaa, Darb Omar, Khrebka ST",
		},
	];

	return (
		<section className="pt-20" id="contact">
			<Card className="max-w-[1095px] mx-auto bg-[#fffcf5] rounded-[30px] p-8 flex flex-col md:flex-row gap-8 shadow-lg -mb-3 md:-mb-10 z-10 relative">
				{/* Contact Information */}
				<div className="flex flex-col gap-8">
					<div className="flex flex-col gap-4">
						<p className="font-['Baloo_Bhaina_2',Helvetica] font-normal text-[#333333] text-base leading-6 max-w-[424px]">
							For inquiries, orders, and anything on your mind regarding our
							products, please feel free to contact us.
						</p>
						<p className="font-['Baloo_Bhaina_2',Helvetica] font-medium text-[#333333] text-2xl leading-[30px] max-w-[424px]">
							Our team will be ready and very happy to make your life easier,
							healthier, and your work more distinctive and innovative.
						</p>
					</div>
					<div className="flex flex-col gap-6">
						{contactInfo.map((item) => (
							<div key={item.id} className="flex items-center gap-4">
								<div className="p-4 bg-primary rounded-full">
									<div className="w-6 h-6 flex items-center justify-center">
										{item.icon}
									</div>
								</div>
								<div className="flex flex-col gap-1">
									<p className="font-['Baloo_Bhaina_2',Helvetica] font-normal text-[#333333] text-sm leading-5">
										{item.label}
									</p>
									<p className="font-['Baloo_Bhaina_2',Helvetica] font-semibold text-[#333333] text-base leading-6">
										{item.value}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Contact Form */}
				<form className="flex flex-col gap-6 flex-1">
					<h3 className="font-['Baloo_Bhaina_2',Helvetica] font-medium text-[#333333] text-2xl leading-[30px]">
						Contact us
					</h3>
					<div className="flex flex-col gap-4">
						<div className="flex flex-col sm:flex-row gap-4">
							<Input
								className="h-12 bg-white rounded-2xl focus:border-[#ffc85b] focus-visible:ring-0"
								placeholder="First Name"
							/>
							<Input
								className="h-12 bg-white rounded-2xl focus:border-[#ffc85b] focus-visible:ring-0"
								placeholder="Last Name"
							/>
						</div>
						<Input
							className="h-12 bg-white rounded-2xl focus:border-[#ffc85b] focus-visible:ring-0"
							placeholder="Email"
						/>
						<Textarea
							className="h-[165px] bg-white rounded-2xl focus:border-[#ffc85b] focus-visible:ring-0 py-3"
							placeholder="Your message"
						/>
					</div>
					<div className="flex items-center">
						<Button
							type="submit"
							className="bg-primary rounded-full px-8 h-12 font-['Baloo_Bhaina_2',Helvetica] font-semibold"
						>
							Send
						</Button>
						<Button
							size="icon"
							className="bg-primary rounded-full h-12 w-12 ml-0"
							type="submit"
						>
							<FaPaperPlane className="h-3 w-3" />
						</Button>
					</div>
				</form>
			</Card>

			<GoogleMapsEmbed
				apiKey="AIzaSyC2kJf46LiAV6OCoAkmHTixY5FekhNGyLE"
				height={600}
				width="100%"
				mode="place"
				q="Best+World+Emballage،+20100,+Casablanca,+Morocco"
				zoom="15"
			/>
		</section>
	);
};
