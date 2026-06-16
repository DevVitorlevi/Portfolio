//Layouts
import { Header } from "./components/layout/header/Header"
//Features
import Hero from "./components/features/hero/Hero"
import Techs from "./components/features/techs/Techs"
import Timeline from "./components/features/TimeLine/Timeline"
import Projects from "./components/features/projects/Projects"
import Contact from "./components/features/contact/Contact"
import { GlobalStyles } from "./styles/GlobalStyles"
import styled from "styled-components";

const BackgroundContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <Hero />
      <Header />

      <BackgroundContainer>
        <Techs />
        <Timeline />
        <Projects />
        <Contact />
      </BackgroundContainer>
    </>
  )
}

export default App
