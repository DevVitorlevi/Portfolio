import { useEffect, useRef, useState } from "react";
import DecryptedText from "../../../animations/DecryptedText";
import { About, Image, SubTitle } from "./AboutContentStyle";

const AboutContent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // para não ficar observando depois
                }
            },
            { threshold: 0.3 } // dispara quando 30% da div estiver visível
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <About ref={aboutRef} $isVisible={isVisible}>
            <SubTitle $isVisible={isVisible}>
                <DecryptedText
                    text="Meu nome é Vitor Levi, tenho 17 anos e estou no 3º ano do Ensino Médio em uma escola profissionalizante, cursando Desenvolvimento de Sistemas. Sou uma pessoa dedicada e apaixonada por aprendizado contínuo, sempre buscando evoluir e explorar novas tecnologias. Meu objetivo é criar soluções que unam performance, usabilidade e qualidade, entendendo o sistema como um todo, da modelagem de dados à experiência do usuário."
                    speed={100}
                    maxIterations={50}
                    sequential={false}
                    revealDirection="start"
                    useOriginalCharsOnly={false}
                    animateOn="view"
                    parentClassName="all-letters"
                    encryptedClassName="encrypted"
                />
            </SubTitle>

            <Image $isVisible={isVisible} />
        </About>
    );
};

export default AboutContent;
