import { About, Image, SubTitle } from "./AboutContentStyle"

const AboutContent = () => {
    return (
        <About>
            <SubTitle>
                Meu nome é <span className="destaq">Vitor Levi</span>, tenho 17 anos e estou no 3º ano do Ensino Médio
                em uma
                escola profissionalizante, cursando <span className="destaq">Desenvolvimento de Sistemas</span>. Sou uma
                pessoa
                dedicada e apaixonada por aprendizado contínuo, sempre buscando evoluir e explorar novas
                tecnologias. Meu
                objetivo é criar soluções que unam <span className="destaq">performance</span>, <span
                    className="destaq">usabilidade</span> e <span className="destaq">qualidade</span>, entendendo o sistema
                como um
                todo, da modelagem de dados à experiência do usuário.
            </SubTitle>
            <Image />
        </About>
    )
}

export default AboutContent