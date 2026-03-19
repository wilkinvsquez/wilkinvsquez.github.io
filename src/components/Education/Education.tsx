import "./Education.css";
import { GraduationCap, Award } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { education } from "../../data/education";

interface EducationItem {
	id: number;
	degree: string;
	institution: string;
	period: string;
	type: string;
	link?: string;
	items?: { name: string; link: string }[];
}

export const Education = () => {
	const { language, t } = useLanguage();

	const currentEducation = education[language] as EducationItem[];

	return (
		<section id='education' className='section education'>
			<div className='container'>
				<h2 className='section__title'>
					{t.sections.education.title}{" "}
					<span className='text-gradient'>
						{t.sections.education.subtitle}
					</span>
				</h2>
				<div className='education__grid'>
					{currentEducation.map(item => (
						<div key={item.id} className='education__card'>
							<div className='education__icon'>
								{item.type === "degree" ? (
									<GraduationCap size={32} />
								) : (
									<Award size={32} />
								)}
							</div>
							<h3 className='education__degree'>
								{item.link && item.link !== "#" ? (
									<a
										href={item.link}
										target='_blank'
										rel='noopener noreferrer'
										className='education__link'>
										{item.degree}
									</a>
								) : (
									item.degree
								)}
							</h3>
							<p className='education__institution'>
								{item.institution}
							</p>

							{item.items && (
								<ul className='education__list-items'>
									{item.items.map((subItem, index) => (
										<li
											key={index}
											className='education__list-item'>
											{subItem.link &&
											subItem.link !== "#" ? (
												<a
													href={subItem.link}
													target='_blank'
													rel='noopener noreferrer'>
													{subItem.name}
												</a>
											) : (
												<span className='education__item-text'>
													{subItem.name}
												</span>
											)}
										</li>
									))}
								</ul>
							)}

							{!item.items && (
								<span className='education__period'>
									{item.period}
								</span>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
