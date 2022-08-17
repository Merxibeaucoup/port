import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.header`
position: fixed;
  left: 0;
  height: 100%;
  width:6vw;
  z-index: 4000;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.2);
  
`

const NavItems = styled.li`
    list-style: none;
  margin-top:5em;
  margin-right: 2.5em;
  font-family: 'Roboto', sans-serif;
    text-decoration: none;
    letter-spacing: 3px;
    color: #000;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    cursor: pointer;
    &:hover {
      color: #BA135D;
      transition: all 0.2s ease;
    }
    
`

const NavHandler = styled.nav`
    ul {
    display: flex;
    flex-direction: column-reverse;
  }
    
`

const Logo = styled.div`
  cursor: pointer;
  transform: rotate(-20deg);
 
`





const Navbar = () => {
  return (
    <Container>

      <Link to="/">
      <Logo> 
        <img src='/img/l2.png' alt='logo' width={70}/>
      </Logo>
      </Link>
       <NavHandler>
        <ul>
          <Link to="/" style={{textDecoration:'none'}}>
            <NavItems>
                Home
            </NavItems>
            </Link>
            <Link to="/about" style={{textDecoration:'none'}}>
            <NavItems>
                About
            </NavItems>
            </Link>
           <Link to="/contact" style={{textDecoration:'none'}}>
            <NavItems>
                Contact
            </NavItems>
            </Link>
        </ul>
       </NavHandler>

        
    </Container>
  )
}

export default Navbar