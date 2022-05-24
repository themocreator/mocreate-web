import React from 'react';
import { AppContainer } from '../container.style';
import logo from "./logo.png"

const Home = () => {

	const letsTalkHandler = () => {
		window.open("https://hello.hecticapp.com/01/mocreate/consultation");
	}
	return (
		<AppContainer width="100vw" height="100vh">
			<img src={logo} alt="Mocreate Logo"></img>
			<h3>Producing the web and mobile  applications you need.</h3>
			<div><button onClick={letsTalkHandler}>Let's Talk</button>
				<button>Services</button>
			</div>
		</AppContainer>
	);
};

export default Home;
