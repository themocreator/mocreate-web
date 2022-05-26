import React, { useEffect } from "react";
import Services from "../../pages/services";
import shortLogo from "../../short-logo.png"
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";
import RoundedButton from "../../pages/RoundedButton";
import WebFont from 'webfontloader';


const letsTalkHandler = () => {
	window.open("https://hello.hecticapp.com/01/mocreate/consultation");
};
const Navbar = () => {

	useEffect(() => {
		WebFont.load({
			google: {
				families: ['Hind']
			}
		});
	}, []);


	const services = [{ serviceTitle: "Discovery", serviceDescription: "This is where I will talk about discovery." },
	{ serviceTitle: "Design", serviceDescription: "The is where I will talk about design." },
	{ serviceTitle: "Development", serviceDescription: "There is where I will talk about development." }]
	return (
		<>
			<Nav>
				<NavMenu>	
					<img src={shortLogo} alt="short-logo" />
					<RoundedButton className={'navButton'}>Let's Talk</RoundedButton>
					<NavLink to="/services" activeStyle>
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
