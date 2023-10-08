import React from 'react';
import { styled } from 'styled-components';

const IntroSection = () => {

    const Wrapper = styled.section`
     .IntroImage{
       position : relative ;
       text-align : center ;
     }
     .img-style{
        width : 100% ;
        height : 100% ;
     }

     p{
        text-align : center ;
        position : absolute ;
        top : 40% ;
        left : 60% ;
        transform: translate(-50%, -50%);
        font-size : 2rem ;
        color : black ;
      }
   
      @media(max-width: 550px){
        p{
           padding-top: 2rem;
           padding-left: 2rem;
           font-size : 1rem ;
           font-weight : 600 ;
        }
        p span:nth-child(1){
            font-size : 1rem ;
        }
        p span:nth-child(2){
            font-size : 1rem ;
        }
        p span:nth-child(3){
            font-size : 1rem ;
        }
        p span:nth-child(4){
            font-size : 1rem ;
        }
      }

   `;



    return (
        <Wrapper>
            <div className='container'>
                <div className='IntroImage'>
                    <figure>
                        <img
                            src='Images/IntroImage.jpg'
                            alt='Not found'
                            className='img-style'
                        />
                        <p>
                            <span>Innovative</span> 
                            <span style={{ color: 'red' }}> EHR Solutions..  </span><br/>
                            <span style={{ paddingBottom: '10px' }} >for</span><br/>
                            <span>Modern Healthcare</span>
                        </p>
                    </figure>
                </div>
            </div>
        </Wrapper>
    )
}

export default IntroSection