import { useEffect, useRef, useState } from "react";
import { Globe, Server, Database, FlaskConical, Wrench } from "lucide-react";
import SpotlightCard from "../../../animations/SpotlightCard";
import {
    Container,
    CategoryGrid,
    CategoryCard,
    CategoryHeader,
    IconCircle,
    CategoryTitle,
    TechsGrid
} from './TechsCardsStyle';

type Tech = { name: string; icon: string };
type Category = { title: string; icon: React.ElementType; techs: Tech[] };

const categories: Category[] = [
    {
        title: "Front-end",
        icon: Globe,
        techs: [
            { name: "HTML5", icon: "https://skills.syvixor.com/api/icons?i=html" },
            { name: "CSS3", icon: "https://skills.syvixor.com/api/icons?i=css" },
            { name: "JavaScript", icon: "https://skills.syvixor.com/api/icons?i=js" },
            { name: "TypeScript", icon: "https://skills.syvixor.com/api/icons?i=ts" },
            { name: "React.js", icon: "https://skills.syvixor.com/api/icons?i=react" },
            { name: "Next.js", icon: "https://skills.syvixor.com/api/icons?i=nextjs" },
            { name: "TailwindCSS", icon: "https://skills.syvixor.com/api/icons?i=tailwind" },
            { name: "ShadCN/UI", icon: "https://skills.syvixor.com/api/icons?i=shadcn" },
        ],
    },
    {
        title: "Back-end",
        icon: Server,
        techs: [
            { name: "Node.js", icon: "https://skills.syvixor.com/api/icons?i=node" },
            { name: "Express.js", icon: "https://skills.syvixor.com/api/icons?i=expressjs" },
            { name: "Fastify", icon: "https://skills.syvixor.com/api/icons?i=fastify" },
            { name: "PrismaORM", icon: "https://skills.syvixor.com/api/icons?i=prisma" },
        ],
    },
    {
        title: "Banco de Dados",
        icon: Database,
        techs: [
            { name: "MongoDB", icon: "https://skills.syvixor.com/api/icons?i=mongodb" },
            { name: "MySQL", icon: "https://skills.syvixor.com/api/icons?i=mysql" },
            { name: "PostgreSQL", icon: "https://skills.syvixor.com/api/icons?i=postgresql" },
        ],
    },
    {
        title: "Testes",
        icon: FlaskConical,
        techs: [
            { name: "Cypress", icon: "https://skills.syvixor.com/api/icons?i=cypress" },
            { name: "Vitest", icon: "https://skills.syvixor.com/api/icons?i=vitest" },
        ],
    },
    {
        title: "Ferramentas",
        icon: Wrench,
        techs: [
            { name: "Git", icon: "https://skills.syvixor.com/api/icons?i=git" },
            { name: "PostMan", icon: "https://skills.syvixor.com/api/icons?i=postman" },
            { name: "Docker", icon: "https://skills.syvixor.com/api/icons?i=docker" },
        ],
    },
];

const TechsCards = () => {
    const [isVisible, setIsVisible] = useState(false);
    const cardsRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (cardsRef.current) observer.observe(cardsRef.current);

        return () => {
            if (cardsRef.current) observer.unobserve(cardsRef.current);
        };
    }, []);

    return (
        <Container>
            <CategoryGrid ref={cardsRef} $isVisible={isVisible}>
                {categories.map(({ title, icon: Icon, techs }, catIndex) => (
                    <CategoryCard key={catIndex} style={{ animationDelay: `${catIndex * 0.1}s` }}>
                        <CategoryHeader>
                            <IconCircle>
                                <Icon size={20} />
                            </IconCircle>
                            <CategoryTitle>{title}</CategoryTitle>
                        </CategoryHeader>

                        <TechsGrid>
                            {techs.map(({ name, icon }, index) => (
                                <SpotlightCard
                                    key={index}
                                    spotlightColor="rgba(103, 10, 225, 0.529)"
                                >
                                    <img src={icon} alt={name} width={32} />
                                    <h3>{name}</h3>
                                </SpotlightCard>
                            ))}
                        </TechsGrid>
                    </CategoryCard>
                ))}
            </CategoryGrid>
        </Container>
    );
};

export default TechsCards;
