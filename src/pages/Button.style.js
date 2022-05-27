import styled from "styled-components";

export const ServicesButton = styled.button`
  width: 50vw;
  height: 50px;
  font-family: 'Aldrich';
  font-size: 18px;
  background-color: white;
  border: none; 

  &:active {
      background-color: black;
      color: white;
  }
`;

export const CircleButton = styled.button`
    background-color: #F900BF; 
    border: none; 
    border-radius: 50%;
    color: white;
    text-align: right; 
    display: flex; 
    height: 150px;
    width:150px; 

    & label {
        position: absolute;
        bottom: 0px;
    }
`; 