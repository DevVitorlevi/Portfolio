import DarkVeil from "../../../animations/DarkVeil";
import SplitText from "../../../animations/SplitText";
import TextType from "../../../animations/TextType";
import { Container, Content } from "./HeroSectionStyle";


const HeroSection = () => (
    <Container>
        <DarkVeil />
        <Content>
            <SplitText
                text="Olá! Me chamo Vitor Levi"
                className="text-2xl font-semibold text-center"
                delay={100}
                duration={1}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
            />
            <h1>
                <TextType
                    text={["Desenvolvedor Full-Stack", "Desenvolvedor Web", "Programador Front-End", "Programador Back-End"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                />
            </h1>
        </Content>
    </Container>
);

export default HeroSection;
