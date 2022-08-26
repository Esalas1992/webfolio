import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { slideInLeft } from "../Animations/SlideIn";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValidEmail = () => {
    const regex = "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$";
    return regex.test(String(email).toLowerCase());
  };

  const submit = (e) => {
    e.preventDefault();

    if (name && email && message && isValidEmail) {
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const userId = process.env.REACT_APP_EMAILJS_USER_ID;

      const templateParams = {
        name,
        email,
        message,
      };

      setIsSubmitting(true);
      
      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => {
          console.log(response);
          setName("");
          setEmail("");
          setMessage("");
          setEmailSent(true);
          setIsSubmitting(false);
        })
        .then((error) => console.log(error));
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <Section id="contact">
      <Title>Contact</Title>
      <Container>
        <Subtitle> Have a question or want to work together? </Subtitle>
        <Form>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Textarea
            name="message"
            rows="5"
            placeholder="Your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></Textarea>

          {/*<div className="g-recaptcha" data-sitekey="your_site_key"></div>
          <br />*/}
          <SubmitButton onClick={submit} disabled={isSubmitting}>
            {isSubmitting && (
              <LoaderDualRing />
            )}
            Submit
          </SubmitButton>

          <SubmitMessage emailSent={emailSent}>
            Thank you for your message, I will be in touch soon!
          </SubmitMessage>
        </Form>
      </Container>
    </Section>
  );
};

export default Contact;

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
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  margin: 0 auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;
  animation: ${slideInLeft} 0.75s ease both;
  position: relative;
`;
const Subtitle = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: none;
  text-align: center;
  align-self: flex-start;
  width: 80%;
  margin: 2rem auto;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }
`;
const Input = styled.input`
  background: #1e242c;
  border: 0;
  box-sizing: border-box;
  color: #fff;
  display: block;
  font-size: 12pt;
  margin-bottom: 3px;
  outline: none;
  padding: 10px 15px;
  width: 100%;
`;
const Textarea = styled.textarea`
  background: #1e242c;
  border: 0;
  box-sizing: border-box;
  color: #fff;
  display: block;
  font-size: 12pt;
  margin-bottom: 3px;
  outline: none;
  padding: 10px 15px;
  width: 100%;
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 500px;
`;
const SubmitButton = styled.button`
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
    background: rgba(74, 47, 189, 0.8);
    outline: 0;
    border: none;
    transition: background-color 2s ease-out;
  }
`;
const SubmitMessage = styled.span`
  color: #04c986;
  font-size: ${(props) => props.theme.fontsm};
  font-weight: 600;
  padding: 5px 0;
  visibility: ${(props) => (props.emailSent ? "visible" : "hidden")};
`;
const LoaderRotate = keyframes`
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}
`;
const LoaderDualRing = styled.span`
 display: inline-block;
 height: 1rem;

  &::after {
    content: " ";
    display: block;
    width: 10px;
    height: 10px;
    margin-right: 1rem;
    border-radius: 50%;
    border: 5px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${LoaderRotate} 1.2s linear infinite;
  }
`;
