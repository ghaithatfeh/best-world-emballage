interface Props {
	children?: React.ReactNode;
}

const Heading = ({ children }: Props) => {
	return (
		<h1 className="text-4xl font-bold tracking-wide leading-[1.1] text-[#333]">{children}</h1>
	);
};

export default Heading;
