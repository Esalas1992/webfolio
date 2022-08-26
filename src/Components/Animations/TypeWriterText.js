import React from "react";
import styled from "styled-components";
import Typewriter from 'typewriter-effect';


const TypeWriterText = () => {
    return (
        <Title>
            Hello, I'm
            <Typewriter 
                options={{
                    autoStart: true,
                    loop: true
                }}
                onInit={(typewriter) => {
                    typewriter
                    .typeString('<span class="text-1"> Eliezer Salas</span>.')
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString(' a <span class="text-1">Full-stack</span> developer.')
                    .pauseFor(2500)
                    .deleteAll()
                    .start();
                }}
            />
        </Title>
    )
}

const Title = styled.div`
    font-size: ${props => props.theme.fontxxl};
    color: #202020;
    bottom: 2rem;
    position: relative;
    color: #fff;

    @media (min-width: 800px){
        .Typewriter{
            display: inline !important;
        }
    }

    @media (max-width: 48em) {
        font-size: ${props => props.theme.fontxl};
        align-self: center;
        text-align: center;
    }
`

export default TypeWriterText;