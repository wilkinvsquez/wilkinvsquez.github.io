import "./about.css";
import { useLanguage } from "../../context/LanguageContext";

export const About = () => {
	const { t } = useLanguage();
	return (
		<section id='about' className='section about'>
			<div className='container about__container'>
				<div className='about__content'>
					<h2
						className='section__title'
						style={{ textAlign: "left" }}>
						{t.about.title}
					</h2>
					{t.about.paragraphs.map((paragraph, index) => (
						<p key={index} className='about__text'>
							{paragraph}
						</p>
					))}
					<div className='about__stats'>
						<div className='stat'>
							<span className='stat__number'>4+</span>
							<span className='stat__label'>
								{t.about.stats.experience}
							</span>
						</div>
						<div className='stat'>
							<span className='stat__number'>5+</span>
							<span className='stat__label'>
								{t.about.stats.frameworks}
							</span>
						</div>
						<div className='stat'>
							<span className='stat__number'>B2+</span>
							<span className='stat__label'>
								{t.about.stats.english}
							</span>
						</div>
					</div>
				</div>
				<div className='about__image' style={{ textAlign: "right" }}>
					<div className='about__placeholder'>
						<img
							src={"./assets/images/profile.png"}
							alt='Personal Profile'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
