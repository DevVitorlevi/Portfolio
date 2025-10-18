import { useEffect, useRef, useState } from "react";
import SpotlightCard from "../../../animations/SpotlightCard";
import { Cards,CardContent } from "./ServicesCardsStyle";
import { Container } from "../../techs/TechsCards/TechsCardsStyle";


const services = [
  { title: "Dev Backend", l1:"Criação e manutenção de APIs RESTful eficientes",l2:"Integração com bancos de dados relacionais (MySQL) e não relacionais (MongoDB)", l3:"Uso de ORMs/ODMs (Sequelize, Mongoose) para mapeamento de dados", l4:"Boas práticas de arquitetura, segurança e performance" },
  { title: "Dev Frontend", l1: "Desenvolvimento de interfaces responsivas e modernas",l2:"Experiência com React, Next.js e TailwindCSS", l3:"Integração com APIs e manipulação de dados dinâmicos", l4:"Foco em usabilidade e experiência do usuário" },
  { title: "QA Automation", l1: "Testes automatizados de front-end e back-end com Cypress",l2:"Escrita de cenários de teste em Gherkin (BDD)", l3:"Testes de API utilizando Postman", l4:"Garantia de qualidade e confiabilidade do software" },
  { title: "Dev FullStack", l1: "Desenvolvimento de aplicações completas, do banco de dados ao front-end",l2:"Integração entre APIs e interfaces responsivas", l3:"Experiência com JavaScript, TypeScript, React, Next.js, Node.js", l4:"Deploy, versionamento e boas práticas de desenvolvimento" },
];

const ServicesCards = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // anima só uma vez
        }
      },
      { threshold: 0.2 }
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => {
      if (cardsRef.current) observer.unobserve(cardsRef.current);
    };
  }, []);

  return (
    <Container>
<Cards ref={cardsRef} $isVisible={isVisible}>
  {services.map(({ title, l1 ,l2 ,l3 ,l4 }, index) => (
    <SpotlightCard
      key={index}
      spotlightColor = "rgba(103, 10, 225, 0.529)"
    >
      <CardContent>
      <h2 className="destaq">{title}</h2>
      <ul>
        <li>{l1}</li>
        <li>{l2}</li>
        <li>{l3}</li>
        <li>{l4}</li>
      </ul>
      </CardContent>
    </SpotlightCard>
  ))}
</Cards>

    </Container>
  );
};

export default ServicesCards;
