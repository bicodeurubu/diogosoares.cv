export const languages = {
    en: 'English',
    'pt-br': 'Português',
} as const;

export const defaultLang = 'en';

export type Lang = keyof typeof languages;

export const ui = {
    en: {
        // Header
        'nav.projects': 'Projects',
        'nav.cv': 'CV',
        'nav.available': 'Available for Work',
        'nav.letsTalk': "Let's Talk",

        // Footer
        'footer.role': 'Senior Product Manager',
        'footer.builtWith': 'Built with purpose.',

        // Home page
        'home.greeting': "Hello, I'm",
        'home.role': 'Senior Product Manager',
        'home.title': 'Work in Progress',
        'home.description': "Building complex digital ecosystems with Value Engineering: connecting commercial vision to technical execution, from pre-sales to critical operations at scale.",
        'home.subtitle': 'The full portfolio will be live soon.',
        'home.location': 'Belo Horizonte, Brazil',
        'home.linkedinLabel': 'LinkedIn Profile',
        'home.viewCV': 'View My CV',
        'home.letsTalk': "Let's Talk",
        'home.strategicProjects': 'Projects, Case Studies & Articles',
        'home.projectsSubtitle': 'Strategic thinking applied',
        'home.coreExpertise': 'Core Expertise',
        'home.ctaTitle': "Let's Build Something Impactful",
        'home.ctaDescription': "Interested in product leadership, digital transformation, or the intersection of technology and human behavior? Let's connect.",

        // CV Page
        'cv.about': 'About',
        'cv.experience': 'Professional Experience',
        'cv.skills': 'Key Competencies',
        'cv.tools': 'Tools',
        'cv.education': 'Education',
        'cv.certifications': 'Certifications',
        'cv.download': 'Download PDF / Print',

        // CV Content
        'cv.summary': "Senior Product Manager and GPM with expertise in B2B Enterprise and high technical complexity environments. My approach is defined by Value Engineering: I connect commercial vision to technical execution, working from pre-sales (bridging the gap between Sales and Delivery) to scaling critical operations. I have a robust track record in service productization, transforming consulting demands into scalable SaaS platforms and recurring revenue. As a leader (Chapter Lead/GPM), I structure Product and Product Ops areas, elevating team maturity in major accounts (XP Inc, Magalu, Santander). Specialist in untangling operational knots through systemic integrations (Legacy/ERPs/CRMs), ensuring technology acts as a direct enabler of revenue and efficiency.",

        // Projects Page
        'projects.title': 'Project Archive',
        'projects.description': 'A selected collection of product management and strategy work, spanning NGO articulation to Enterprise AI solutions.',

        // Specific Projects
        'project.blip.title': 'Conversational AI Platform (Blip)',
        'project.blip.desc': 'Productized custom services into SaaS plugins + Led 8-10 PMs as GPM + Developed facial and voice biometric plugins.',
        'project.blip.metrics': '-15% operational costs XP Inc • PM Portal',

        'project.zenvia.title': 'WhatsApp Customer Service (Zenvia)',
        'project.zenvia.desc': 'Core Product Management responsible for strategy and stability of the Commercial Service module, unifying critical channels (WhatsApp and Human Service).',
        'project.zenvia.metrics': '2026 Roadmap focused on stability and innovation',

        'project.hubify.title': 'Marketing Automation (8D Hubify)',
        'project.hubify.desc': 'Sales Operations Architecture for Consórcio Magalu and Helbor + Developed proprietary SaaS product (WhatsApp dispatcher via API).',
        'project.hubify.metrics': 'SaaS Product 0 to 1',

        'project.bp.title': 'Digital Transformation (Hospital BP)',
        'project.bp.desc': 'Digital transformation of one of the largest hospitals in Latin America, including Website, Intranet, and digital appointment scheduling.',
        'project.bp.metrics': '+50% user engagement',

        'project.viewCase': 'Read Full Case Study',
        'common.backHome': 'Back',

        // Project Tags
        'tag.AI/ML': 'AI/ML',
        'tag.SaaS': 'SaaS',
        'tag.Enterprise': 'Enterprise',
        'tag.WhatsApp': 'WhatsApp',
        'tag.CX': 'CX',
        'tag.Integration': 'Integration',
        'tag.Automation': 'Automation',
        'tag.B2B': 'B2B',
        'tag.CRM': 'CRM',
        'tag.Healthcare': 'Healthcare',
        'tag.Digital': 'Digital',
        'tag.UX': 'UX',

        // Job History Details
        'job.zenvia.role': 'Senior Product Manager',
        'job.zenvia.desc.0': "Core Product Management at Scale: Responsible for strategy and stability of the Commercial Service module, unifying critical channels (WhatsApp and Human Service). Leading the evolution of a product that operates at the 'heart' of revenue for large clients, where any failure directly impacts sales volume.",
        'job.zenvia.desc.1': "Stability & Innovation Roadmap: Designed the 2026 roadmap focusing on the vital balance between technical debt reduction (platform stability) and new sales features.",
        'job.zenvia.desc.2': 'Complete product lifecycle management, from conception (Discovery) to launch (Go-to-Market), prioritizing features that increase client operational efficiency.',
        'job.zenvia.desc.3': 'Leadership of multidisciplinary agile squads, ensuring alignment between technical teams and business needs for continuous value delivery.',
        'job.zenvia.desc.4': 'Direct involvement in integrating communication channels (WhatsApp, SMS, Email) with data platforms, enabling smooth information flow and service automation.',

        'job.hubify.role': 'Senior Product Manager',
        'job.hubify.desc.0': 'Critical Sales Operations Architecture: Led the implementation of CRM ecosystems (Salesforce/HubSpot) for high-complexity operations like Consórcio Magalu and Helbor. The challenge was designing data integration between E-commerce, Dashboards, and CRM to ensure no lead was lost in high-value sales funnels.',
        'job.hubify.desc.1': 'Corporate Entrepreneurship (Proprietary SaaS): Identified a functional gap in market tools and led the development (0 to 1) of a proprietary SaaS product: a WhatsApp dispatcher via API natively integrated with CRMs (HubSpot/RD Station).',
        'job.hubify.desc.2': 'Development of data-driven strategies to improve customer journey, resulting in greater conversion funnel efficiency and optimization of metrics like CAC and LTV.',
        'job.hubify.desc.3': 'Acting at the interface between technical teams and business stakeholders, translating complex requirements into clear deliverables for development squads.',

        'job.rethink.role': 'Senior Product Manager',
        'job.rethink.desc.0': 'Product Governance Structuring: Acted as Product chapter lead, mentoring PMs allocated to Enterprise accounts (Smiles, Esfera Santander). Implemented tracking metrics and prioritization rituals that increased visibility and control over client roadmaps.',
        'job.rethink.desc.1': 'Commercial Efficiency (Sales Ops): Led internal development of an Automated Budget Calculator, replacing manual pricing processes and ensuring financial health in software contracts.',
        'job.rethink.desc.2': 'Collaboration with cross-functional teams (developers, business stakeholders, and end users) to design and implement technology solutions aligned with organizational needs.',
        'job.rethink.desc.3': 'Innovation Leadership: Developed and delivered workshops and training sessions on emerging technologies, such as Artificial Intelligence, for over 30 colleagues.',

        'job.blip.role': 'Senior & Group Product Manager',
        'job.blip.desc.0': "From Custom Services to SaaS Platform: Identified patterns in one-off service deliveries and led the productization strategy. Transformed isolated solutions into native platform plugins and extensions, drastically reducing setup time for new clients and creating scalable recurring revenue.",
        'job.blip.desc.1': 'Technical Innovation (Biometrics & AI): Led the construction of complex facial and voice recognition plugins, expanding Blip ecosystem to meet banking security and digital identity requirements.',
        'job.blip.desc.2': "People Leadership & Product Ops: As GPM, managed a team of 8-10 PMs. Structured the area by creating the 'PM Portal' (centralized Knowledge Base), standardizing rituals and directly acting on PDI and career mentoring.",
        'job.blip.desc.3': 'Impact Results: Led product strategy for XP Inc. account, achieving 15% reduction in operational costs through service automation and intelligent chatbot implementation.',

        'job.gauge.role': 'Senior Project Manager',
        'job.gauge.desc.0': "Pre-Sales Engineering (Sales-Delivery Gap): Strategically worked with the Commercial team to eliminate the gap between 'what is sold' and 'what is delivered'. Developed technical specifications and functional prototypes before contract closure.",
        'job.gauge.desc.1': "Suvinil Case (Pandemic Digitalization): Led the rapid prototyping of Suvinil's digital sales solution during the pandemic onset, validating a new revenue channel at a critical moment of physical store closures.",
        'job.gauge.desc.2': 'Enterprise Stakeholder Management: Built collaborative relationships with major clients (Vivo and Suvinil), effectively communicating updates and project milestones.',
        'job.gauge.desc.3': 'Led design and development of over 12 prototypes for new technology solutions, employing a user-centric approach that resulted in high client satisfaction.',

        'job.weber.role': 'Senior Marketing Project Manager',
        'job.weber.desc.0': 'Operational Efficiency Leadership (Global Case): Led the implementation of the new Timesheet tool integrated with project management. Success in team adoption (Change Management) and accuracy of financial data generated resulted in international recognition, being invited to present the case at company Headquarters in New York.',
        'job.weber.desc.1': 'SAP Integration and Efficiency: Key role in implementing an advanced project management platform, integrating SAP and timesheet systems for over 200 users, reducing project delivery times by 25%.',
        'job.weber.desc.2': 'Healthcare Digital Transformation (Beneficência Portuguesa): Managed the development of the digital ecosystem (Website and Intranet) of Hospital BP, one of the largest in Latin America, implementing digital appointment scheduling.',
        'job.weber.desc.3': "Digital Portfolio Management: Acted as central manager of all agency digital deliveries, orchestrating from platform and app development to video and content strategies.",

        'job.brasa.role': 'Project Manager',
        'job.brasa.desc.0': 'Financial and Budget Control: Managed contracts, budgets, and financial expenses, maintaining project profitability with a consistent track record of overspending reduction.',
        'job.brasa.desc.1': 'Agile Methodologies: Implemented agile methodologies, introducing sprints that accelerated delivery schedules.',
        'job.brasa.desc.2': 'Led all digital projects at the agency, specializing in website and e-commerce development, supervising from scope definition to final delivery.',

        'job.polis.role': 'Project Manager',
        'job.polis.desc.0': 'Logistics and Operations Management: Managed a complex portfolio of over 100 events and actions across 14 municipalities (Sustainable Coast Project), supervising from strategic planning to logistics execution.',
        'job.polis.desc.1': 'Leadership and Alignment: Led and mentored high-performance teams, ensuring clear alignment between government stakeholders and partner institutions.',
        'job.polis.desc.2': 'Monitoring and Results: Implemented digital communication strategies that significantly increased project reach and produced detailed follow-up reports.',

        // Common Labels
        'common.present': 'Present',

        // Skills
        'skill.Product Vision': 'Product Vision',
        'skill.Product Strategy': 'Product Strategy',
        'skill.Roadmapping': 'Roadmapping',
        'skill.Backlog Prioritization': 'Backlog Prioritization',
        'skill.Discovery & Delivery': 'Discovery & Delivery',
        'skill.Process Automation': 'Process Automation',
        'skill.Cost Reduction': 'Cost Reduction',
        'skill.Journey Optimization': 'Journey Optimization',
        'skill.API Integration': 'API Integration',
        'skill.ERPs (SAP)': 'ERPs (SAP)',
        'skill.CRMs (Salesforce/HubSpot)': 'CRMs (Salesforce/HubSpot)',
        'skill.Data Analytics': 'Data Analytics',
        'skill.AI & Chatbots': 'AI & Chatbots',
        'skill.Agile': 'Agile',
        'skill.Scrum': 'Scrum',
        'skill.Kanban': 'Kanban',
        'skill.Lean': 'Lean',
        'skill.Stakeholder Management': 'Stakeholder Management',
        'skill.KPIs & OKRs': 'KPIs & OKRs',
        'skill.Strategic Planning': 'Strategic Planning',

        // Tools
        'tool.Jira': 'Jira',
        'tool.Asana': 'Asana',
        'tool.Azure': 'Azure',
        'tool.Google Analytics': 'Google Analytics',
        'tool.HubSpot': 'HubSpot',
        'tool.Salesforce': 'Salesforce',
        'tool.RD Station': 'RD Station',
        'tool.SAP': 'SAP',
        'tool.Figma': 'Figma',
        'tool.Miro': 'Miro',

        // Education & Certs
        'edu.usp.degree': 'Bachelor of Social Science',
        'cert.english': 'English Level C2 Proficient',
        'cert.ai': 'Artificial Intelligence in Digital Business',
        'cert.leadership': 'Digital Product Leadership',
        'cert.ga': 'Google Analytics Individual Qualification',
        'cert.strategy': 'Leadership and Business Strategy',
        'cert.agile': 'Agile Project Manager',
    },
    'pt-br': {
        // Header
        'nav.projects': 'Projetos',
        'nav.cv': 'CV',
        'nav.available': 'Disponível para trabalho',
        'nav.letsTalk': 'Fale Comigo',

        // Footer
        'footer.role': 'Gerente de Produto Sênior',
        'footer.builtWith': 'Construído com propósito.',

        // Home page
        'home.greeting': 'Olá, eu sou',
        'home.role': 'Gerente de Produto Sênior',
        'home.title': 'Em Construção',
        'home.description': 'Construindo ecossistemas digitais complexos com Engenharia de Valor: conectando visão comercial à execução técnica, da pré-venda à escala de operações críticas.',
        'home.subtitle': 'O portfólio completo estará disponível em breve.',
        'home.location': 'Belo Horizonte, Brasil',
        'home.linkedinLabel': 'Perfil LinkedIn',
        'home.viewCV': 'Ver meu CV',
        'home.letsTalk': 'Fale Comigo',
        'home.strategicProjects': 'Projetos, Estudos de Caso e Artigos',
        'home.projectsSubtitle': 'Pensamento estratégico aplicado',
        'home.coreExpertise': 'Competências Principais',
        'home.ctaTitle': 'Vamos Construir Algo Impactante',
        'home.ctaDescription': 'Interessado em liderança de produto, transformação digital ou na interseção entre tecnologia e comportamento humano? Vamos conversar.',

        // CV Page
        'cv.about': 'Sobre',
        'cv.experience': 'Experiência Profissional',
        'cv.skills': 'Competências Chave',
        'cv.tools': 'Ferramentas',
        'cv.education': 'Formação',
        'cv.certifications': 'Certificações',
        'cv.download': 'Baixar PDF / Imprimir',

        // CV Content
        'cv.summary': "Senior Product Manager e GPM com expertise em B2B Enterprise e ambientes de alta complexidade técnica. Minha atuação define-se pela Engenharia de Valor: conecto a visão comercial à execução técnica, atuando desde a pré-venda (mitigando o gap entre Sales e Delivery) até a escala de operações críticas. Tenho histórico robusto em produtização de serviços, transformando demandas consultivas em plataformas SaaS escaláveis e receitas recorrentes. Como líder (Chapter Lead/GPM), atuo na estruturação de áreas de Produto e Product Ops, elevando a maturidade de times em grandes contas (XP Inc, Magalu, Santander). Especialista em desatar nós operacionais através de integrações sistêmicas (Legacy/ERPs/CRMs), garantindo que a tecnologia atue como viabilizadora direta de receita e eficiência.",

        // Projects Page
        'projects.title': 'Arquivo de Projetos',
        'projects.description': 'Uma coleção selecionada de trabalhos em gestão de produtos e estratégia, desde articulação com ONGs até soluções de IA empresarial.',

        // Specific Projects
        'project.blip.title': 'Plataforma de IA Conversacional (Blip)',
        'project.blip.desc': 'Produtização de serviços customizados em plugins SaaS + Liderança de 8-10 PMs como GPM + Desenvolvimento de plugins de biometria facial e voz.',
        'project.blip.metrics': '-15% custos operacionais XP Inc • Portal do PM',

        'project.zenvia.title': 'Atendimento ao Cliente via WhatsApp (Zenvia)',
        'project.zenvia.desc': 'Gestão de Produto Core responsável pela estratégia e estabilidade do módulo de Atendimento Comercial, unificando canais críticos (WhatsApp e Atendimento Humano).',
        'project.zenvia.metrics': 'Roadmap 2026 com foco em estabilidade e inovação',

        'project.hubify.title': 'Automação de Marketing (8D Hubify)',
        'project.hubify.desc': 'Arquitetura de Operações de Vendas para Consórcio Magalu e Helbor + Desenvolvimento de produto SaaS próprio (disparador WhatsApp via API).',
        'project.hubify.metrics': 'Produto SaaS 0 a 1',

        'project.bp.title': 'Transformação Digital (Hospital BP)',
        'project.bp.desc': 'Transformação digital de um dos maiores hospitais da América Latina, incluindo Website, Intranet e agendamento digital de consultas.',
        'project.bp.metrics': '+50% de engajamento do usuário',

        'project.viewCase': 'Ler Case Completo',
        'common.backHome': 'Voltar',

        // Project Tags
        'tag.AI/ML': 'IA/ML',
        'tag.SaaS': 'SaaS',
        'tag.Enterprise': 'Enterprise',
        'tag.WhatsApp': 'WhatsApp',
        'tag.CX': 'CX',
        'tag.Integration': 'Integração',
        'tag.Automation': 'Automação',
        'tag.B2B': 'B2B',
        'tag.CRM': 'CRM',
        'tag.Healthcare': 'Saúde',
        'tag.Digital': 'Digital',
        'tag.UX': 'UX',

        // Job History Details
        'job.zenvia.role': 'Gerente de Produto Sênior',
        'job.zenvia.desc.0': "Gestão de Produto Core em Escala: Responsável pela estratégia e estabilidade do módulo de Atendimento Comercial, unificando canais críticos (WhatsApp e Atendimento Humano). Lidero a evolução de um produto que opera no 'coração' da receita de grandes clientes, onde qualquer falha impacta diretamente o volume de vendas.",
        'job.zenvia.desc.1': "Roadmap de Estabilidade & Inovação: Desenhei o roadmap de 2026 focando no equilíbrio vital entre redução de débitos técnicos (estabilidade da plataforma) e novas features de vendas.",
        'job.zenvia.desc.2': 'Gestão do ciclo de vida completo do produto, desde a concepção (Discovery) até o lançamento (Go-to-Market), priorizando funcionalidades que aumentam a eficiência operacional dos clientes.',
        'job.zenvia.desc.3': 'Liderança de squads ágeis multidisciplinares, garantindo alinhamento entre times técnicos e necessidades de negócio para entregas contínuas de valor.',
        'job.zenvia.desc.4': 'Atuação direta na integração de canais de comunicação (WhatsApp, SMS, E-mail) com plataformas de dados, permitindo fluxo fluido de informações e automação de atendimento.',

        'job.hubify.role': 'Gerente de Produto Sênior',
        'job.hubify.desc.0': 'Arquitetura de Operações de Vendas Críticas: Liderei a implementação de ecossistemas de CRM (Salesforce/HubSpot) para operações de alta complexidade como Consórcio Magalu e Helbor. O desafio foi desenhar a integração de dados entre E-commerce, Dashboards e CRM para garantir que nenhum lead fosse perdido em funis de vendas de alto valor agregado.',
        'job.hubify.desc.1': 'Empreendedorismo Corporativo (SaaS Próprio): Identifiquei um gap funcional nas ferramentas de mercado e liderei o desenvolvimento (0 a 1) de um produto SaaS proprietário: um disparador de WhatsApp via API integrado nativamente a CRMs (HubSpot/RD Station).',
        'job.hubify.desc.2': 'Desenvolvimento de estratégias baseadas em dados para melhorar a jornada do cliente, resultando em maior eficiência no funil de conversão e otimização de métricas como CAC e LTV.',
        'job.hubify.desc.3': 'Atuação na interface entre times técnicos e stakeholders de negócio, traduzindo requisitos complexos em entregáveis claros para as squads de desenvolvimento.',

        'job.rethink.role': 'Gerente de Produto Sênior',
        'job.rethink.desc.0': 'Estruturação de Governança de Produto: Atuei como liderança do chapter de Produto, mentorando PMs alocados em contas Enterprise (Smiles, Esfera Santander). Implementei métricas de acompanhamento e rituais de priorização que aumentaram a visibilidade e controle sobre o roadmap dos clientes.',
        'job.rethink.desc.1': 'Eficiência Comercial (Sales Ops): Liderei o desenvolvimento interno de uma Calculadora Automatizada de Orçamentos, substituindo processos manuais de precificação e garantindo saúde financeira nos contratos de software.',
        'job.rethink.desc.2': 'Colaboração com times multifuncionais (desenvolvedores, stakeholders de negócio e usuários finais) para desenhar e implementar soluções tecnológicas alinhadas às necessidades organizacionais.',
        'job.rethink.desc.3': 'Liderança em Inovação: Desenvolveu e ministrou workshops e sessões de treinamento sobre tecnologias emergentes, como Inteligência Artificial, para mais de 30 colaboradores.',

        'job.blip.role': 'Gerente de Produto Sênior e GPM',
        'job.blip.desc.0': "De Serviços Customizados para Plataforma SaaS: Identifiquei padrões em entregas pontuais de serviços ('one-off') e liderei a estratégia de produtização. Transformei soluções isoladas em plugins e extensões nativas da plataforma, reduzindo drasticamente o tempo de setup para novos clientes e criando receita recorrente escalável.",
        'job.blip.desc.1': 'Inovação Técnica (Biometria & IA): Liderei a construção de plugins complexos de reconhecimento facial e de voz, expandindo o ecossistema da Blip para atender requisitos de segurança bancária e identidade digital.',
        'job.blip.desc.2': "Liderança de Pessoas & Product Ops: Como GPM, gerenciei um time de 8 a 10 PMs. Estruturei a área criando o 'Portal do PM' (Knowledge Base centralizada), padronizando rituais e atuando diretamente no PDI e mentoria de carreira.",
        'job.blip.desc.3': 'Resultados de Impacto: Liderou a estratégia de produto para a conta da XP Inc., alcançando uma redução de 15% nos custos operacionais através da automação de atendimento e implementação de chatbots inteligentes.',

        'job.gauge.role': 'Gerente de Projetos Sênior',
        'job.gauge.desc.0': "Engenharia de Pré-Vendas (Sales-Delivery Gap): Atuei estrategicamente junto ao time Comercial para eliminar o abismo entre 'o que é vendido' e 'o que é entregue'. Desenvolvi especificações técnicas e protótipos funcionais antes do fechamento do contrato.",
        'job.gauge.desc.1': 'Case Suvinil (Digitalização na Pandemia): Liderei a prototipagem rápida da solução de vendas digitais da Suvinil durante o início da pandemia, validando um novo canal de receita em um momento crítico de fechamento de lojas físicas.',
        'job.gauge.desc.2': 'Gestão de Stakeholders Enterprise: Construiu relacionamentos colaborativos com grandes clientes (Vivo e Suvinil), comunicando efetivamente atualizações e marcos do projeto.',
        'job.gauge.desc.3': 'Liderou o design e desenvolvimento de mais de 12 protótipos para novas soluções tecnológicas, empregando uma abordagem centrada no usuário que resultou em alta satisfação do cliente.',

        'job.weber.role': 'Gerente de Projetos de Marketing Sênior',
        'job.weber.desc.0': 'Liderança em Eficiência Operacional (Case Global): Liderou a implementação da nova ferramenta de Timesheet integrada à gestão de projetos. O sucesso na adesão da equipe (Change Management) e a precisão dos dados financeiros gerados resultaram em reconhecimento internacional, sendo convidado a apresentar o case no Headquarters da empresa em Nova York.',
        'job.weber.desc.1': 'Integração SAP e Eficiência: Papel fundamental na implementação de uma plataforma de gestão de projetos, integrando sistemas SAP e de timesheet para mais de 200 usuários, reduzindo os tempos de entrega em 25%.',
        'job.weber.desc.2': 'Transformação Digital na Saúde (Beneficência Portuguesa): Gerenciou o desenvolvimento do ecossistema digital (Website e Intranet) do Hospital BP, um dos maiores da América Latina, implementando agendamento digital de consultas.',
        'job.weber.desc.3': 'Gestão de Portfólio Digital: Atuou como gestor central de todas as entregas digitais da agência, orquestrando desde o desenvolvimento de plataformas e apps até estratégias de vídeo e conteúdo.',

        'job.brasa.role': 'Gerente de Projetos',
        'job.brasa.desc.0': 'Controle Financeiro e Orçamentário: Gerenciou contratos, orçamentos e despesas financeiras, mantendo a lucratividade do projeto com histórico consistente de redução de overspending.',
        'job.brasa.desc.1': 'Metodologias Ágeis: Implementou metodologias ágeis, introduzindo sprints que aceleraram os cronogramas de entrega.',
        'job.brasa.desc.2': 'Liderou todos os projetos digitais da agência, especializando-se em desenvolvimento de sites e e-commerce, supervisionando desde a definição do escopo até a entrega final.',

        'job.polis.role': 'Gerente de Projetos',
        'job.polis.desc.0': 'Gestão Logística e Operacional: Gerenciou um portfólio complexo de mais de 100 eventos e ações em 14 municípios (Projeto Litoral Sustentável), supervisionando desde o planejamento estratégico até a execução logística.',
        'job.polis.desc.1': 'Liderança e Alinhamento: Liderou e mentorou equipes de alta performance, assegurando alinhamento claro entre stakeholders governamentais e instituições parceiras.',
        'job.polis.desc.2': 'Monitoramento e Resultados: Implementou estratégias de comunicação digital que aumentaram significativamente o alcance do projeto e produziu relatórios de acompanhamento detalhados.',

        // Common Labels
        'common.present': 'Presente',

        // Skills
        'skill.Product Vision': 'Visão de Produto',
        'skill.Product Strategy': 'Estratégia de Produto',
        'skill.Roadmapping': 'Roadmapping',
        'skill.Backlog Prioritization': 'Priorização de Backlog',
        'skill.Discovery & Delivery': 'Discovery & Delivery',
        'skill.Process Automation': 'Automação de Processos',
        'skill.Cost Reduction': 'Redução de Custos',
        'skill.Journey Optimization': 'Otimização de Jornada',
        'skill.API Integration': 'Integração de APIs',
        'skill.ERPs (SAP)': 'ERPs (SAP)',
        'skill.CRMs (Salesforce/HubSpot)': 'CRMs (Salesforce/HubSpot)',
        'skill.Data Analytics': 'Análise de Dados',
        'skill.AI & Chatbots': 'IA & Chatbots',
        'skill.Agile': 'Agile',
        'skill.Scrum': 'Scrum',
        'skill.Kanban': 'Kanban',
        'skill.Lean': 'Lean',
        'skill.Stakeholder Management': 'Gestão de Stakeholders',
        'skill.KPIs & OKRs': 'KPIs & OKRs',
        'skill.Strategic Planning': 'Planejamento Estratégico',

        // Tools
        'tool.Jira': 'Jira',
        'tool.Asana': 'Asana',
        'tool.Azure': 'Azure',
        'tool.Google Analytics': 'Google Analytics',
        'tool.HubSpot': 'HubSpot',
        'tool.Salesforce': 'Salesforce',
        'tool.RD Station': 'RD Station',
        'tool.SAP': 'SAP',
        'tool.Figma': 'Figma',
        'tool.Miro': 'Miro',

        // Education & Certs
        'edu.usp.degree': 'Bacharel em Ciências Sociais',
        'cert.english': 'Inglês Nível C2 Proficiente',
        'cert.ai': 'Inteligência Artificial em Negócios Digitais',
        'cert.leadership': 'Liderança de Produtos Digitais',
        'cert.ga': 'Google Analytics Individual Qualification',
        'cert.strategy': 'Liderança e Estratégia de Negócios',
        'cert.agile': 'Gerente de Projetos Agile',
    },
} as const;
