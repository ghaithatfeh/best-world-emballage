import { Link } from "@/i18n/routing";
import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { Button } from "./ui/button";

const PageEnd = ({
	text,
	btnLabel,
	btnLink,
}: {
	text: string;
	btnLabel: string;
	btnLink: string;
}) => {
	return (
		<section>
			<div className="bg-[url('/bg-ending.webp')] bg-cover bg-center py-20 md:py-40">
				<div className="container mx-auto">
					<h2 className="text-2xl md:text-4xl text-white text-center font-bold tracking-wide !leading-[1.6] [text-shadow:_1px_1px_0_#0000007f]">
						{text}
					</h2>
					<div className="flex justify-center mt-5">
						<Link href={btnLink}>
							<Button className="bg-primary rounded-full px-8 h-12">
								{btnLabel}
							</Button>
						</Link>
						<Link href={btnLink}>
							<Button
								size="icon"
								className="bg-primary rounded-full h-12 w-12 ml-0"
								type="submit"
							>
								<FaPaperPlane className="h-3 w-3" />
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PageEnd;
