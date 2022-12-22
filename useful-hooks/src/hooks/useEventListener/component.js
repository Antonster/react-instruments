import { useState } from "react";
import useEventListener from "./hook";

const EventListenerComponent = () => {
	const [key, setKey] = useState("");
	useEventListener("keydown", (event) => {
		setKey(event.key);
	});

	return <div>Last Key: {key}</div>;
};

export default EventListenerComponent;
