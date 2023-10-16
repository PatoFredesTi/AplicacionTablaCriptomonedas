import React from 'react';
import { useTranslation } from 'react-i18next';
import spanishFlag from '../assets/images/flags/es.png';
import englishFlag from '../assets/images/flags/en.png';
import frenchFlag from '../assets/images/flags/fr.png';
import germanFlag from '../assets/images/flags/gr.png';
import japaneseFlag from '../assets/images/flags/jp.png';

function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    }

    return (
        <div className="flex space-x-3">
            <img src={spanishFlag} alt="Español" className="w-6 h-6 cursor-pointer hover:w-7 hover:h-7" onClick={() => changeLanguage('es')} />
            <img src={englishFlag} alt="English" className="w-6 h-6 cursor-pointer hover:w-7 hover:h-7" onClick={() => changeLanguage('en')} />
            <img src={frenchFlag} alt="Frances" className="w-6 h-6 cursor-pointer hover:w-7 hover:h-7" onClick={() => changeLanguage('fr')} />
            <img src={germanFlag} alt="Aleman" className="w-6 h-6 cursor-pointer hover:w-7 hover:h-7" onClick={() => changeLanguage('gr')} />
            <img src={japaneseFlag} alt="Japonés" className="w-6 h-6 cursor-pointer hover:w-7 hover:h-7" onClick={() => changeLanguage('jp')} />
        </div>
    );
}

export default LanguageSwitcher;