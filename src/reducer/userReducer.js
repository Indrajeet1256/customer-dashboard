import ACTIONS from "./actionTypes";

export const initialState = {
	users: [],
	filteredUsers: [],
	cities: [],
	loading: false,
	error: null,
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case ACTIONS.GET_USERS:
			return {
				...state,
				loading: true,
				users: [],
				filteredUsers: [],
				error: null,
			};
		case ACTIONS.SET_USERS:
			return {
				...state,
				loading: false,
				users: action.payload,
				filteredUsers: action.payload,
				ferror: null,
			};
		case ACTIONS.SET_COUNTRIES:
			return { ...state, countries: action.payload };
		case ACTIONS.SET_CITIES:
			return { ...state, cities: action.payload };
		case ACTIONS.SET_FILTEREDUSERS:
			return { ...state, filteredUsers: action.payload };
		case ACTIONS.ERROR:
			return {
				...state,
				loading: false,
				users: [],
				filteredUsers: [],
				error: action.payload,
			};
		default:
			return state;
	}
}
