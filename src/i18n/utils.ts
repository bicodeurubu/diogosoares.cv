import { ui, defaultLang, type Lang } from './ui';

/**
 * Get translation function for a specific language
 */
export function useTranslations(lang: Lang) {
    return function t(key: keyof typeof ui[typeof defaultLang]): string {
        return ui[lang][key] || ui[defaultLang][key];
    };
}

/**
 * Get the preferred language from localStorage or browser settings
 * This runs client-side only
 */
export function getPreferredLang(): Lang {
    // Check localStorage first
    if (typeof localStorage !== 'undefined') {
        const stored = localStorage.getItem('lang');
        if (stored === 'pt-br' || stored === 'en') {
            return stored;
        }
    }

    // Check browser language
    if (typeof navigator !== 'undefined') {
        const browserLang = navigator.language.toLowerCase();
        if (browserLang.startsWith('pt')) {
            return 'pt-br';
        }
    }

    return defaultLang;
}

/**
 * Set the preferred language in localStorage
 */
export function setPreferredLang(lang: Lang): void {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('lang', lang);
    }
}

/**
 * Initialize language on page load
 * Returns the detected/stored language
 */
export function initLang(): Lang {
    const lang = getPreferredLang();
    // Update HTML lang attribute
    if (typeof document !== 'undefined') {
        document.documentElement.lang = lang === 'pt-br' ? 'pt-BR' : 'en';
    }
    return lang;
}
