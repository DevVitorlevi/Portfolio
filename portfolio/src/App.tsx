//Layouts
import Header from "./components/layout/header/Header"
import Footer from "./components/layout/footer/Footer"
//Features
import Hero from "./components/features/hero/Hero"
import About from "./components/features/about/About"
import Techs from "./components/features/techs/Techs"
import Services from "./components/features/services/Services"
import Projects from "./components/features/projects/Projects"
import Contact from "./components/features/contact/Contact"

function App() {


  return (
    <>
      <Header />
      <Hero />
      <About />
      <Techs />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
