import React from "react";

//include images into your bundle
import NavBar from "./Navbar";
import JumboTron from "./Jumbotron";
import Cards from "./Cards";
import Bottom from "../Bottom";


//create your first component
const Home = () => {
	return (
		<div>
			<div className="container-xxl container-md">
				<NavBar />
				
			</div>
			<div className="container-fluid container-md">
				<JumboTron/>
			</div>
			<div className="container-fluid container-md">
				<Cards/>
			</div>
			<div>
				<Bottom/>
			</div>
		</div>
	);
};


export default Home;