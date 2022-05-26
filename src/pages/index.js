import Reract from "react";
import logo from "./logo.png";
import RoundedButton from "./RoundedButton";
import HomeContainer from "./Home.style";

const Home = () => {
  const letsTalkHandler = () => {
    window.open("https://hello.hecticapp.com/01/mocreate/consultation");
  };
  return (
	  <HomeContainer>
		  <div id="content">
			  <img src={logo} />
			  <div style={{ fontFamily: 'Hind', color: "white"}}>Producing the web and mobile applications you need.</div>
			  <div id="content-buttons">
				  <RoundedButton>LET'S TALK</RoundedButton>
				  <RoundedButton invert={true}>SERVICES</RoundedButton>
			  </div>
		  </div>
    </HomeContainer>
  );
};

export default Home;
