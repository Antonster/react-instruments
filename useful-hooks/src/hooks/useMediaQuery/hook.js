import { useState, useEffect } from "react";
import useEventListener from "../useEventListener/hook";

const useMediaQuery = (mediaQuery) => {
	const [isMatch, setIsMatch] = useState(false);
	const [mediaQueryList, setMediaQueryList] = useState(null);

	useEffect(() => {
		const list = window.matchMedia(mediaQuery);
		setMediaQueryList(list);
		setIsMatch(list.matches);
	}, [mediaQuery]);

	useEventListener(
		"change",
		(event) => setIsMatch(event.matches),
		mediaQueryList
	);

	return isMatch;
};

export default useMediaQuery;
