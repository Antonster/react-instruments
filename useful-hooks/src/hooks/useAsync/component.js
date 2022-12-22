import { useState } from "react";
import useAsync from "./hook";

const AsyncComponent = () => {
	const [count, setCount] = useState(1);
	const { loading, error, value } = useAsync(() => {
		return new Promise((resolve, reject) => {
			const success = true;
			setTimeout(() => {
				success ? resolve("Hi") : reject("Error");
			}, 1000);
		});
	}, [count]);

	return (
		<div>
			<div>{count}</div>
			<button onClick={() => setCount((c) => c + 1)}>Increment</button>
			<div>Loading: {loading.toString()}</div>
			<div>{error}</div>
			<div>{value}</div>
		</div>
	);
};

export default AsyncComponent;
