import { createContext, useContext, useReducer } from "react";
import reducer, { initialState } from "../reducer/userReducer";
import ACTIONS from "../reducer/actionTypes";

const UserContext = createContext(undefined);

export function useUserContext() {
	return useContext(UserContext);
}

export default function Provider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	const handleCountryChange = (country) => {
		if (!country) return;
		const filterdList = [...state.users].filter(
			(user) => user?.country.toLowerCase() === country.toLowerCase()
		);

		const filteredCities = filterdList.reduce((acc, curr) => {
			const { city } = curr;
			return [...acc, { city }];
		}, []);

		dispatch({ type: ACTIONS.SET_CITIES, payload: filteredCities });

		dispatch({ type: ACTIONS.SET_FILTEREDUSERS, payload: filterdList });
	};

	const handleCityChange = (city) => {
		if (!city) return;
		const filterdList = [...state.users].filter((user) => {
			return user?.city.toLowerCase() === city.toLowerCase();
		});

		dispatch({ type: ACTIONS.SET_FILTEREDUSERS, payload: filterdList });
	};

	const data = {
		state,
		dispatch,
		handleCountryChange,
		handleCityChange,
	};
	return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}
