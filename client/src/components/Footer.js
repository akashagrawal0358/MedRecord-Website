import React from 'react'
import styled from 'styled-components';
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const Wrapper = styled.section`
  footer{
        padding : 6rem 0 6rem 0rem ;
        background-color: #0a1435 ;
       
      h3{
         color: aliceblue ;
         margin-bottom: 2rem;
         font-size : 1.8 rem ;
         font-weight : 400 ;
      }
    
    p{
      display: block ;
      color: aliceblue ;
      font-size : 1.8 rem ;
      font-weight : 400 ;
    }
      .foot-social--icons{
        display : flex ;
        color : white ;
        gap: 1rem;
        border : white ;
        font-size: 2.5rem;
      }
      .icons{
        padding: 0.5rem;
        border-color: white;
        border-radius: 50%;
        border-width: 2px;
        border-style: solid;
        cursor : pointer;
      }
      input{
        border: 1px solid;
        max-width : 50rem ;
        padding: 0.8rem 1.7rem;
        color: #212529;
        font-size: 1rem;
        text-transform : uppercase ;
      }
      input[type="submit"]{
        border-style : solid ;
        margin-top : 1rem ;
        padding : .5rem .5rem ;
        background-color: rgb(98 84 243);
        border-width: .1rem;
        cursor : pointer;
        font-size: 1rem;
      }
     
      .foot-info{
        padding: 0 1rem 0 7rem;
      }
      .foot-social{
       padding-left : 2rem ;
      }
      .foot-{
        padding-left : 2rem ;
      }
      .foot-contact{
        padding-left : 2rem ;
      }
    }
    hr{
      margin-bottom : 2rem ;
    }
    .footer-bottom--section {
      padding-top: 4rem;
    } 
    .pad{
      padding-left : 3rem
    }
    @media (max-width : 1000px){
      .grid-four{
        grid-template-columns : 1fr ;
      }
      .grid{
        gap : 2.5rem ;
      }
      .containerr {
        max-width: 130rem;
        padding: 0 3.2rem;
       }
    footer{
      .foot-info{
      padding: 0 25rem 0 0rem;
    }
  }
}
@media (max-width : 800px){
  footer {
    font-size : 1rem ;
    padding: 4rem 0 2rem 0rem;
    p{
      line-height : 2rem ;
    }
    .foot-info {
       padding: 0 4rem 0 0rem;
    }
    .footer-bottom--section {
      padding-top: 1rem;
    } 
  }  
} 
   `;

  return (
    <Wrapper className='footer'>
      <footer>
        <div className='containerr grid grid-four'>
          <div className='foot-info'>
            <h3 >MedRec</h3>
            <p>lodnejjjjjjjjjdnnnnnnnnnnnnnn
              endddddnnnnnnnnnnnnnnnnnnnnnnn
              ennnnnnnnnnnnnnnnnnnnnnnnnnnr3
              vknkreigjijinvnnkkkkkkkkkkkkkk
            </p>
          </div>
          <div className='foot-social'>
            <h3 >Follow Us</h3>
            <div className="foot-social--icons">

              <div>
                <FaDiscord className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <FaYoutube className="icons" />
              </div>

            </div>

          </div>
          <div className='foot-subscribe'>
            <h3> Subscribe to get Important updates</h3>
            <form>
              <input type='text' placeholder='Enter Email' />
              <br />
              <input type='submit' value='subscribe' />
            </form>
          </div>
          <div className='footer-contact'>
            <h3>Contact Us</h3>
            <h3>+918567397408</h3>
          </div>
        </div>

        <div className="footer-bottom--section">
          <hr />
          <div className="containerr grid grid-two pad">
            <p>
              @{new Date().getFullYear()} MedRec. All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <br />
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>

    </Wrapper>
  )
}

export default Footer
