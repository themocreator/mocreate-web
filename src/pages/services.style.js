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
       background-color: white;
       position: absolute;
       right: 0px; 
       left: 0px; 
   }

   &.description {
       background-color: black;
       width: 50vw; 
       height: 50vh; 
       align-items: "center";
       position: absolute;
       right: 0px;
       bottom: 0px; 
   }
   
   &.services {
       background-color: 'white';
       width: 50vw; 
       height: 50vh; 
       position: absolute; 
       left: 0px;
       bottom: 0px; 
       align-items: "center";
       flex-direction: "column"; 
   }

  

`;

