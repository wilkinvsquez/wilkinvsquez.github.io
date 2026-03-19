import "./Experience.css";
import { Briefcase } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { experience } from "../../data/experience";

export const Experience = () => {
	const { language, t } = useLanguage();

	const currentExperience = experience[language];

	return (
		<section id='experience' className='section experience'>
			<div className='container'>
				<h2 className='section__title'>
					{t.sections.experience.title}{" "}
					<span className='text-gradient'>
						{t.sections.experience.subtitle}
					</span>
				</h2>
				<div className='experience__grid'>
					{currentExperience.map((item: any) => {
						return (
							<div key={item.id} className='experience__item'>
								<div className='experience__header'>
									<div className='experience__title-row'>
										<div className='experience__icon'>
											<Briefcase
												size={20}
												fill='var(--color-accent)'
											/>
										</div>
										<h3 className='experience__role'>
											{item.role}
										</h3>
									</div>
									<div className='experience__meta'>
										<span className='experience__company'>
											{item.company}
										</span>
										<span className='experience__divider'>
											|
										</span>
										<span className='experience__period'>
											{item.period}
										</span>
									</div>
								</div>

								<div className='experience__content'>
									<p className='experience__summary'>
										{item.summary}
									</p>

									{item.contributions.length > 0 && (
										<div className='experience__contributions'>
											<h4 className='experience__contributions-title'>
												{
													t.sections.experience
														.keyContributions
												}
											</h4>
											<ul className='experience__list'>
												{item.contributions.map(
													(
														desc: string,
														index: number,
													) => (
														<li
															key={index}
															className='experience__list-item'>
															{desc}
														</li>
													),
												)}
											</ul>
										</div>
									)}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
