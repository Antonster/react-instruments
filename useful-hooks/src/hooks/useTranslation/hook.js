import { useLocalStorage } from "../useStorage/hook";
import * as translations from "./translations";

const getNestedTranslation = (language, keys) => {
	return keys.reduce((obj, key) => {
		return obj?.[key];
	}, translations[language]);
};

const useTranslation = () => {
	const [language, setLanguage] = useLocalStorage("language", "en");
	const [fallbackLanguage, setFallbackLanguage] = useLocalStorage(
		"fallbackLanguage",
		"en"
	);

	const translate = (key) => {
		const keys = key.split(".");

		return (
			getNestedTranslation(language, keys) ??
			getNestedTranslation(fallbackLanguage, keys) ??
			key
		);
	};

	return {
		language,
		setLanguage,
		fallbackLanguage,
		setFallbackLanguage,
		translate,
	};
};

export default useTranslation;
