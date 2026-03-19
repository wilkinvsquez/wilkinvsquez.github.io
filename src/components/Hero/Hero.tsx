import "./Hero.css";
import { Download } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export const Hero = () => {
	const { t } = useLanguage();

	return (
		<section className='hero section'>
			<div className='container hero__container'>
				<h1 className='hero__title'>
					{t.hero.greeting}{" "}
					<span className='text-gradient'>Wilkin Vásquez</span> <br />
					{t.hero.role}
				</h1>
				<p className='hero__description'>{t.hero.description}</p>
				<div className='hero__actions'>
					<a
						href='/assets/docs/WilkinVasquez_Resume.pdf'
						download='WilkinVasquez_Resume.pdf'
						target='_blank'
						rel='noopener noreferrer'
						className='btn btn-primary'>
						<Download size={20} style={{ marginRight: "0.5rem" }} />{" "}
						{t.common.downloadCv}
					</a>
					<a
						href='#contact'
						className='btn'
						style={{ border: "1px solid var(--color-border)" }}>
						{t.common.contactMe}
					</a>
				</div>
			</div>
		</section>
	);
};
