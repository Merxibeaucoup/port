import React from 'react'
import styled from 'styled-components';
import Layout from '../components/Layout';
import Techstack from '../components/Techstack';


const Container = styled.div`
    width: 90%;
`

const Wrapper = styled.div`
    
`
const Desc = styled.p`
    font-size: 17px;
    letter-spacing: 1.8px;
    margin-top: 2rem;
    font-weight: normal;
    color: #2f2e2e;
    line-height:1.8;
 `

const Span = styled.span`
color: #BA135D;
`

const Course = styled.a`
    color: #BA135D;
    text-decoration:none;
    &:hover{
        text-decoration: underline;
    }
`

const AboutTitle = styled.h2`
    font-size:35px;
    font-weight: bolder;
    color: #545353;
 `
 


const About = () => {
  return (
    <Layout>
    <Container>
        <Wrapper>
            <AboutTitle> More About Me</AboutTitle>
            <Desc>
            I am Edgar Briandt, a recent CS graduate and a full stack web developer .
            </Desc>
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
                <Desc> During my journey, i realized there were a lot of things that i did not know and which i needed to learn if i want
                    to do this web development thing , so i took a bunch of courses from udemy , coursera , educative and youtube like: <Course href='https://www.educative.io/path/become-front-end-developer'>Become a Front End Developer</Course>, <Course href='https://www.educative.io/path/become-a-node-js-developer'> Become a Node.js Developer</Course>
                    , <Course href='https://www.educative.io/courses/guide-spring-5-spring-boot-2'>The Complete Guide to Spring 5 and Spring Boot 2</Course>, <Course href='https://www.educative.io/courses/understanding-redux-a-beginners-guide-to-state-management'>Understanding Redux: A Beginner's Guide To State Management</Course>, a bunch of youtube courses
                    and currently also taking <Course href='https://www.coursera.org/professional-certificates/meta-front-end-developer'>Meta Front-End Developer</Course> , to name a few.

                </Desc>

        </Wrapper>
        <Techstack />
    </Container>
    </Layout>
  )
}

export default About