import { useState } from "react";
import usePrevious from "./hook";

const PreviousComponent = () => {
	const [count, setCount] = useState(0);
	const previousCount = usePrevious(count);

	return (
		<div>
			<div>
				{count} - {previousCount}
			</div>
			<button onClick={() => setCount((currentCount) => currentCount + 1)}>
				Increment
			</button>
		</div>
	);
};

export default PreviousComponent;
