import Title from "../../common/title/Title"
import Form from "./contactForm/Form"
import SocialLinks from "./socialLinks/SocialLinks"

const Contact = () => {
    return (
        <>
        <section id="contato">
            <Title text="Contato"/>
            <Form/>
            <SocialLinks/>
        </section>
        </>
    )
}

export default Contact