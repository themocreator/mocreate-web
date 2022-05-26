import styled from "styled-components"

export const Header = styled.h2`
font-family: 'Hind';
font-size: 55px;
`;

export const ServicesContainer = styled.div`
   
   display: flex; 
   &.title {
       width: 100vw; 
       height: 50vh;
       background-color: pink;
       flex-direction: row;
   }

   
   &.services {
       background-color: red;
       width: 50vw; 
       height: 50vw; 
       right: 0px;
   }

`;

