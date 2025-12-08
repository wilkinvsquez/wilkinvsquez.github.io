import './contact.css';
import { Mail, MapPin, Phone, Linkedin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Contact = () => {
  const {t} = useLanguage();
  return (
    <section id="contact" className="section contact">
      <div className="container contact__container">
        <h2 className="section__title">{t.contact.title}</h2>
        <p className="contact__description">
          {t.contact.description}
        </p>
        
        <div className="contact__info">
          <div className="contact__item">
            <MapPin className="contact__icon" />
            <span>Alajuela, Costa Rica</span>
          </div>
          <div className="contact__item">
            <Phone className="contact__icon" />
            <span>+506 85203542</span>
          </div>
          <div className="contact__item">
            <Mail className="contact__icon" />
            <a href="mailto:wilkinvsquez@gmail.com">wilkinvsquez@gmail.com</a>
          </div>
        </div>

        <div className="contact__actions">
          <a href="mailto:wilkinvsquez@gmail.com" className="btn btn-primary">
            {t.contact.sendEmail}
          </a>
          <a href="https://www.linkedin.com/in/wilkinvsquez/" target="_blank" rel="noopener noreferrer" className="btn" style={{border: '1px solid var(--color-border)'}}>
            <Linkedin size={20} style={{marginRight: '0.5rem'}}/> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};