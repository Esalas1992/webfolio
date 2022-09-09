import React from "react";
import GlobalStyles from "./Styles/GlobalStyles";
import Home from "./Components/Sections/Home";
import About from "./Components/Sections/About";
import Portfolio from "./Components/Sections/Portfolio";
import Socials from "./Components/Socials";
import Contact from "./Components/Sections/Contact";
import { ThemeProvider } from "styled-components";
import { dark } from "./Styles/Themes";

function App() {

  return (
    <>
      <GlobalStyles />
        <ThemeProvider theme={dark}>
          <Socials />
          <Home />
          <About data-aos="fade-in"/>
          <Portfolio />
          <Contact />
        </ThemeProvider>
    </>
  );
}

export default App;
