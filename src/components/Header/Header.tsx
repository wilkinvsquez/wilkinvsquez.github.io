import { useState } from 'react';
import './header.css';
import { useLanguage } from '../../context/LanguageContext';
import { Languages, Menu, X } from 'lucide-react';

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container header__container">
        <a href="#" className="header__logo">
          <img src="/WilkinVasquezLogo.svg" alt="Logo" className="header__logo-img" />
          Wilkin<span className="text-gradient">Vsquez</span>
        </a>
        
        <button className="header__toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__list">
            <li><a href="#about" className="header__link" onClick={closeMenu}>{t.header.about}</a></li>
            <li><a href="#projects" className="header__link" onClick={closeMenu}>{t.header.projects}</a></li>
            <li><a href="#skills" className="header__link" onClick={closeMenu}>{t.header.skills}</a></li>
            <li><a href="#experience" className="header__link" onClick={closeMenu}>{t.header.experience}</a></li>
            <li><a href="#education" className="header__link" onClick={closeMenu}>{t.header.education}</a></li>
            <li><a href="#contact" className="header__link" onClick={closeMenu}>{t.header.contact}</a></li>
            <li>
              <button 
                onClick={() => { toggleLanguage(); closeMenu(); }}
                className="header__lang-btn"
                aria-label="Toggle Language"
              >
                <Languages size={18} />
                <span>{language.toUpperCase()}</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
