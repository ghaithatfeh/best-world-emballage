interface Props {
	children?: React.ReactNode;
}

const Heading = ({ children }: Props) => {
	return (
		<h1 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900">{children}</h1>
	);
};

export default Heading;
