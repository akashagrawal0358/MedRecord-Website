import React from 'react'
import { styled } from 'styled-components';

const FeatureServices = () => {

    const Wrapper = styled.section`
    
     .intro{
        color : blue ;
        text-transform : uppercase ;
        left: 20% ;
     }
     .heading{
        font-size : 2rem ;
        left: 0% ;
        font-weight : bold ;
        justify-content: center;
        display: flex;
        padding-bottom: 4rem;
     }

     @media (max-width: 1000px) {
        .grid-two{
            display : grid ;
            grid-template-columns : repeat(2,1fr);
            width: 100% ;
            height: 100% ;
           }
        }
        @media (max-width: 680px){
            .grid-one{
                display : grid ;
                grid-template-columns : repeat(1 , 1fr);
                width : 100% ;
                height : 100% ;
            }
        }
        @media (max-width:400px){
            .heading{
                font-size : 1.5rem;
            }
        }

     figure{
        justify-items: center;
        display: grid;
     }

     img{
        width: 20rem;
     }
    
     .container2{
        max-width : 120rem ;
        margin : 0 auto ;
        padding-top : 4rem ;
        
       
     }
   
   
   `;

    return (
        <Wrapper>
            <div className='container2'>
                <div className='heading'>
                    Our Features Services..
                </div>


                <div className='grid grid-three grid-two grid-one'>
                    <figure>
                        <img src='images/feat1.jpg' alt='Not found' />
                        <figcaption>Patient Care</figcaption>
                    </figure>
                    <figure>
                        <img src='images/Appoint.jpg' alt='Not found' />
                        <figcaption>Appointment </figcaption>
                    </figure>
                    <figure>
                        <img src='images/feat1.jpg' alt='Not found' />
                        <figcaption>Patient Care</figcaption>
                    </figure>
                    <figure>
                        <img src='images/Appoint.jpg' alt='Not found' />
                        <figcaption>Appointment </figcaption>
                    </figure>
                    <figure>
                        <img src='images/feat1.jpg' alt='Not found' />
                        <figcaption>Patient Care</figcaption>
                    </figure>
                    <figure>
                        <img src='images/Appoint.jpg' alt='Not found' />
                        <figcaption>Appointment </figcaption>
                    </figure>
                </div>
            </div>
        </Wrapper>
    )
}




export default FeatureServices