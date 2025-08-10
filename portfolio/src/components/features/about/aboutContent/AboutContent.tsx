import DecryptedText from "../../../animations/DecryptedText"
import { About, Image, SubTitle } from "./AboutContentStyle"

const AboutContent = () => {
    return (
        <About>
            <SubTitle>
                <DecryptedText
                    text="Meu nome é Vitor Levi, tenho 17 anos e estou no 3º ano do Ensino Médio em uma escola profissionalizante, cursando Desenvolvimento de Sistemas. Sou uma pessoa dedicada e apaixonada por aprendizado contínuo, sempre buscando evoluir e explorar novas tecnologias. Meu objetivo é criar soluções que unam performance, usabilidade e qualidade, entendendo o sistema como um todo, da modelagem de dados à experiência do usuário."
                    speed={100}                 // trocas rápidas para scrambling
                    maxIterations={50}         // número maior para bastante scrambling antes da revelação
                    sequential={false}          // revela letra por letra
                    revealDirection="start"    // revela da esquerda para a direita
                    useOriginalCharsOnly={false} // permite chars variados, estilo criptografia
                    animateOn="view"
                    parentClassName="all-letters"
                    encryptedClassName="encrypted"
                />





            </SubTitle>
            <Image />
        </About>
    )
}

export default AboutContent