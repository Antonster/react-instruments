import useRenderCount from "./hook";
import useToggle from "../useToggle/hook";

export default function RenderCountComponent() {
	const [boolean, toggle] = useToggle(false);

	const renderCount = useRenderCount();

	return (
		<>
			<div>{boolean.toString()}</div>
			<div>{renderCount}</div>
			<button onClick={toggle}>Toggle</button>
		</>
	);
}
