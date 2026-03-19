import "./Footer.css";
import { useLanguage } from "../../context/LanguageContext";

export const Footer = () => {
	const { t } = useLanguage();
	return (
		<footer className='footer'>
			<div className='container footer__container'>
				<p className='footer__text'>
					© {new Date().getFullYear()} Wilkin Vasquez.{" "}
					{t.common.allRightsReserved}
				</p>
				<div className='footer__socials'>
					<a
						href='https://github.com/wilkinvsquez'
						target='_blank'
						rel='noopener noreferrer'
						className='footer__link'>
						GitHub
					</a>
					<a
						href='https://linkedin.com/in/wilkinvsquez'
						target='_blank'
						rel='noopener noreferrer'
						className='footer__link'>
						LinkedIn
					</a>
					{/* Agrega más redes si quieres */}
				</div>
			</div>
		</footer>
	);
};
