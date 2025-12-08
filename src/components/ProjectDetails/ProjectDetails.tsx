import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { projects } from '../../data/projects';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import './ProjectDetails.css';

export const ProjectDetails = () => {
  const { id } = useParams();
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = projects[language].find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="project-details__error">
        <h2>Project not found</h2>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="project-details section">
      <div className="container">
        <button onClick={() => navigate(-1)} className="btn project-details__back">
          <ArrowLeft size={20} />
          {language === 'en' ? 'Back' : 'Volver'}
        </button>

        <div className="project-details__header">
          <h1 className="project-details__title">{project.title}</h1>
          <div className="project-details__tags">
            {project.tags.map(tag => (
              <span key={tag} className="project-details__tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="project-details__content">
          <div className="project-details__gallery">
            {project.images && project.images.map((img, index) => (
              <img key={index} src={img} alt={`${project.title} screenshot ${index + 1}`} className="project-details__image" />
            ))}
          </div>

          <div className="project-details__info">
            <h2 className="project-details__subtitle">{language === 'en' ? 'About the project' : 'Sobre el proyecto'}</h2>
            <p className="project-details__description">{project.longDescription}</p>

            <div className="project-details__actions">
              {project.repoLink && (
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <Github size={20} />
                  GitHub
                </a>
              )}
              {project.liveLink && project.liveLink !== '#' && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <ExternalLink size={20} />
                  {language === 'en' ? 'Live Demo' : 'Ver Demo'}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
