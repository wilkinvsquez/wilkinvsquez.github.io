import './Experience.css';
import { Briefcase, Calendar } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { experience } from '../../data/experience';

export const Experience = () => {
  const { language, t } = useLanguage();
  
  const currentExperience = experience[language];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section__title">{t.experience.title} <span className="text-gradient">{t.experience.subtitle}</span></h2>
        <div className="timeline">
          {currentExperience.map((item) => (
            <div key={item.id} className="timeline__item">
              <div className="timeline__marker">
                <div className="timeline__icon">
                  <Briefcase size={20} />
                </div>
                <div className="timeline__line"></div>
              </div>
              <div className="timeline__content">
                <div className="timeline__header">
                  <h3 className="timeline__role">{item.role}</h3>
                  <span className="timeline__company">{item.company}</span>
                  <div className="timeline__period">
                    <Calendar size={16} />
                    <span>{item.period}</span>
                  </div>
                </div>
                <ul className="timeline__description">
                  {item.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};