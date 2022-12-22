import useEventListener from "../useEventListener/hook";

const useClickOutside = (ref, callback) => {
	const listener = (event) => {
		if (ref.current && !ref.current.contains(event.target)) {
			callback(event);
		}
	};

	useEventListener("mousedown", listener, document);
	useEventListener("touchstart", listener, document);
};

export default useClickOutside;
