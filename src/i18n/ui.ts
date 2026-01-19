export const languages = {
    en: 'English',
    'pt-br': 'Português',
} as const;

export const defaultLang = 'en';

export type Lang = keyof typeof languages;

export const ui = {
    en: {
        // Header
        'nav.comingSoon': 'Coming Soon',
        'nav.letsTalk': "Let's Talk",

        // Footer
        'footer.role': 'Senior Product Manager',
        'footer.builtWith': 'Built with purpose.',

        // Home page (Coming Soon)
        'home.title': 'Work in Progress',
        'home.description': 'We are crafting a new digital experience to showcase strategic product leadership.',
        'home.subtitle': 'The full portfolio will be live soon.',
        'home.location': 'Belo Horizonte, Brazil',
        'home.linkedinLabel': 'LinkedIn Profile',

        // CV Page
        'cv.experience': 'Professional Experience',
        'cv.skills': 'Skills',
        'cv.tools': 'Tools',
        'cv.education': 'Education',
        'cv.certifications': 'Certifications',
        'cv.download': 'Download PDF / Print',

        // Projects Page
        'projects.title': 'Project Archive',
        'projects.description': 'A selected collection of product management and strategy work, spanning NGO articulation to Enterprise AI solutions.',
    },
    'pt-br': {
        // Header
        'nav.comingSoon': 'Em Breve',
        'nav.letsTalk': 'Fale Comigo',

        // Footer
        'footer.role': 'Gerente de Produto Sênior',
        'footer.builtWith': 'Construído com propósito.',

        // Home page (Coming Soon)
        'home.title': 'Em Construção',
        'home.description': 'Estamos criando uma nova experiência digital para apresentar liderança estratégica de produto.',
        'home.subtitle': 'O portfólio completo estará disponível em breve.',
        'home.location': 'Belo Horizonte, Brasil',
        'home.linkedinLabel': 'Perfil LinkedIn',

        // CV Page
        'cv.experience': 'Experiência Profissional',
        'cv.skills': 'Habilidades',
        'cv.tools': 'Ferramentas',
        'cv.education': 'Formação',
        'cv.certifications': 'Certificações',
        'cv.download': 'Baixar PDF / Imprimir',

        // Projects Page
        'projects.title': 'Arquivo de Projetos',
        'projects.description': 'Uma coleção selecionada de trabalhos em gestão de produtos e estratégia, desde articulação com ONGs até soluções de IA empresarial.',
    },
} as const;
