import { useEffect, useRef, useState } from "react";
import GradientText from "../../../animations/GradientText";
import { Cards, Container, ButtonWrapper, Card } from "./ProjectsCardsStyle";
import img3 from "../../../../assets/images/icapui.png";
import img1 from "../../../../assets/images/peixe.png";
import img6 from "../../../../assets/images/fome.png"
import img7 from "../../../../assets/images/link.png"
import img8 from "../../../../assets/images/refri.png"
import styled, { keyframes, css } from "styled-components";

const projects = [
  {
    image: img1,
    title: "PeixeControl",
    desc: "Sistema inteligente de gerenciamento de estoque e vendas, desenvolvido para peixarias que buscam organização, praticidade e eficiência. Compatível com celular e computador, possui design responsivo e interface intuitiva, facilitando o dia a dia do negócio.",
    web: "https://peixe-control.vercel.app/",
    git: "https://github.com/DevVitorlevi/PeixeControl",
  },
  {
    image: img1,
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
    image: img1,
    title: "AgendaEasy",
    desc: "Sistema de Gestão de Reservas online para pequenos negócios, como salões, consultórios, estúdios, entre outros.Permite que clientes visualizem horários disponíveis e façam reservas facilmente, enquanto o administrador gerencia agendas, aprova ou cancela reservas.",
    web: "https://peixe-control.vercel.app/",
    git: "https://github.com/DevVitorlevi/AgendaEasy",
  },
    {
    image: img1,
    title: "GetAPet",
    desc: "Sistema intuitivo para cadastro, visualização e adoção de pets, com interface responsiva e acessível. Permite agendamento de visitas, gerenciamento de pets e acompanhamento de adoções de forma clara e prática.",
    web: "https://peixe-control.vercel.app/",
    git: "https://github.com/DevVitorlevi/Get-a-Pet",
  },
    {
    image: img6,
    title: "Fome!!",
    desc: "Landing page responsiva para restaurante, com design moderno e acolhedor, cores harmoniosas e animações fluidas que destacam menus, fotos e promoções. Experiência interativa, adaptada a dispositivos móveis e desktop, valorizando a apresentação visual e a navegação intuitiva",
    web: "https://landing-page--rust.vercel.app/",
    git: "https://github.com/DevVitorlevi/Fome",
  },
    {
    image: img7,
    title: "Linktree",
    desc: "Linktree pessoal de estilo clássico e escuro, com fundo preto, tipografia elegante e botões minimalistas. Links para GitHub, LinkedIn, projetos e contatos, organizados de forma clara e com animações suaves de hover.",
    web: "https://link-tree-nine-liart.vercel.app/",
    git: "https://github.com/DevVitorlevi/LinkTree",
  },
    {
    image: img8,
    title: "Refri",
    desc: "Landing page interativa com design moderno e sofisticado, animações fluidas e cores harmoniosas. Interatividade com eventos de teclado, e efeitos dinâmicos de transição que deixam a experiência envolvente e elegante",
    web: "https://refri-pro.vercel.app/",
    git: "https://github.com/DevVitorlevi/Refri",
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
