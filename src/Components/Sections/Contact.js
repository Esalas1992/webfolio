import React, { useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { slideInLeft } from "../Animations/SlideIn";
import emailjs from "emailjs-com";
import Reaptcha from "reaptcha";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  AOS.init();

  const initialValues = { name: "", email: "", message: "" };
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isValidForm, setIsValidForm] = useState(false);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const captchaRef = useRef(null);

  const isValidEmail = () => {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(String(formValues.email).toLowerCase());
  };

  const onVerify = () => {
    captchaRef.current.getResponse().then(() => {
      setIsVerified(true);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Name is required";
    }

    if (!values.message) {
      errors.message = "Message is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!isValidEmail()) {
      errors.email = "Enter a valid email";
    }

    setIsValidForm(Object.keys(errors).length === 0);
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormErrors(validateForm(formValues));

    if (isValidForm) {
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const userId = process.env.REACT_APP_EMAILJS_USER_ID;

      const templateParams = formValues;

      setIsSubmitting(true);

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((_response) => {
          setEmailSent(true);
          setEmailError(false);
        })
        .catch(() => setEmailError(true))
        .finally(() => {
          setIsSubmitting(false);
          setIsVerified(false);
          captchaRef.current.reset();
        });
    }
  };

  return (
    <Section id="contact">
      <Title>Contact</Title>
      <Container data-aos="fade-right">
        <Subtitle> Have a question or want to work together? </Subtitle>
        <Form>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={formValues.name}
            onChange={handleChange}
          />
          <SubmitErrorMessage>{formErrors.name}</SubmitErrorMessage>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleChange}
          />
          <SubmitErrorMessage>{formErrors.email}</SubmitErrorMessage>
          <Textarea
            name="message"
            rows="5"
            placeholder="Your message here"
            value={formValues.message}
            onChange={handleChange}
          ></Textarea>
          <SubmitErrorMessage>{formErrors.message}</SubmitErrorMessage>

          <Reaptcha
            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
            ref={captchaRef}
            onVerify={onVerify}
          />

          <SubmitButton
            onClick={handleSubmit}
            disabled={isSubmitting || !isVerified}
          >
            {isSubmitting && <LoaderDualRing />}
            Submit
          </SubmitButton>

          <SubmitMessage emailSent={emailSent}>
            Thank you for your message, I will be in touch soon!
          </SubmitMessage>
          {emailError && (
            <SubmitErrorMessage>
              Your message couldn't be send, please try again later.
            </SubmitErrorMessage>
          )}
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
    background: rgba(21, 114, 182, 0.8);
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
const SubmitErrorMessage = styled.span`
  color: red;
  font-size: ${(props) => props.theme.fontsm};
  font-weight: 600;
  padding: 5px 0;
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
