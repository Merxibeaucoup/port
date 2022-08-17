import React, { useEffect } from 'react'
import styled from 'styled-components'
import data from '../data/Porfolio.json'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { FiGithub, FiLink } from 'react-icons/fi';


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 5%;
`

const Wrapper = styled.div`
 display: grid;
	grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
	grid-row-gap: 5rem;
  grid-column-gap:7rem;
  margin-left: 4rem;
`

const Content = styled.div`
  width: 26rem;
  height: 55rem;
  background-color:#f9f9f9;
  position: relative;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.2);
 
`

const Image = styled.img`
  height:22rem;
  width:100%;
  object-fit: fill;
`

const Title = styled.h4`
  font-size: 1.3rem;
    margin-left: 1.4rem;
`

const Desc = styled.p`
   margin-top: 1rem;
    font-size: 1rem;
    font-weight: 200;
    letter-spacing: 1px;
    line-height: 1.5rem;
    margin: 3%;
   
`

const Stack = styled.span`
  background-color: #f8010151;
  box-shadow: 0px 20px 30px rgba(243, 136, 170, 0.227);
  border-radius: 3px;
  padding: 0.4rem 0.8rem;
  font-size: 1rem;
  font-weight: bold;
  display: inline-block;
  margin: 1rem;
 
`

const ButtonWrapper = styled.div`
  margin-top: 7%;
  margin-left:22%;
  
`

const LiveButton = styled.button`
   font-size: 16px;
  padding: 1rem 1rem;
  display: inline-block;
  margin-top: 3rem;
  border: none;
  border-radius: 8px;
  background-color: #0e0e0e;
  color:#FFF;
  cursor: pointer;
  &:hover{
    background-color:#BA135D;
    padding: 1rem 1.5rem;
  }
`
const GithubButton = styled.button`
   font-size: 16px;
  padding: 1rem 1rem;
  display: inline-block;
  border: solid 1px black;
  border-radius: 8px;
  background-color: white;
  color:#000;
  cursor: pointer;
  &:hover{
    background-color:#BA135D;
    padding: 1rem 1.5rem;
    color:white;
    border: solid 1px white;
  }
`


const AboutTitle = styled.h2`
    font-size:35px;
    font-weight: bolder;
    color: #545353;
 `

const MoreButton = styled.a`
 font-size: 20px;
padding: 1rem 1rem;
display: inline-block;
margin-top: 3rem;
margin-left: 1%;
margin-right: auto;
border: none;
border-radius: 5px;
background-color: #000;
color:#FFF;
cursor: pointer;
border: 1px solid #FFF;
&:hover{
 background-color:#BA135D;
 color :#FFF;
 border: 1px solid #FFF;
 padding: 1rem 2rem;
}

`

const Portfolio = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
   
    <Container>
      <AboutTitle> Portfolio </AboutTitle>
     <Wrapper>  
      {data.map((data)=>(
      <Content
      data-aos="zoom-in"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              key={data.id}>
        <Image src={data.image} alt={data.alt}/>
        <Title> {data.title} </Title>
        {data.stack.map((stack)=>(
       <React.Fragment key={stack}>
       <Stack>{stack}</Stack>
     </React.Fragment>
        ))}
        <Desc>{data.content}</Desc>
           <ButtonWrapper>
           <LiveButton><FiLink/> <a href={data.preview}
                      target="_blank"
                      rel="noopener noreferrer" style={{textDecoration:'none', color:'#FFF'}}> Preview</a> </LiveButton> 
                      <GithubButton><FiGithub/> <a href={data.source} style={{textDecoration:'none', color:'#000'}}> Source</a></GithubButton>
           </ButtonWrapper>
      </Content>
      ))}

      <MoreButton href='https://github.com/Merxibeaucoup' style={{textDecoration:'none'}}>More projects</MoreButton>
     </Wrapper>
     

    </Container>
   
  )
}

export default Portfolio