import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="semaforo">
			<div className="luz"></div>
			<div className="luz"></div>
			<div className="luz"></div>
		</div>
	);
};

export default Home;
