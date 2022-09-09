import React from "react";
import styled from "styled-components";
import golemz1 from "../../Assets/golemz1.png";
import golemz2 from "../../Assets/golemz2.png";
import golemz3 from "../../Assets/golemz3.png";
import punku1 from "../../Assets/punku1.png";
import punku2 from "../../Assets/punku2.png";
import punku3 from "../../Assets/punku3.png";
import merlyn1 from "../../Assets/merlyn1.png";
import merlyn2 from "../../Assets/merlyn2.png";
import merlyn3 from "../../Assets/merlyn3.png";
import merlyn4 from "../../Assets/merlyn4.png";
import r3invest1 from "../../Assets/r3invest1.png";
import r3invest2 from "../../Assets/r3invest2.png";
import r3invest3 from "../../Assets/r3invest3.png";
import { slideInRight } from "../Animations/SlideIn";
import ProjectCard from "../ProjectCard";

const Portfolio = () => {

  return (
    <Section id="portfolio">
      <Title>Portfolio</Title>
      <Container>
        <ProjectCard
          images={[golemz1, golemz2, golemz3]}
          caption="React"
          name="NFT Minting Website"
        />
        <ProjectCard
          images={[punku1, punku2, punku3]}
          caption="VueJs 2 + Node + Mongo"
          name="Punkusaber"
        />
        <ProjectCard
          images={[merlyn4, merlyn3, merlyn1, merlyn2]}
          caption="JS + Java + Springboot + PostgreSQL"
          name="Merlyn"
        />
        <ProjectCard
          images={[r3invest1, r3invest2, r3invest3]}
          caption="HTML + CSS + JS"
          name="R3Investment"
        />
        <ProjectCard
          images={[r3invest1, r3invest2, r3invest3]}
          caption="HTML + CSS + JS"
          name="R3Investment"
        />
      </Container>
    </Section>
  );
};

export default Portfolio;

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
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  margin: auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;
  animation: ${slideInRight} 0.75s ease both;
  position: relative;
`;