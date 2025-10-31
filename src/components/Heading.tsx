import { cn } from "@/lib/utils";

interface Props {
	children?: React.ReactNode;
	className?: string;
}

const Heading = ({ children, className }: Props) => {
	return (
		<h1 className={cn("text-2xl md:text-4xl font-bold mb-4 text-gray-900", className)}>{children}</h1>
	);
};

export default Heading;
