import useWindowSize from "./hook";

const WindowSizeComponent = () => {
	const { width, height } = useWindowSize();

	return (
		<div>
			{width} x {height}
		</div>
	);
};

export default WindowSizeComponent;
