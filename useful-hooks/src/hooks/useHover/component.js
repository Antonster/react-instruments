import useHover from "./hook";

const HoverComponent = () => {
	const [hoverRef1, isHovered1] = useHover();
	const [hoverRef2, isHovered2] = useHover();

	return (
		<>
			<div
				ref={hoverRef1}
				style={{
					backgroundColor: isHovered1 ? "blue" : "red",
					width: "100px",
					height: "100px",
					position: "absolute",
					top: "calc(40% - 50px)",
					left: "calc(40% - 50px)",
				}}
			/>
			<div
				ref={hoverRef2}
				style={{
					backgroundColor: isHovered2 ? "blue" : "red",
					width: "100px",
					height: "100px",
					position: "absolute",
					top: "calc(60% - 50px)",
					left: "calc(60% - 50px)",
				}}
			/>
		</>
	);
};

export default HoverComponent;
