import './projects.css';
import { useLanguage } from '../../context/LanguageContext';
import { projects } from '../../data/projects';
import { Link } from 'react-router-dom';

export const Projects = () => {
  const { language, t } = useLanguage();
  
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section__title">{t.projects.title} <span className="text-gradient">{t.projects.subtitle}</span></h2>
        <div className="projects__grid">
          {projects[language].map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>
                <div className="project-card__tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-card__tag">{tag}</span>
                  ))}
                </div>
                <Link to={`/project/${project.id}`} className="btn btn-primary project-card__link">
                  {t.projects.viewDetails}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};