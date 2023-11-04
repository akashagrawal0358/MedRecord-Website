import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'



const Nav = () => {
    const Nav = styled.nav`
      
    .navbar{
      background-color: #fff;
      width: 100vw;
      height: 5rem; 
      display : block ;
      background-color: #E6E6E6;
      
    }

    .navbar-lists{
        display: flex;
        gap: 3rem;
        align-items: center;
        list-style: none;
        position: absolute;
        top: 4%;
        right: 10%;
    }
        
      .navbar-link{
        text-transform: uppercase;
        font-size: 1.2rem;
        font-weight: 500;
        text-decoration: none;
      }
    }

    .logo{
        position : absolute;
        height: 5rem ;
        left : 10% ;
        padding: 0 4.8rem;
    }
 
 ` ;



    return (
        <Nav>
            <div className='navbar'>
                <NavLink to='/'>
                    <img className='logo' src='./Images/medLogo.png' alt='Logo not found' />
                </NavLink>

                <ul className='navbar-lists'>
                    <li>
                        <NavLink to='/' className='navbar-link'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/patient' className='navbar-link'>Patient Registration</NavLink>
                    </li>
                    <li>
                        <NavLink to='/radiology' className='navbar-link'>Radiology</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className='navbar-link'>Contact</NavLink>
                    </li>

                </ul>
            </div>

        </Nav>
    )
}

export default Nav