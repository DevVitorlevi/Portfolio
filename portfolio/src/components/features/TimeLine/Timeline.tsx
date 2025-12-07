import { TimelineContainer, TimelineWrapper } from './TimelineStyle';
import TimelineItem from './TimelineItem';
import SplitText from "../../animations/SplitText"
export default function Timeline() {
    const experiences = [
        {
            period: "Set 2024",
            title: "Primeiro Freelancer",
            description: "Desenvolvi minha primeira landing page profissional para uma loja de roupas, criando uma interface responsiva em HTML, CSS e JavaScript. Foquei em entregar uma página leve, visualmente atraente e alinhada ao estilo da marca, sendo meu primeiro contato com demandas reais de um cliente."
        },
        {
            period: "Jan 2025",
            title: "Freelancer • Sistema de Agendamento",
            description: "Criei um sistema completo de agendamentos para uma oficina mecânica, trabalhando com ReactJS no FrontEnd e Node.js com MySQL no BackEnd. O sistema permitia organizar horários, registrar serviços e gerenciar clientes, consolidando minha experiência prática em aplicações FullStack."
        },
        {
            period: "Jul 2025",
            title: "Freelancer • Sistema de Estoque e Vendas",
            description: "Desenvolvi um painel de gestão para uma peixaria utilizando ReactJS, Node.js e MongoDB. O sistema incluía controle de estoque, registro de vendas e visão geral das movimentações do negócio, ajudando a melhorar a organização interna e o acompanhamento diário."
        },
        {
            period: "Ago 2025 – Nov 2025",
            title: "Estágio em QA",
            badge: "Golden Cloud Technology",
            description: "Atuei no time de QA automatizando fluxos E2E para sistemas da CearáPar e do IDT. Trabalhei com cenários estruturados, identifiquei problemas relevantes na plataforma e ajudei a melhorar a estabilidade dos sistemas, além de participar da criação de uma pipeline dedicada para execução dos testes."
        },
        {
            period: "Nov 2025 – Atual",
            title: "Estágio Desenvolvedor FullStack",
            badge: "Golden Cloud Technology",
            description: "Passei a integrar o time de desenvolvimento da Lusio Admin, um painel administrativo europeu. No FrontEnd, utilizei Next.js e TailwindCSS para criar telas, formulários e dashboards com foco em performance e usabilidade. No BackEnd, trabalhei com Node.js aprimorando autenticação, reestruturando o fluxo de recuperação de senha e criando filtros avançados de consulta. Essa etapa marca minha consolidação como desenvolvedor FullStack."
        }
    ];

    return (
        <section id='timeline' className='my-40'>
            <SplitText text='Minhas Experiencias Profissionais' className="text-4xl text-center w-full md:text-4xl lg:text-6xl h-20" />
            <TimelineContainer>

                <TimelineWrapper>
                    {experiences.map((exp, index) => (
                        <TimelineItem
                            key={index}
                            period={exp.period}
                            title={exp.title}
                            badge={exp.badge}
                            description={exp.description}
                            delay={index * 0.2}
                            isLeft={index % 2 === 0}
                        />
                    ))}
                </TimelineWrapper>
            </TimelineContainer>
        </section>
    );
}
