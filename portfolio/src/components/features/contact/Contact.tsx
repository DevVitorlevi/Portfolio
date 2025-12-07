import Form from "./contactForm/Form"
import SocialLinks from "./socialLinks/SocialLinks"

const Contact = () => {

    return (
        <>
            <section id="contato" className=" space-y-10 flex justify-center flex-col items-center max-md:mt-40 my-20 mb-10">
                <Form />
                <SocialLinks />
            </section>
        </>
    )
}

export default Contact