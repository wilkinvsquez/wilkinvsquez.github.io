import './About.css';
import { useLanguage } from '../../context/LanguageContext';

export const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="section about">
      <div className="container about__container">
        <div className="about__content">
          <h2 className="section__title" style={{textAlign: 'left'}}>{t.about.title}</h2>
          <p className="about__text">
            {t.about.description1}
          </p>
          <p className="about__text">
            {t.about.description2}
          </p>
          <div className="about__stats">
            <div className="stat">
              <span className="stat__number">4+</span>
              <span className="stat__label">{t.about.yearsExp}</span>
            </div>
            <div className="stat">
              <span className="stat__number">5+</span>
              <span className="stat__label">{t.about.frameworks}</span>
            </div>
            <div className="stat">
              <span className="stat__number">B2+</span>
              <span className="stat__label">{t.about.englishLevel}</span>
            </div>
          </div>
        </div>
        <div className="about__image" style={{textAlign: 'right'}}>
          <div className="about__placeholder">
            <img src={"./assets/images/profile.png"} alt="Personal Profile" />
          </div>
        </div>
      </div>
    </section>
  );
};
