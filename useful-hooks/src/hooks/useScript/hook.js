import useAsync from "../useAsync/hook";

const useScript = (url) => {
	return useAsync(() => {
		const script = document.createElement("script");
		script.src = url;
		script.async = true;

		return new Promise((resolve, reject) => {
			script.addEventListener("load", resolve);
			script.addEventListener("error", reject);
			document.body.appendChild(script);
		});
	}, [url]);
};

export default useScript;
