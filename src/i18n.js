import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'

i18n.on('changeLang', function(lang){

    let fllbck = i18n.options.fallbackLng ;

    if(lang === fllbck[0]){
        if(window.location.pathname.includes('/' + fllbck[0])){
            const url = window.location.pathname.replace('/', fllbck[0]);
            window.location.replace(url);
        }
    }
});

const resources = {
    en: {
        translation: {
            'search' : 'search',
            'lang' : 'English'
        }
    },
    
    th: {
        translation: {
            'search' : 'ค้นหา',
            'lang' : 'ไทย'
        }
    },

    vn: {
        translation: {
            'search' : 'Tìm kiếm',
            'lang' : 'Tiếng Việtไทย'
        }
    },

    ch: {
        translation: {
            'search' : '搜索',
            'lang' : '中国'
        }
    }

}


i18n.use(initReactI18next).use(LanguageDetector)
.init(
    {
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false
        },
        whitelist: ['vn', 'ch', 'th'],
        fallbackLng: ['/']
    }
  );

  export default i18n;