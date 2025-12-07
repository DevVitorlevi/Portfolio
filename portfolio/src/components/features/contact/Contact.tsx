import SplitText from "../../animations/SplitText"
import Form from "./contactForm/Form"
import SocialLinks from "./socialLinks/SocialLinks"

const Contact = () => {
    return (
        <>
            <section id="contato" className="h-[90vh] space-y-10 flex justify-center flex-col items-center mb-10">
                <SplitText text="Entre em Contato" className="text-6xl text-center w-full" />
                <Form />
                <SocialLinks />
            </section>
        </>
    )
}

export default Contact