import React from "react";
import styled from "styled-components";
import JavaIcon from "../../Assets/Icons/JavaIcon";
import CssIcon from "../../Assets/Icons/CssIcon";
import HtmlIcon from "../../Assets/Icons/HtmlIcon";
import JsIcon from "../../Assets/Icons/JsIcon";
import MongoIcon from "../../Assets/Icons/MongoIcon";
import NodeJsIcon from "../../Assets/Icons/NodeJsIcon";
import ReactIcon from "../../Assets/Icons/ReactIcon";
import SqlIcon from "../../Assets/Icons/SqlIcon";
import SpringBootIcon from "../../Assets/Icons/SpringbootIcon";
import Picture from "../../Assets/The-Simpsons-Profile-Icons-2.webp";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  AOS.init();

  return (
    <Section id="about">
      <ProfilePic src={Picture} alt="Profile Picture" data-aos="fade-in"/>
      <Container>
        <Box data-aos="fade-right">
          <Title>Who is Eliezer?</Title>
          <Subtitle>
            I'm a professional full stack developer with over 6 years of
            experience. Studied computer science at the Universidad de Carabobo
            in Venezuela and started my developer career in 2015 working for a
            pyme for 3 years, moved to Peru in 2018 where I have been working for different companies.
          </Subtitle>
        </Box>
        <Box data-aos="fade-left">
          <Title>Technologies I use</Title>
          <Skills>
            <HtmlIcon />
            <CssIcon />
            <JsIcon />
            <JavaIcon />
            <SpringBootIcon />
            <SqlIcon />
            <MongoIcon />
            <NodeJsIcon />
            <ReactIcon />
          </Skills>
          <Button>
            Resume
          </Button>
        </Box>
      </Container>
    </Section>
  );
};

export default About;

const Section = styled.section`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  min-height: 100vh;
  width: 100vw;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width: 80%;
  }

  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;

    & > *:last-child {
      & > *:first-child {
        margin-top: 0;
      }
    }
  }
`;
const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 48em) {
    width: 100%;
  }
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxl};
  margin: auto;
  position: relative;
`;
const Subtitle = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: none;
  text-align: justify;
  align-self: flex-start;
  width: 80%;
  margin: 2rem auto;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
  }
`;
const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 1rem auto;

  & > * {
    flex: 0 0 33.333333%;
    margin-top: 1rem;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
const ProfilePic = styled.img`
  border-radius: 50%;
  box-shadow: 0 2px 0 2px ${(props) => props.theme.text};
  width: 250px;
  height: auto;
`;
const Button = styled.button`
  background: transparent;
  color: #fff;
  font-size: ${(props) => props.theme.fontmd};
  margin: 1rem auto;
  outline: 0;
  padding: 10px 30px;
  border: 2px solid #fff;
  box-sizing: inherit;
  cursor: pointer;
  transition: all 0.5s;

  &:hover,
  &:focus {
    background: rgba(21, 114, 182, 0.8);
    outline: 0;
    border: none;
    transition: background-color 2s ease-out;
  }
`;