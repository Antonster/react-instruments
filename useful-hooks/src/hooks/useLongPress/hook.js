import { useState } from "react";
import useEventListener from "../useEventListener/hook";
import useTimeout from "../useTimeout/hook";
import useEffectOnce from "../useEffectOnce/hook";
import useDeepCompareEffect from "../useDeepCompareEffect/hook";

const useLongPress = (ref, callback, { delay = 250 } = {}) => {
	const { reset, clear } = useTimeout(callback, delay);
	const [element, setElement] = useState();

	useEffectOnce(clear);

	useDeepCompareEffect(() => {
		setElement(ref.current);
	}, [ref]);

	useEventListener("mousedown", reset, element);
	useEventListener("touchstart", reset, element);
	useEventListener("mouseup", clear, element);
	useEventListener("mouseleave", clear, element);
	useEventListener("touchend", clear, element);
};

export default useLongPress;
