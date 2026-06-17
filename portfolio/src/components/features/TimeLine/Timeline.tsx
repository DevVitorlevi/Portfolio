import { TimelineContainer, TimelineWrapper } from './TimelineStyle';
import TimelineItem from './TimelineItem';
import SplitText from "../../animations/SplitText";

export default function Timeline() {
    const experiences = [
        {
            company: "Freelancer",
            companyType: "Autônomo",
            location: "Icapuí, Ceará, Brasil · Remote",
            period: "Set 2024 - Atual",
            duration: "1 ano e 10 meses",
            current: true,
            roles: [
                {
                    title: "Desenvolvedor Full Stack",
                    period: "Set 2024 - Atual",
                    description: [
                        "Transformei operações 100% manuais em sistemas inteligentes para clientes de diferentes segmentos, automatizando rotinas de estoque e agendamento e reduzindo em até 50% o tempo operacional das equipes.",
                        "Projetei APIs RESTful escaláveis com autenticação JWT, RBAC e validação via Zod, garantindo segurança e manutenibilidade em projetos de médio e longo prazo sem comprometer a performance.",
                        "Gerenciei o ciclo completo de cada projeto — requisitos, arquitetura, desenvolvimento, testes e deploy — aplicando Clean Code, Clean Architecture, DDD e SOLID para garantir que cada entrega fosse sustentável e de fácil evolução."
                    ],
                    stack: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "TailwindCSS", "Styled Components", "ShadCN/UI", "Zod", "Node.js", "Express.js", "Fastify", "PostgreSQL", "MySQL", "MongoDB", "Prisma ORM", "Sequelize", "Mongoose ODM", "JWT", "RBAC", "REST API", "Postman", "Git", "Git Flow"]
                }
            ]
        },
        {
            company: "Golden Cloud Technology",
            companyType: "Estágio",
            location: "Fortaleza, Ceará, Brasil · Remote",
            period: "Ago 2025 - Dez 2025",
            duration: "5 meses",
            current: false,
            roles: [
                {
                    title: "Estágio em Desenvolvimento Full Stack",
                    period: "Out 2025 - Dez 2025",
                    description: [
                        "Desenvolvi um painel administrativo para uma empresa europeia em Next.js, TailwindCSS e ShadCN/UI, incluindo telas de autenticação, dashboards interativos, tabelas com filtros avançados e formulários com validação via Zod, eliminando o uso de planilhas manuais e reduzindo em até 30% o tempo da diretoria em auditorias internas.",
                        "Implementei filtros avançados de busca no backend com Node.js, Prisma ORM e PostgreSQL, suportando múltiplas combinações de parâmetros e reduzindo o tempo de consulta a dados de minutos para segundos.",
                        "Identifiquei e corrigi uma vulnerabilidade crítica de segurança no fluxo de reset de senha, onde o token era retornado diretamente pela API, reestruturando o processo para envio exclusivo via SMTP e React Email e eliminando um risco real de exposição de dados dos usuários da plataforma."
                    ],
                    stack: ["TypeScript", "Next.js", "TailwindCSS", "ShadCN/UI", "Zod", "Node.js", "Fastify", "Prisma ORM", "REST API", "Postman", "Git", "Git Flow"]
                },
                {
                    title: "Estágio em Qualidade de Software",
                    period: "Ago 2025 - Out 2025",
                    description: [
                        "Automatizei testes E2E em sistemas governamentais com Cypress e Gherkin (BDD), cobrindo fluxos críticos de cadastro, consulta e edição de dados, prevenindo regressões funcionais e garantindo a estabilidade das entregas em produção.",
                        "Diagnostiquei bugs críticos em fluxos de contrato que impediam a criação de novos registros, reportando e documentando as falhas com precisão e contribuindo para que o sistema fosse entregue ao cliente sem bloqueios funcionais críticos.",
                        "Implementei pipeline de Integração Contínua com GitHub Actions dedicada exclusivamente ao fluxo de testes, padronizando as validações automatizadas a cada atualização de código e reduzindo o tempo de identificação de falhas entre ciclos de desenvolvimento."
                    ],
                    stack: ["JavaScript", "Cypress", "Gherkin BDD", "CI/CD", "Git", "Git Flow", "Git Actions"]
                }
            ]
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
                            company={exp.company}
                            companyType={exp.companyType}
                            location={exp.location}
                            period={exp.period}
                            duration={exp.duration}
                            current={exp.current}
                            roles={exp.roles}
                            delay={index * 0.2}
                            isLeft={index % 2 === 0}
                        />
                    ))}
                </TimelineWrapper>
            </TimelineContainer>
        </section>
    );
}
