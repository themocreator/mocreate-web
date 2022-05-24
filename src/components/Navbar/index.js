import React from "react";
import Services from "../../pages/services";
import shortLogo from "../../short-logo.png"
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";
import { Link, animateScroll as scroll } from "react-scroll";
	

const letsTalkHandler = () => {
	window.open("https://hello.hecticapp.com/01/mocreate/consultation");
};
const Navbar = () => {
	const services = [{ serviceTitle: "Discovery", serviceDescription: "This is where I will talk about discovery." },
		{ serviceTitle: "Design", serviceDescription: "The is where I will talk about design." },
		{ serviceTitle: "Development", serviceDescription: "There is where I will talk about development." }]
	return (
	<>
	<Nav>
		<NavMenu>
			<img src={shortLogo}></img>
			<button onClick={letsTalkHandler}>Let's Talk</button>
					<NavLink to="/services" activeStyle>
						<Services servicesArray={services}/>
			Services
		</NavLink>
		<NavLink to="/expertise" activeStyle>
			Expertise
		</NavLink>
		<NavLink to="/portfolio" activeStyle>
			Portfolio
		</NavLink>
		<NavLink to="/contact" activeStyle>
			Contact
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
