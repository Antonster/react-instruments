import { useState, useEffect } from "react";

const useSize = (ref) => {
	const [size, setSize] = useState({});

	useEffect(() => {
		const observer = new ResizeObserver(([entry]) =>
			setSize(entry.contentRect)
		);
		observer.observe(ref.current);

		return () => observer.disconnect();
	}, []);

	return size;
};

export default useSize;
