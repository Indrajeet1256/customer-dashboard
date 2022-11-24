import React from "react";
import "./Loading.css";

const Loading = () => {
	return (
		<div className="loading-wrapper">
			<img src={require("../assets/images/spinner.gif")} alt="Loading..." />
		</div>
	);
};

export default Loading;
