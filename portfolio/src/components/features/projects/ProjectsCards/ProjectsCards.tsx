import {
  Cards,
  Container,
  ButtonWrapper,
  Card,
  StackWrapper,
  ProjectImage,
} from "./ProjectsCardsStyle";

import img3 from "../../../../assets/images/icapui.png";
import img1 from "../../../../assets/images/peixe.png";
import img6 from "../../../../assets/images/fome.png";
import img8 from "../../../../assets/images/car.png";

// Projects
const projects = [
  {
    image: img1,
    title: "PeixeControl",
    desc: "Sistema inteligente de gerenciamento de estoque e vendas, desenvolvido para peixarias que buscam organização, praticidade e eficiência. Compatível com celular e computador, possui design responsivo e interface intuitiva, facilitando o dia a dia do negócio.",
    web: "https://peixe-control.vercel.app/",
    git: "https://github.com/DevVitorlevi/PeixeControl",
    stack: {
      1: "https://skillicons.dev/icons?i=js",
      2: "https://skillicons.dev/icons?i=nodejs",
      3: "https://skillicons.dev/icons?i=express",
      4: "https://skillicons.dev/icons?i=mongodb",
      5: "https://skillicons.dev/icons?i=react",
      6: "https://skillicons.dev/icons?i=styledcomponents",
    },
  },
  {
    image: img3,
    title: "Icapuí: Quando o Mar Avança",
    desc: "Estudo sobre a erosão costeira no litoral de Icapuí, analisando suas causas naturais e antrópicas, incluindo urbanização, turismo e atividades econômicas.",
    web: "https://icapui-e-a-erosao-costeira.vercel.app/",
    git: "https://github.com/DevVitorlevi/icapui-e-a-erosao-costeira",
    stack: {
      1: "https://skillicons.dev/icons?i=html",
      2: "https://skillicons.dev/icons?i=css",
      3: "https://skillicons.dev/icons?i=js",
    },
  },
  {
    image: img1,
    title: "AgendaEasy",
    desc: "Sistema de gestão de reservas online para pequenos negócios. Permite que clientes visualizem horários disponíveis e façam reservas facilmente, enquanto o administrador gerencia agendas e confirmações.",
    web: "https://agendaeasy.vercel.app/",
    git: "https://github.com/DevVitorlevi/AgendaEasy",
    stack: {
      1: "https://skillicons.dev/icons?i=js",
      2: "https://skillicons.dev/icons?i=nodejs",
      3: "https://skillicons.dev/icons?i=express",
      4: "https://skillicons.dev/icons?i=mysql",
      5: "https://skillicons.dev/icons?i=sequelize",
      6: "https://skillicons.dev/icons?i=nextjs",
      7: "https://skillicons.dev/icons?i=tailwind",
    },
  },
  {
    image: img1,
    title: "GetAPet",
    desc: "Sistema intuitivo para cadastro, visualização e adoção de pets. Interface responsiva e acessível, com gerenciamento de adoções e agendamento de visitas.",
    web: "https://getapet.vercel.app/",
    git: "https://github.com/DevVitorlevi/Get-a-Pet",
    stack: {
      1: "https://skillicons.dev/icons?i=ts",
      2: "https://skillicons.dev/icons?i=nodejs",
      3: "https://skillicons.dev/icons?i=express",
      4: "https://skillicons.dev/icons?i=mongodb",
      5: "https://skillicons.dev/icons?i=nextjs",
      6: "https://skillicons.dev/icons?i=tailwind",
    },
  },
  {
    image: img6,
    title: "Fome!!",
    desc: "Landing page responsiva para restaurante, com design moderno, cores harmoniosas e animações fluidas que destacam menus, fotos e promoções.",
    web: "https://landing-page--rust.vercel.app/",
    git: "https://github.com/DevVitorlevi/Fome",
    stack: {
      1: "https://skillicons.dev/icons?i=html",
      2: "https://skillicons.dev/icons?i=css",
      3: "https://skillicons.dev/icons?i=js",
    },
  },
  {
    image: img8,
    title: "TouringCars",
    desc: "Landing page moderna e sofisticada sobre o universo automotivo premium. Design minimalista e animações suaves que reforçam a sensação de exclusividade.",
    web: "https://touring-cars-delta.vercel.app/",
    git: "https://github.com/DevVitorlevi/Refri",
    stack: {
      1: "https://skillicons.dev/icons?i=nextjs",
      2: "https://skillicons.dev/icons?i=tailwind",
      3: "https://skillicons.dev/icons?i=ts",
    },
  },
];

// Component
const ProjectsCards = () => {
  return (
    <Container>
      <Cards>
        {projects.map(({ image, title, desc, web, git, stack }, index) => (
          <Card key={index}>
            <ProjectImage
              src={image}
              alt={title}
              loading="lazy"
              decoding="async"
              width={400}
              height={225}
            />

            <h1 className="text-2xl m-4">{title}</h1>

            <p>{desc}</p>

            <StackWrapper>
              {Object.values(stack).map((icon, i) => (
                <img
                  key={i}
                  src={icon}
                  alt={`stack-${i}`}
                  loading="lazy"
                  decoding="async"
                  width={32}
                  height={32}
                />
              ))}
            </StackWrapper>

            <ButtonWrapper>
              {web && (
                <a
                  href={web}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="web"
                >
                  🌐 Projeto
                </a>
              )}
              {git && (
                <a
                  href={git}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="git"
                >
                  💻 Repositório
                </a>
              )}
            </ButtonWrapper>
          </Card>
        ))}
      </Cards>
    </Container>
  );
};

export default ProjectsCards;
