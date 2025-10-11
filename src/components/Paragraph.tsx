interface Props {
	children?: React.ReactNode;
}

const Paragraph = ({ children }: Props) => {
	return <p className="text-lg leading-10 tracking-wide text-[#333] mt-5">{children}</p>;
};

export default Paragraph;