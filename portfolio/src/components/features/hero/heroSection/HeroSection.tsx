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
            />
            <h1>
                <TextType
                    text={["Desenvolvedor FullStack", "Desenvolvedor FrontEnd", "Desenvolvedor BackEnd"]}
                />
            </h1>
        </Content>
    </Container>
);

export default HeroSection;
