import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import TypeWriterText from "../Animations/TypeWriterText";
import AboutMe from "../../Assets/about_me.png";
import BgImg from "../../Assets/home-bg.jpg";

const Home = () => {
  const [click, setClick] = useState(false);

  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    setClick(!click);
  };

  return (
    <Section id="home">
      <Container>
          <TypeWriterText />
          <Round>
            <Down onClick={() => scrollTo("about")}>&#x2193;</Down>
            <img src={AboutMe} alt="About Me" />
          </Round>
      </Container>
    </Section>
  );
};

export default Home;

const rotate = keyframes`
    100%{
        transform: rotate(1turn);
    }
`;
const Section = styled.section`

  &::before{
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    z-index: -1;
    display: block;

    width: 100vw;
    height: 100vh;

    background-image: url(${BgImg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: blur(5px);
  }

  min-height: 100vh;
  width: 100vw;
  position: relative;
`;
const Container = styled.div`
  width: 75%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 64em) {
    width: 85%;
  }

  @media (max-width: 48em) {
    flex-direction: column-reverse;

    &>*:first-child{
      margin-top: 3rem;
    }
  }
`;
const Round = styled.div`
  position: absolute;
  top: 40rem;
  width: 6rem;
  height: 6rem;

  img {
    width: 100%;
    height: auto;
    animation: ${rotate} 10s linear infinite reverse;
  }

  @media (max-width: 48em) {
    top: 30rem;
  }
`;
const Down = styled.span`
  color: #fff;
  background-color: #202020;
  font-size: ${(props) => props.theme.fontxl};
  width: 3rem;
  height: 3rem;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  cursor: pointer;
  z-index: 2;
`;