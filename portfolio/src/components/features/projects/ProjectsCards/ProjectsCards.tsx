import { Container } from "../../techs/TechsCards/TechsCardsStyle"
import { Card } from "./ProjectsCardsStyle"
import img1 from "../../../../assets/images/peixe.png"
import img2 from "../../../../assets/images/page.png"
const projects = [
    {
        image:img1,
        title:"PeixeControl",
        desc:"..."
    },
    {
        image:img2,
        title:"PeixeControl",
        desc:"..."
    },
    {
        image:img1,
        title:"PeixeControl",
        desc:"..."
    },
    {
        image:img2,
        title:"PeixeControl",
        desc:"..."
    }
]
const ProjectsCards = () => {
    return (
        <Container>
            {projects.map(({ image, title, desc }, index) => (
            <Card key={index}>
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <p>{desc}</p>
            </Card>
))}

        </Container>    
    )
}

export default ProjectsCards