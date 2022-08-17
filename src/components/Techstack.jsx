import React, { useEffect } from 'react'
import styled from 'styled-components'
import { techStackUsed } from '../data/Icons';
import Aos from 'aos'
import 'aos/dist/aos.css'


const Container = styled.div`
margin-top:10%;
`

const Wrapper = styled.div`
    display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	grid-row-gap: 4rem;
`

const IconItem = styled.div`
display: flex;
align-items: center;
`

const IconImage= styled.div`
background-color: #131313;
    height: 3.5rem;
	width: 3.5rem;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 2rem;
	box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.2);
`
const Text = styled.h4`
color: #545353;
`

const Title = styled.h2`
    font-size:35px;
    font-weight: bolder;
    color: #545353;
    
 `

const Techstack = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
      }, [])
  return (
    <Container>
        <Title> Tech stack's and Tools</Title>
        <Wrapper data-aos="zoom-in-left">
        {techStackUsed.map((item, index) => (
          <IconItem key={index}>
            <IconImage>
              <img src={item.img} alt={item.alt} width={28} height={28} />
            </IconImage>

            <Text>{item.text}</Text>
          </IconItem>
        ))}
        </Wrapper>
    </Container>
  )
}

export default Techstack