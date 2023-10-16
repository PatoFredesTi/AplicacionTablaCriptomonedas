import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

const resources = {
    en: {
        translation: {
            "Nombre": "Name",
            "Precio": "Price",
            "Cambio 24H": "Change 24H",
            "Cambiar Tema": "Change Theme"
        }
    },
    es: {
        translation: {
            "Nombre": "Nombre",
            "Precio": "Precio",
            "Cambio 24H": "Cambio 24H",
            "Cambiar Tema": "Cambiar Tema"
        }
    },
    fr: {
        translation: {
            "Nombre": "Nom",
            "Precio": "Prix",
            "Cambio 24H": "Changer 24 heures",
            "Cambiar Tema": "Change le thème"
        }
    },
    gr: {
        translation: {
            "Nombre": "der Name",
            "Precio": "der Preis",
            "Cambio 24H": "24-Stunden-Wechsel",
            "Cambiar Tema": "Thema ändern"
        }
    },
    jp: {
        translation: {
            "Nombre": "名前",
            "Precio": "価格",
            "Cambio 24H": "24時間変更",
            "Cambiar Tema": "トピックを変更",
            "Bitcoin": "ビットコイン"
        }
    }
};

i18n 
    .use(initReactI18next)
    .init({
        resources,
        lng: "es",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;