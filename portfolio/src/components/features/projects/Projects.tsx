import ProjectsCards from "./ProjectsCards/ProjectsCards"
import SplitText from "../../animations/SplitText"
const Projects = () => {
    return (
        <section id="projetos">
            <SplitText
                text="Meus Principais Projetos" className="text-4xl text-center w-full md:text-5xl lg:text-6xl h-20"
            />
            <ProjectsCards />
        </section>
    )
}

export default Projects