import ThemeToggle from "../components/ThemeToggle";
import { Link } from "react-scroll";
//import LanguageSwitcher from "./LanguageSwitcher";
import "../assets/styles/components/navbar.scss"; // estilos SCSS

const Navbar = () => {
	return (
		<header className='navbar'>
			<div className='navbar__left'>
				<Link
					to='hero'
					smooth={true}
					duration={500}
					className='navbar__logo'>
					MiPortafolio
				</Link>
			</div>
			<nav className='navbar__nav'>
				<Link
					className='navbar__link'
					to='experience'
					smooth={true}
					duration={500}
					offset={-60}>
					Experiencia
				</Link>
				<Link
					className='navbar__link'
					to='projects'
					smooth={true}
					duration={500}
					offset={-60}>
					Proyectos
				</Link>
				<Link
					className='navbar__link'
					to='about'
					smooth={true}
					duration={500}
					offset={-60}>
					Sobre mí
				</Link>
				<Link
					className='navbar__link'
					to='contact'
					smooth={true}
					duration={500}
					offset={-60}>
					Contacto
				</Link>
			</nav>
			<div className='navbar__actions'>
				{/*<LanguageSwitcher />*/}
				<ThemeToggle />
			</div>
		</header>
	);
};

export default Navbar;
