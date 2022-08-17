import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { MdMarkEmailRead } from 'react-icons/md';
import { FiGithub, FiLinkedin } from 'react-icons/fi';


const ContactForm = styled.div`
min-width: 50vw;
	background-color:none;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.2);
	padding: 3rem 5rem;
    border-radius: 10px;
	span {
		display: inline-block;
		font-size: 25px;
		margin-bottom: .6rem;
	}
	input {
        background-color: #cdcdd81c;
		height: 4rem;
		width: 100%;
		margin-bottom: 3rem;
		border: none;
		border-radius: 4px;
		padding: 0.5rem 1rem;
		font-size: 1.5rem;
        border-left: 1px solid #BA135D;
        border-right: 1px solid #BA135D;
		&::placeholder {
			font-size: clamp(1.4rem, 40%, 7rem);
			font-weight: 300;
		}
	}
	textarea {
		border: none;
        background-color: #cdcdd81c;
		border-radius: 4px;
		font-size: 1.6rem;
		padding: 0.5rem 1rem;
		margin-bottom: 3rem;
		width: 100%;
        border-left: 1px solid #BA135D;
        border-right: 1px solid #BA135D;
		&::placeholder {
			font-size: clamp(1.5rem, 40%, 7rem);
			font-weight: 300;
		}
	}
	
`;


const Container = styled.div`
width:100%;
`

const Wrapper = styled.div`

`

const Title = styled.h2` 
text-align: center;
`

const SocialsWrapper = styled.div`
display: flex;
`

const Socials = styled.a`
height: 4rem;
width: 4%;
flex:1;
margin: 5%;
border-radius: 10px;
cursor:pointer;
&:hover{
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.2);
}

`

const SocialText = styled.h5`
justify-content: center;
text-align: center;
align-items: center;
font-weight:300;

`

const IconWrapper = styled.div`
    text-align: center;
`

const Icons = styled.a`
    color:#BA135D;
    cursor: pointer;
    font-size: 25px;
    margin: 1%;
   
    &:hover{

        font-size: 23px;
        transition: 0.2s ease-out;  
        color:#1329ba; 
}
   
`

const Button = styled.button`
    font-size: 20px;
padding: 1rem 1rem;
display: inline-block;
margin-top: 3rem;
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

const Contact = () => {
    const handleGmail = () => {
        window.open("mailto:edgarbriandt@gmail.com");
     };

     const handleSmail = () => {
        window.open("mailto:ebriandt_6243@email.ric.edu");
     };


  return (
    <Layout>
    <Container>
        <Wrapper>
           
            <Title>Lets Connect & Chat</Title>
            <IconWrapper>
            <Icons href='https://github.com/Merxibeaucoup' 
            aria-label="Github link" 
            target="_blank"
            rel="noopener noreferrer"> 
                <FiGithub />
                </Icons>
            <Icons href='https://www.linkedin.com/in/edgar-briandt-38046522a/' 
            aria-label='linkedin link' 
            target="_blank"
            rel="noopener noreferrer"> 
                    <FiLinkedin />
                    </Icons>
            </IconWrapper>
        <SocialsWrapper>
            <Socials style={{backgroundColor:'#96a3f725'}} onClick={handleGmail}>
               <SocialText> <MdMarkEmailRead  style={{position: 'relative', top: '3px'}}/>  edgarbriandt@gmail.com</SocialText>
            </Socials>
            <Socials style={{backgroundColor:'#ef98981c'}}   onClick={handleSmail}>
                <SocialText> <MdMarkEmailRead  style={{position: 'relative', top: '3px'}}/>  ebriandt_6243@email.ric.edu</SocialText>
            </Socials>
        </SocialsWrapper>

        <ContactForm>
          <form
            action="https://formsubmit.co/9e4bbbfb6393d0fbbcf1ac400b1a3ece"
            method="POST"
          >
            <div>
              <label>
                <span>Full Name</span>
                <input
                  name="full name"
                  type="text"
                  placeholder="Full Name"
                  required
                />
              </label>
            </div>
            <div>
              <label>
                <span>Email Address</span>
                <input
                  type="hidden"
                  name="_subject"
                  value="Portfolio Email 😎!"
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                />
              </label>
            </div>
            <div>
              <label>
                <span>Message</span>
                <textarea
                  name="mesaage"
                  cols="29"
                  rows="6"
                  placeholder="Message"
                  required
                />
              </label>
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </ContactForm>

        </Wrapper>   
        </Container>
    </Layout>
  )
}

export default Contact