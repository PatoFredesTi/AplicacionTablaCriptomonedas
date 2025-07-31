import React from 'react';
import { useTranslation } from 'react-i18next';
import spanishFlag from '../assets/images/flags/es.png';
import englishFlag from '../assets/images/flags/en.png';

function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    }

    return (
        <div className="flex space-x-3">
            <img src={spanishFlag} alt="Español" className="w-6 h-6 cursor-pointer hover:w-7 hover:h-7" onClick={() => changeLanguage('es')} />
            <img src={englishFlag} alt="English" className="w-6 h-6 cursor-pointer hover:w-7 hover:h-7" onClick={() => changeLanguage('en')} />
        </div>
    );
}

export default LanguageSwitcher;