import useStateWithValidation from "./hook";

const StateWithValidationComponent = () => {
	const [username, setUsername, isValid] = useStateWithValidation(
		(name) => name.length > 5,
		""
	);

	return (
		<>
			<div>Valid: {isValid.toString()}</div>
			<input
				type="text"
				value={username}
				onChange={(event) => setUsername(event.target.value)}
			/>
		</>
	);
};

export default StateWithValidationComponent;
