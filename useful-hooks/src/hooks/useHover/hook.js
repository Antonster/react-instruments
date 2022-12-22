import { useState, useRef } from "react";
import useDeepCompareEffect from "../useDeepCompareEffect/hook";
import useEventListener from "../useEventListener/hook";

const useHover = () => {
	const [isHovered, setHovered] = useState(false);
	const [element, setElement] = useState();
	const hoverRef = useRef(null);

	const handleMouseEnter = () => setHovered(true);
	const handleMouseLeave = () => setHovered(false);

	useDeepCompareEffect(() => {
		setElement(hoverRef.current);
	}, [hoverRef]);

	useEventListener("mouseover", handleMouseEnter, element);
	useEventListener("mouseout", handleMouseLeave, element);

	return [hoverRef, isHovered];
};

export default useHover;
