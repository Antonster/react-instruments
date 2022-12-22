import useCopyToClipboard from "./hook";

const CopyToClipboardComponent = () => {
	const [copyToClipboard, { success }] = useCopyToClipboard();

	return (
		<>
			<button onClick={() => copyToClipboard("This was copied")}>
				{success ? "Copied" : "Copy Text"}
			</button>
		</>
	);
};

export default CopyToClipboardComponent;
