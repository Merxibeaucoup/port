import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Portfolio from './Portfolio';
import Resume from '../assets/resume/New_Resume.pdf'


const HomeContainer = styled.section`   
    width: 90%;
`

const Wrapper = styled.div`
    
`

const Greeting = styled.h6`
margin-top:10%;
font-size: 20px;
font-weight: 100;
    color: #818080;
`

const Intro = styled.h2`
    font-size:50px;
    font-weight: bolder;
    color: #545353;
`
const Type = styled.h2`
    font-size: 60px;
    font-weight: 100;
    margin-top: 0;
`
 const Span = styled.span`
    color: #BA135D;
 `

 const Desc = styled.p`
    font-size: 17px;
    letter-spacing: 1.8px;
    margin-top: 2rem;
    font-weight: normal;
    color: #2f2e2e;
    line-height:1.8;
 `

 const BlackButton = styled.button`
    font-size: 20px;
  padding: 1rem 1rem;
  display: inline-block;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  border: none;
  border-radius: 5px;
  background-color: #0e0e0e;
  color:#FFF;
  cursor: pointer;
  &:hover{
    background-color:#BA135D;
    padding: 1rem 2rem;
  }
 
 `
 const ResumeButton = styled.a`
 font-size: 20px;
padding: 1rem 1rem;
display: inline-block;
margin-top: 3rem;
margin-left: 1%;
margin-right: auto;
border: none;
border-radius: 5px;
background-color: #FFF;
color:#000;
cursor: pointer;
border: 1px solid #000;
&:hover{
 background-color:#BA135D;
 color :#FFF;
 border: 1px solid #FFF;
 padding: 1rem 2rem;
}

`

 const AboutContainer = styled.section`
    
 `

 const AboutWrapper = styled.div`
    margin-top: 15%;
   
 `

 const AboutTitle = styled.h2`
    font-size:35px;
    font-weight: bolder;
    color: #545353;
 `






const Home = () => {
    const words = ["Software ","Passionate", "Full-Stack ", "Creative", "Web ", "Goal Oriented", "Relentless"];
    const { text } = useTypewriter({
        words,
        loop: 0, // Infinit
         cursorStyle:"😎"
    });
  return (
    <Layout>
    <HomeContainer>
        <Wrapper>
            <Greeting>
                Hello There, 👋🏽{' '}
            </Greeting>
            <Intro>
                I am Edgar Briandt .
            </Intro>
            <Type>
                A{' '}
                <Span>
                    {text}
                </Span>{' '}
                <Cursor 
                cursorStyle="😎"
                />
                developer{' '}
            </Type>
            <Desc>
                I am a recent Computer Science graduate from providence, Rhode Island.
                I received my Bachelors from Rhode Island College in 2022.
            </Desc>
            <Desc>
           Concurrently, Im also a 
                self taught full-stack developer using <Span> Java( Spring Boot), JavaScript( NodeJS(express), ReactJS)</Span> as my go-to tools. I enjoy building user friendly and easy to navigate 
                web Apps.
            </Desc>
            <Link to="/contact">
            <BlackButton>
                Hire Me <span> <FaLongArrowAltRight style={{position: 'relative', top: '3px'}}/></span>
            </BlackButton>
            </Link>
        </Wrapper>
        <AboutContainer>
            <AboutWrapper>
                <AboutTitle>About Me ..</AboutTitle>

                <Desc>
                    Prior to me getting into web development , i dabbled in a few other avenues of software development like 
                    <Span> desktop GUI development </Span> , <Span>mobile development</Span> and <Span>machine learning</Span>. But in spring of 2020, one of my college elective course was 
                    web development. which focused heavily on the principles of <Span>UI/UX design and basic frontend development</Span>. That class made me fall in love with the process of web development
                    and it has been what i have been focusing on ever since. 
                </Desc>
                <Desc>
                    But obviously just that class isnt enough. In spring of 2022,  i also took a <Span>software engineering</Span> course in college where a team of me and 3 other students 
                    built an ecommerce web App , using <Span>Django</Span> for the backend and <Span>ReactJs, Redux </Span> for the frontend ( i worked on the frontend). My team earned the highest points in the class 
                    and we were also chosen to present to some CS faculty members of <Span> Brown University, University of Rhode Island, Rhode Island College. </Span>
                </Desc>
                <Link to="/about">
                <BlackButton>
                    Learn More
                </BlackButton>
                </Link>
                <ResumeButton href={Resume}  style={{textDecoration:'none'}}>
                    Resume
                </ResumeButton>

            </AboutWrapper>
        </AboutContainer>
        <Portfolio />
    </HomeContainer>
    </Layout>
  )
}

export default Home