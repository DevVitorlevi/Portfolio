import ProjectsCards from "./ProjectsCards/ProjectsCards"
import SplitText from "../../animations/SplitText"
const Projects = () => {
    return (
        <section id="projetos" className="my-40">
            <SplitText
                text="Meus Principais Projetos" className="text-6xl text-center w-full h-20"
            />
            <ProjectsCards />
        </section>
    )
}

export default Projects