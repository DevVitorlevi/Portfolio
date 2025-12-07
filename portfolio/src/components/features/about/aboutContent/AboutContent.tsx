import { useEffect, useRef, useState } from "react";
import { About, SubTitle } from "./AboutContentStyle";
import ProfileCard from "../../../animations/ProfileCard";
import Me from "../../../../assets/images/me.png"
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

                <p>Sou Desenvolvedor FullStack e Técnico em Desenvolvimento de Sistemas, com dois anos de experiência construindo aplicações completas e escaláveis. Atuo na criação de interfaces modernas e responsivas, desenvolvimento de APIs RESTful eficientes e integração com bancos de dados relacionais e não relacionais, utilizando ferramentas como Sequelize e Mongoose (ORMs/ODMs).</p>

                <p>Tenho experiência com ReactJS, NextJS, NodeJS, TypeScript, JavaScript e TailwindCSS, bancos de dados relacionais e não relacionais (como MySQL e MongoDB), além de versionamento com Git/GitHub, automação de testes E2E com Cypress e BDD (Gherkin) e uso de Postman para validação e integração de APIs, garantindo qualidade, rastreabilidade e confiabilidade das aplicações.</p>

                <p>Costumo trabalhar de forma colaborativa, contribuindo com revisões de código, resolução de desafios técnicos em equipe e definição de soluções eficazes, sempre buscando eficiência e estruturas bem organizadas. Minha organização e atenção a detalhes me permitem gerenciar múltiplas tarefas simultaneamente, mantendo entregas consistentes e dentro de prazos.</p>

                <p>Sou adaptável a novas tecnologias e desafios, com foco em performance, escalabilidade, arquitetura limpa e boas práticas de desenvolvimento. Sempre busco aprimorar soluções, aplicando boas práticas de desenvolvimento e padrões de arquitetura que garantem produtos estáveis, escaláveis e com excelente experiência para o usuário.</p>
            </SubTitle>
            <ProfileCard
                name="Vitor Levi"
                title="Dev FullStack"
                avatarUrl={Me}
                showUserInfo={false}
                enableTilt={true}
            />
        </About>
    );
};

export default AboutContent;
