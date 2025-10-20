import { useEffect, useRef, useState } from "react";
import GradientText from "../../../animations/GradientText";
import { Cards, Container, ButtonWrapper, Card } from "./ProjectsCardsStyle";
import img3 from "../../../../assets/images/image.png";
import img2 from "../../../../assets/images/page.png";
import styled, { keyframes, css } from "styled-components";

const projects = [
  {
    image: img2,
    title: "PeixeControl",
    desc: "O PeixeControl é um sistema inteligente de gerenciamento de estoque e vendas, desenvolvido para peixarias que buscam organização, praticidade e eficiência. Compatível com celular e computador, possui design responsivo e interface intuitiva, facilitando o dia a dia do negócio.",
    web: "https://peixe-control.vercel.app/",
    git: "https://github.com/DevVitorlevi/PeixeControl",
  },
  {
    image: img2,
    title: "Thinker",
    desc: "Sistema de aprendizado gamificado com quizzes interativos e dashboard de desempenho. Permite acompanhar evolução, conquistar patentes e melhorar habilidades de forma envolvente e dinâmica.",
    web: "https://peixe-control.vercel.app/",
    git: "https://github.com/DevVitorlevi/PeixeControl",
  },
  {
    image: img3,
    title: "Icapuí: Quando o Mar Avança",
    desc: "Estudo sobre a erosão costeira no litoral de Icapuí, analisando suas causas naturais, como ação das ondas, marés e processos climáticos, e causas antrópicas, incluindo urbanização, turismo e atividades econômicas.",
    web: "https://icapui-e-a-erosao-costeira.vercel.app/",
    git: "https://github.com/DevVitorlevi/icapui-e-a-erosao-costeira",
  },
  {
    image: img2,
    title: "AgendaEasy",
    desc: "Sistema de Gestão de Reservas online para pequenos negócios, como salões, consultórios, estúdios, entre outros.Permite que clientes visualizem horários disponíveis e façam reservas facilmente, enquanto o administrador gerencia agendas, aprova ou cancela reservas.",
    web: "https://peixe-control.vercel.app/",
    git: "https://github.com/DevVitorlevi/AgendaEasy",
  },
];

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Wrapper que aplica delay individual
const CardWrapper = styled.div<{ delay: number; isVisible: boolean }>`
  opacity: 0;
  transform: translateY(20px);

  ${({ isVisible, delay }) =>
    isVisible &&
    css`
      animation: ${fadeInUp} 1s ease forwards;
      animation-delay: ${delay}s;
    `}
`;
const ProjectsCards = () => {
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
      <Cards ref={cardsRef}>
        {projects.map(({ image, title, desc, web, git }, index) => (
          <CardWrapper key={index} delay={index * 0.2} isVisible={isVisible}>
            <Card>
              <img src={image} alt={title} />
              <GradientText
                colors={["#581dc5", "#4079ff", "#581dc5", "#4079ff", "#581dc5"]}
                animationSpeed={8}
                showBorder={false}
                className="projects"
              >
                {title}
              </GradientText>
              <p>{desc}</p>
              <ButtonWrapper>
                {web && <a href={web} target="_blank" rel="noopener noreferrer" className="web">🌐 Ver Projeto</a>}
                {git && <a href={git} target="_blank" rel="noopener noreferrer" className="git">💻 Repositório</a>}
              </ButtonWrapper>
            </Card>
          </CardWrapper>
        ))}
      </Cards>
    </Container>
  );
};

export default ProjectsCards;
