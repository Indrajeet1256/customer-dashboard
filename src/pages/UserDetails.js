import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useUserContext } from "../context/userContext";
import "../styles/UserDetails.css";

const IMAGE_URL = "https://randomuser.me/api/portraits";

const UserDetails = () => {
	const { id } = useParams();
	const {
		state: { users },
	} = useUserContext();
	const foundUser = useMemo(() => {
		return !!users?.length ? users.find((user) => user.id === id) : null;
	}, [id, users]);

	if (foundUser) {
		return (
			<div className="user-details">
				<h1>Customer Details</h1>
				<div className="user-image__wrapper">
					<img
						alt={foundUser.name}
						src={`${IMAGE_URL}/${foundUser.women ? "women" : "men"}/${
							foundUser.id
						}.jpg`}
					/>
				</div>
				<div className="details-wrapper">
					<ul>
						<li>
							<strong>Name :</strong>
							<span>{foundUser.name}</span>
						</li>
						<li>
							<strong>Gender :</strong>
							<span>{!!foundUser.women ? "Female" : "Male"}</span>
						</li>
						<li>
							<strong>Phone :</strong>
							<span>{foundUser.phone}</span>
						</li>
						<li>
							<strong>Email :</strong>
							<span>{foundUser.email}</span>
						</li>
						<li>
							<strong>Country :</strong>
							<span>{foundUser.country}</span>
						</li>
						<li>
							<strong>City :</strong>
							<span>{foundUser.city}</span>
						</li>
						<li>
							<strong>Zip Code :</strong>
							<span>{foundUser.zipCode}</span>
						</li>
						<li>
							<strong>Street :</strong>
							<span>{foundUser.street}</span>
						</li>
					</ul>
				</div>
			</div>
		);
	}
	return <h2>User Not Found...</h2>;
};

export default UserDetails;
