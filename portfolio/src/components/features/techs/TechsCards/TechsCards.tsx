import { useEffect, useRef, useState } from "react";
import GlareHover from "../../../animations/GlareHover";
import { Cards, Container } from './TechsCardsStyle';

const techs = [
    { name: "HTML5", icon: "https://skillicons.dev/icons?i=html" },
    { name: "CSS3", icon: "https://skillicons.dev/icons?i=css" },
    { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
    { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
    { name: "React", icon: "https://skillicons.dev/icons?i=react" },
    { name: "Styled", icon: "https://skillicons.dev/icons?i=styledcomponents" },
    { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
    { name: "Express", icon: "https://skillicons.dev/icons?i=express" },
    { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
    { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
    { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
    { name: "PostMan", icon: "https://skillicons.dev/icons?i=postman" },
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
                    <GlareHover
                        key={index}
                        glareColor="#a306ec"
                        transitionDuration={1000}
                        style={{
                            animationDelay: isVisible ? `${index * 0.5}s` : "0s",
                        }}
                    >
                        <img src={icon} alt={name} width={60} />
                        <h2>{name}</h2>
                    </GlareHover>
                ))}
            </Cards>
        </Container>
    );
};

export default TechsCards;
