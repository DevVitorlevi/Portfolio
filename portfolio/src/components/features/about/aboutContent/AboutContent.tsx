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

                    <p>Sou desenvolvedor FullStack com foco em backend,formado em Técnico de Desenvolvimento de Sistemas. Tenho 17 anos e 2 anos de experiência em desenvolvimento de aplicações web, criação e manutenção de APIs RESTfuls e integração com bancos de dados relacionais e não relacionais, utilizando ORMs como Sequelize (para MySQL) e ODMs como Mongoose (para MongoDB), garantindo mapeamento eficiente entre objetos de aplicação e persistência de dados.</p>
                    
                    <p>Domino tecnologias como JavaScript, TypeScript, ReactJS, NodeJS e TailwindCSS, além de ferramentas de versionamento e pipelines CI/CD (Git, GitHub, Postman). Também atuo com automação de testes E2E utilizando Cypress e Gherkin BDD, garantindo qualidade e confiabilidade das aplicações.</p>

                    <p>Aplicando boas práticas de desenvolvimento, como Clean Code, arquitetura MVC, e metodologias ágeis como Scrum e Kanban, tenho aprimorado organização, eficiência e qualidade em projetos complexos ao longo da minha trajetória.</p>
            </SubTitle>
            <Image $isVisible={isVisible} />
        </About>
    );
};

export default AboutContent;
