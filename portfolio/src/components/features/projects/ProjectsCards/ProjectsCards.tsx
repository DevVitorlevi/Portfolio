import { Card, Cards, Container, ButtonWrapper } from "./ProjectsCardsStyle";
import img2 from "../../../../assets/images/page.png";
import ElectricBorder from "../../../animations/ElectricBorder"; // importe o componente

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
    image: img2,
    title: "Obras Costeiras em Icapuí",
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

const ProjectsCards = () => {
  return (
    <Container>
      <Cards>
        {projects.map(({ image, title, desc, web, git }, index) => (
          <ElectricBorder
            key={index}
            color="#1f0546"
            speed={1}
            chaos={0.5}
            thickness={2}
            style={{ borderRadius: 16, marginBottom: '1rem' }}
          >
            <Card>
              <img src={image} alt={title} />
              <h2 className="destaq">{title}</h2>
              <p>{desc}</p>

              <ButtonWrapper>
                {web && (
                  <a href={web} target="_blank" rel="noopener noreferrer" className="web">
                    🌐 Ver Projeto
                  </a>
                )}
                {git && (
                  <a href={git} target="_blank" rel="noopener noreferrer" className="git">
                    💻 Repositório
                  </a>
                )}
              </ButtonWrapper>
            </Card>
          </ElectricBorder>
        ))}
      </Cards>
    </Container>
  );
};

export default ProjectsCards;
