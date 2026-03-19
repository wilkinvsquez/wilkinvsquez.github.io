import "./skills.css";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { skills } from "../../data/skills";

export const Skills = () => {
	const { language, t } = useLanguage();

	const currentSkills = skills[language];

	return (
		<section id='skills' className='section skills'>
			<div className='container'>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='section__title'>
					{t.sections.skills.title}{" "}
					<span className='text-gradient'>
						{t.sections.skills.subtitle}
					</span>
				</motion.h2>

				<div className='skills__grid'>
					{currentSkills.map((category, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className='skills__card'>
							<div className='skills__header'>
								<div className='skills__icon-wrapper'>
									{category.icon}
								</div>
								<h3 className='skills__category'>
									{category.category}
								</h3>
							</div>
							<ul className='skills__list'>
								{category.skills.map((skill, idx) => (
									<li key={idx} className='skills__item'>
										<span className='skills__dot'></span>
										{skill}
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};
