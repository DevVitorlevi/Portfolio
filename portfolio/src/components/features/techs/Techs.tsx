import SplitText from "../../animations/SplitText"
import TechsCards from "./TechsCards/TechsCards"



const Techs = () => {
    return (
        <section id="techs" className="mt-20">
            <SplitText text="Minhas Habilidades" className="text-4xl text-center w-full md:text-5xl lg:text-6xl h-20" />
            <TechsCards />
        </section>
    )
}

export default Techs
