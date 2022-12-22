import useGeolocation from "./hook";

const GeolocationComponent = () => {
	const {
		loading,
		error,
		data: { latitude, longitude },
	} = useGeolocation();

	return (
		<>
			<div>Loading: {loading.toString()}</div>
			<div>Error: {error?.message}</div>
			<div>
				{latitude} x {longitude}
			</div>
		</>
	);
};

export default GeolocationComponent;
