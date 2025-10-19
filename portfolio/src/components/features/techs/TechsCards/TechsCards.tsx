import { useEffect, useRef, useState } from "react";
import SpotlightCard from "../../../animations/SpotlightCard";
import { Cards, Container } from './TechsCardsStyle';

const techs = [
    { name: "HTML5", icon: "https://skillicons.dev/icons?i=html" },
    { name: "CSS3", icon: "https://skillicons.dev/icons?i=css" },
    { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
    { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
    { name: "ReactJS", icon: "https://skillicons.dev/icons?i=react" },
    { name: "Styled", icon: "https://skillicons.dev/icons?i=styledcomponents" },
    { name: "NextJS", icon: "https://skillicons.dev/icons?i=next" },
    { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwind" },
    { name: "NodeJS", icon: "https://skillicons.dev/icons?i=nodejs" },
    { name: "Express", icon: "https://skillicons.dev/icons?i=express" },
    { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
    { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
    { name: "Sequelize", icon: "https://skillicons.dev/icons?i=sequelize" },
    { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
    { name: "PostMan", icon: "https://skillicons.dev/icons?i=postman" },
    { name: "Cypress", icon: "https://skillicons.dev/icons?i=cypress" },
];

const TechsCards = () => {
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
                {techs.map(({ name, icon }, index) => (
                    <SpotlightCard
                    key={index}
                    spotlightColor = "rgba(103, 10, 225, 0.529)"
                    >
                        <img src={icon} alt={name} width={60} />
                        <h2>{name}</h2>
                    </SpotlightCard>
                ))}
            </Cards>
        </Container>
    );
};

export default TechsCards;
