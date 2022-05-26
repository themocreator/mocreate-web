import styled from "styled-components";

const RoundedButton = styled.button`
  width: 245px;
  height: 45px;
  border: none; 
  border-radius: 20px;
  background-image: ${props => !props.invert && 'linear-gradient(to right, #4700d8, #f900bf)'};
  font-family: 'Hind';
  font-size: 18px;
  
  &:hover {
    background-image: ${props => props.invert ? 'linear-gradient(to right, #4700d8, #f900bf)' : 'none'};
  }



  &.navButton  {
      width: 100px;
      height: 30px;
      background-image: none;
      background-color: #4700D8;
      color: white; 
  }



`;

export default RoundedButton;
