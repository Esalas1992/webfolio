import React from "react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";

const ProjectCard = ({ images, caption = " ", name = " " }) => {
  return (
    <Item>
      <img src={images[0]} alt={caption} />
      <Description>
        <Subtitle>{name}</Subtitle>
        <SubtitleLight>{caption}</SubtitleLight>
      </Description>
    </Item>
  );
};

export default ProjectCard;

const Item = styled.div`
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  flex: 0 0 calc(33.333% - 2em);
  margin: 1rem;
  color: #202020;
  cursor: pointer;
  
  img{
    width: 100%;
    height: auto;
    display: block;
    border-radius: 6px;
    transition: 0.3s linear;
  }

  &:hover{
    transform: scale(1.02);
  }
`;
const Subtitle = styled.span`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: none;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
  }
`;
const SubtitleLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  text-transform: none;
  margin: 1rem;
  font-weight: 400;
  text-align: center;
  z-index: 2;

  @media (max-width: 64em) {
    width: 100%;
  }
`;
const Description = styled.div`
  background-color: rgba(255, 255, 255, 0.86);
  backdrop-filter: blur(5px);
  margin: 0 2rem;
  padding: 2rem;
  border-radius: 6px;
  transform: translateY(-80px);
  transition: 0.3s linear;
  box-shadow: 0px 7px 25px rgba(74, 47, 189, 0.8);
`
