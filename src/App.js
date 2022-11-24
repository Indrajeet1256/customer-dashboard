import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import NotFound from "./pages/NotFound";
import UserDetails from "./pages/UserDetails";

const App = () => {
	return (
		<main className="main-wrapper">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/users/:id" element={<UserDetails />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</main>
	);
};

export default App;
