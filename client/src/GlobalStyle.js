import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *{
    margin : 0 ;
    padding : 0 ;
    box-sizing: border-box;
    font-family: "Work Sans", sans-serif
 }
 
.containerr{
    max-width : 120rem ;
    margin : 0 auto ;
    
 }

.grid{
  display : grid ;
  gap : 9rem ;
}
.grid-two{
  display : grid ;
  grid-template-columns : repeat(2,1fr);
 } 
.grid-three{
  display : grid ;
  grid-template-columns : repeat(3,1fr);
 } 
 .grid-four{
  display : grid ;
  grid-template-columns : 1fr .9fr 1fr .8fr;
  grid-column-gap: 0rem ;
 }   

`;



