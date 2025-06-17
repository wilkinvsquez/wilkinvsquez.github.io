import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/styles/components/about.scss";
const About = () => {
	useEffect(() => {
		AOS.init({ duration: 800, once: true });
	}, []);
	return (
		<section id='about' className='section about' data-aos='fade-up'>
			<h2>Sobre mí</h2>
			<p>Hola, soy un desarrollador apasionado por la tecnología...</p>
		</section>
	);
};

export default About;
