import Form from "./contactForm/Form"
import SocialLinks from "./socialLinks/SocialLinks"

const Contact = () => {

    return (
        <>
            <section id="contato" className="h-[90vh] space-y-10 flex justify-center flex-col items-center my-20">
                <Form />
                <SocialLinks />
            </section>
        </>
    )
}

export default Contact