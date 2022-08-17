import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import Navbar from './Navbar'

const Container = styled.main`
    display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  z-index: 1000;
  margin: 0 8rem;
  margin-right: 10rem;
  scroll-behavior: smooth;
  overflow-x: clip;
`

const Layout = ({children}) => {
  return (
    <>
    <Navbar />
    <Container>{children}
    <Footer/>
    </Container>
   
    </>
  )
}

export default Layout