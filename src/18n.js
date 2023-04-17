import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next} from 'react-i18next';
import translationEN from './lng/translationEN.json'
import translationAZE from './lng/translationAZE.json'
import translationRU from './lng/translationRU.json'

const resources={
    en:{
        translation:translationEN,
    },
    aze:{
        translation:translationAZE,
    },
    ru:{
        translation:translationRU,
    },
}

i18n.use(Backend).use(LanguageDetector).use(initReactI18next)
.init({
    resources,
    falbackLng:'en',
    debug:true,
    detection:{
        order:['queryString','cookie'],
        cache:['cookie']
    },
    interpolation:{
        escapeValue:false
    },
    
})

export default i18n