import useTranslation from "./hook";

const TranslationComponent = () => {
	const { language, setLanguage, setFallbackLanguage, translate } =
		useTranslation();

	return (
		<>
			<div>{language}</div>
			<div>{translate("hi")}</div>
			<div>{translate("bye")}</div>
			<div>{translate("nested.value")}</div>
			<button onClick={() => setLanguage("sp")}>Change To Spanish</button>
			<button onClick={() => setLanguage("en")}>Change To English</button>
			<button onClick={() => setFallbackLanguage("sp")}>Change FB Lang</button>
		</>
	);
};

export default TranslationComponent;
