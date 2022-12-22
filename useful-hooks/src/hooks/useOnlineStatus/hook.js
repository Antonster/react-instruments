import { useState } from "react";
import useEventListener from "../useEventListener/hook";

const useOnlineStatus = () => {
	const [online, setOnline] = useState(navigator.onLine);

	useEventListener("online", () => setOnline(navigator.onLine), window);
	useEventListener("offline", () => setOnline(navigator.onLine), window);

	return online;
};

export default useOnlineStatus;
