import { styled } from "styled-components";

const Trusted = () => {
    const Wrapper = styled.section`
     .trusted-section{
        padding : 20rem
     }
     .containerr{
        padding-top : 4rem ;
        margin : 0 auto ;
        
     }
    .t-heading{
        display : flex ;
        justify-content: center;
        font-size : 1.5rem ;
        padding-bottom : 2rem ;
    } 
    .companyLogos{
        margin-top: 0.2rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
    }
    img{
        min-width: 1rem;
        height: 10rem;
    }
 @media (max-width: 1000px){
    .companyLogos{
      margin-top: 1.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      text-align: center;
 }
 @media (max-width: 500px){
    img{
        min-width: 1rem;
        height: 7rem;
     }
    }
    .t-heading{
        display : flex ;
        justify-content: center;
        font-size : 1.5rem ;
    }
 }

  `;
    return (
        <Wrapper className="trusted-section">
            <div className="containerr" >
                <h1 className="t-heading">Trusted By 1000+ companies</h1>
                <div className="companyLogos">
                    <div className="Tlogo">
                        <img src="Images/h6.png" alt="not found" />
                    </div>
                    <div className="Tlogo">
                        <img src="Images/h7.png" alt="not found" />
                    </div>
                    <div className="Tlogo">
                        <img src="Images/h6.png" alt="not found" />
                    </div>
                    <div className="Tlogo">
                        <img src="Images/h7.png" alt="not found" />
                    </div>

                </div>
            </div>
        </Wrapper>
    )
}

export default Trusted;