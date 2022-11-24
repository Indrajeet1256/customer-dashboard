import React, { useEffect } from "react";

import UserTable from "../components/UserTable";
import Loading from "../components/Loading";
import ACTIONS from "../reducer/actionTypes";
import { useUserContext } from "../context/userContext";
const API_URL = "https://607a90abbd56a60017ba2c5e.mockapi.io/Customer";

const Home = () => {
	const { state, dispatch } = useUserContext();

	const { filteredUsers: users, loading, error } = state;

	useEffect(() => {
		const fetchUsers = async () => {
			dispatch({ type: ACTIONS.GET_USERS });
			try {
				const data = await (await fetch(API_URL)).json();

				if (data && data.length > 0) {
					const countries = data.reduce((acc, curr) => {
						const { country } = curr;
						return [...acc, { country }];
					}, []);
					const cities = data.reduce((acc, curr) => {
						const { city } = curr;
						return [...acc, { city }];
					}, []);

					dispatch({ type: ACTIONS.SET_COUNTRIES, payload: countries });
					dispatch({ type: ACTIONS.SET_CITIES, payload: cities });
					dispatch({ type: ACTIONS.SET_USERS, payload: data });
				}
			} catch (e) {
				console.log(e);
				const message = new Error(e)?.message || "Failed To Fetch Users...";
				dispatch({ type: ACTIONS.ERROR, payload: message });
			}
		};
		fetchUsers();
	}, [dispatch]);

	return (
		<section>
			{loading && !error && <Loading />}
			{error && !loading && <p>{error}</p>}
			{!!users.length && !loading && !error && <UserTable />}
		</section>
	);
};

export default Home;
