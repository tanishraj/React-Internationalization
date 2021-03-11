import i18n from 'i18next'
import moment from "moment";
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'

import { TRANSLATIONS_ES } from "./es/translations";
import { TRANSLATIONS_ARAB } from "./arab/translations";
import { TRANSLATIONS_ZH } from './zh/translations'
import { TRANSLATIONS_EN } from './en/translations'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        interpolation: {
            format: function (value, format, lng) {
                if (value instanceof Date) return moment(value).format(format);
                if (typeof value === "number") return new Intl.NumberFormat().format(value);
                return value;
            }
        },
        resources: {
            es: { translation: TRANSLATIONS_ES },
            arab: { translation: TRANSLATIONS_ARAB },
            en: { translations: TRANSLATIONS_EN },
            zh: { translations: TRANSLATIONS_ZH }
        }
    })

i18n.changeLanguage("zh")