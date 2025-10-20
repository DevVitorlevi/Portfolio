//Layouts
import { Header } from "./components/layout/header/Header"
import Footer from "./components/layout/footer/Footer"
//Features
import Hero from "./components/features/hero/Hero"
import About from "./components/features/about/About"
import Techs from "./components/features/techs/Techs"
import Services from "./components/features/services/Services"
import Projects from "./components/features/projects/Projects"
import Contact from "./components/features/contact/Contact"
import { GlobalStyles } from "./styles/GlobalStyles"
import Particles from "./components/animations/Particles"
import styled from "styled-components";



const ParticlesWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  `;
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
        <ParticlesWrapper>
          <Particles
            particleColors={["#220279", "#540bdc"]}
            particleCount={1000}
            particleSpread={10}
            speed={.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </ParticlesWrapper>

        <About/>
        <Techs />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </BackgroundContainer>
    </>
  )
}

export default App
