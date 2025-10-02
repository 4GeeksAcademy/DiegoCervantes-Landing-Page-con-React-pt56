import React from "react";

//include images into your bundle
import NavBar from "./Navbar";
import JumboTron from "./Jumbotron";
import Cards from "./Cards";
import Bottom from "./Bottom";


//create your first component
const Home = () => {
	return (
		<div>
			<div>
				<div className="text-center">
				<NavBar />
				</div>
				<JumboTron />
				<Cards />
			</div>

			<div>
				<footer>
					<Bottom />
				</footer>
			</div>

		</div>

	);
};


export default Home;