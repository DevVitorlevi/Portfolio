import { useEffect, useRef, useState } from "react";
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

                    <p>Sou desenvolvedor FullStack com foco em backend, formado em Técnico de Desenvolvimento de Sistemas. Com 2 anos de experiência, atuo no desenvolvimento de aplicações web, criação e manutenção de APIs RESTful e integração com bancos de dados relacionais e não relacionais, utilizando ORMs como Sequelize (MySQL) e ODMs como Mongoose (MongoDB), garantindo mapeamento eficiente entre objetos de aplicação e persistência de dados.</p>
                    
                    <p>Domino tecnologias como JavaScript, TypeScript, ReactJS, NextJS, NodeJS e TailwindCSS, além de ferramentas de versionamento e pipelines CI/CD (Git, GitHub, Postman). Tenho experiência em automação de testes E2E com Cypress e Gherkin (BDD), incluindo criação e documentação de cenários e casos de teste, desde a definição em linguagem natural até a automação integrada em pipelines, assegurando qualidade, rastreabilidade e confiabilidade das aplicações.</p>

                    <p>Aplicando boas práticas como Clean Code, arquitetura MVC e metodologias ágeis (Scrum e Kanban), busco sempre aprimorar organização, eficiência e qualidade em projetos complexos, entregando soluções robustas e escaláveis.</p>
            </SubTitle>
            <Image $isVisible={isVisible} />
        </About>
    );
};

export default AboutContent;
