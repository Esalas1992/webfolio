import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import GithubIcon from '../Assets/Icons/GithubIcon'
import LinkedinIcon from '../Assets/Icons/LinkedinIcon'
import EmailIcon from '../Assets/Icons/EmailIcon'
import PdfIcon from '../Assets/Icons/PdfIcon'

const Socials = () => {
    return (
        <Icons>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1}}
            >
                <a href="mailto:esalas.facyt@gmail.com" target="_blank" rel="noopener noreferrer">
                    <PdfIcon width={25} height={25} />
                </a>
            </motion.div>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1}}
            >
                <a href="mailto:esalas.facyt@gmail.com" target="_blank" rel="noopener noreferrer">
                    <EmailIcon width={25} height={25} />
                </a>
            </motion.div>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1}}
            >
                <a href="https://github.com/esalas" target="_blank" rel="noopener noreferrer">
                    <GithubIcon width={25} height={25} />
                </a>
            </motion.div>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.4}}
            >
                <a href="https://www.linkedin.com/in/esalasfacyt/" target="_blank" rel="noopener noreferrer">
                    <LinkedinIcon width={25} height={25} />
                </a>
            </motion.div>

            <Line
                initial={
                    {
                        height:0
                    }
                }
                animate={{
                    height: '8rem'
                }}
                transition={{
                    type:'spring', duration:1, delay:0.8
                }}
            />
        </Icons>
    )
}

export default Socials

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 2rem;

    z-index:3;

    &>*:not(:last-child){
        margin: 0.5rem 0;
    }

    div > a > svg {
        color: ${props => props.theme.text};
    }
`

const Line = styled(motion.span)`
    width: 2px;
    height: 8rem;
    background-color: ${props => props.theme.text};
`