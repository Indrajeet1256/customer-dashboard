import React from "react";
import "./UserTable.css";

import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";

const IMAGE_URL = "https://randomuser.me/api/portraits";

const UserTable = () => {
	const navigate = useNavigate();
	const {
		state: { countries, cities, filteredUsers: users },
		handleCountryChange,
		handleCityChange,
	} = useUserContext();

	return (
		<>
			<div className="filter-group">
				<select onChange={(ev) => handleCountryChange(ev.target.value)}>
					<option value="">Select Country</option>
					{countries.map(({ country }, index) => (
						<option value={country} key={index}>
							{country}
						</option>
					))}
				</select>

				<select onChange={(ev) => handleCityChange(ev.target.value)}>
					<option value="">Select City</option>
					{cities.map(({ city }, index) => (
						<option value={city} key={index}>
							{city}
						</option>
					))}
				</select>
			</div>
			<table className="user-table">
				<thead>
					<tr>
						<th>Image</th>
						<th>Full Name</th>
						<th>Phone</th>
						<th>Email</th>
						<th>City</th>
						<th>Country</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user.id} onClick={() => navigate(`/users/${user.id}`)}>
							<td>
								<img
									width={50}
									height={50}
									alt={user.name}
									src={`${IMAGE_URL}/${user.women ? "women" : "men"}/${
										user.id
									}.jpg`}
								/>
							</td>

							<td>{user.name}</td>
							<td>{user.phone}</td>
							<td>{user.email}</td>
							<td>{user.city}</td>
							<td>{user.country}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default UserTable;
