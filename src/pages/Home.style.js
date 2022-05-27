import styled from "styled-components";

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px; 

  #content {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }


  & label {
    color: white;
    font-size: 24px;
  }
`;

export default HomeContainer;
