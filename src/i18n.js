import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            "gen": "Generation",
            "select_gen": "Select a generation",
            "select_type": "Select a type",
            "order_num_croissant": "Ascending number",
            "order_num_decroissant": "Decreasing number",
            "order_alpha_croissant": "Alphabetical Ascending",
            "order_alpha_decroissant": "Alphabetical Descending",
            "order_poids_croissant": "Ascending weight",
            "order_poids_decroissant": "Decreasing weight",
            "order_taille_croissant": "Size Ascending",
            "order_taille_decroissant": "Size Descending",
            "search_placeholder": "Type to search",
            "language_fr": "French",
            "language_en": "English"
        }
    },
    fr: {
        translation: {
            "gen": "Génération",
            "select_gen": "Sélectionner une génération",
            "select_type": "Sélectionner un type",
            "order_num_croissant": "Numéro Croissant",
            "order_num_decroissant": "Numéro Décroissant",
            "order_alpha_croissant": "Alphabétique Croissant",
            "order_alpha_decroissant": "Alphabétique Décroissant",
            "order_poids_croissant": "Poids Croissant",
            "order_poids_decroissant": "Poids Décroissant",
            "order_taille_croissant": "Taille Croissant",
            "order_taille_decroissant": "Taille Décroissant",
            "search_placeholder": "Tapez pour rechercher",
            "language_fr": "Français",
            "language_en": "Anglais"
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "fr", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;