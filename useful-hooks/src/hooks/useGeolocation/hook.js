import { useState, useEffect } from "react";

const useGeolocation = (options) => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState();
	const [data, setData] = useState({});

	useEffect(() => {
		const successHandler = (event) => {
			setLoading(false);
			setError(null);
			setData(event.coords);
		};
		const errorHandler = (event) => {
			setError(event);
			setLoading(false);
		};
		navigator.geolocation.getCurrentPosition(
			successHandler,
			errorHandler,
			options
		);
		const id = navigator.geolocation.watchPosition(
			successHandler,
			errorHandler,
			options
		);
		return () => navigator.geolocation.clearWatch(id);
	}, [options]);

	return { loading, error, data };
};

export default useGeolocation;
