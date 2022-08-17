import React from 'react'
import styled from 'styled-components'

const Container= styled.div`
    margin: 5% auto 0 auto;
    padding-bottom:2%;
   
`

const Footer = () => {
  return (
    <Container>
    <footer>Developed By <a href='https://github.com/Merxibeaucoup' style={{textDecoration:'none', color:'#BA135D'}}>Edgar Briandt </a>© {new Date().getFullYear()}</footer>
    </Container>
  )
}

export default Footer