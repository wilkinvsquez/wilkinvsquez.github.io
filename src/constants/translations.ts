export interface TranslationSchema {
	nav: {
		about: string;
		projects: string;
		skills: string;
		education: string;
		experience: string;
		contact: string;
	};
	common: {
		viewDetails: string;
		contactMe: string;
		downloadCv: string;
		sendEmail: string;
		allRightsReserved: string;
		back: string;
		aboutProject: string;
		liveDemo: string;
	};
	hero: {
		greeting: string;
		role: string;
		description: string;
	};
	about: {
		title: string;
		paragraphs: string[];
		stats: {
			experience: string;
			frameworks: string;
			english: string;
		};
	};
	sections: {
		skills: { title: string; subtitle: string };
		experience: {
			title: string;
			subtitle: string;
			keyContributions: string;
		};
		education: { title: string; subtitle: string };
		projects: { title: string; subtitle: string };
		contact: { title: string; subtitle: string };
	};
}

export const translations: Record<"en" | "es", TranslationSchema> = {
	en: {
		nav: {
			about: "About Me",
			projects: "Projects",
			skills: "Skills",
			education: "Education",
			experience: "Experience",
			contact: "Contact",
		},
		common: {
			viewDetails: "View Details",
			contactMe: "Contact Me",
			downloadCv: "Download CV",
			sendEmail: "Send Email",
			allRightsReserved: "All rights reserved.",
			back: "Back",
			aboutProject: "About the project",
			liveDemo: "Live Demo",
		},
		hero: {
			greeting: "Hi, I'm",
			role: "Software Engineer focused on Frontend Architecture & Platform Systems",
			description:
				"I design and build scalable web applications and internal platforms using Vue.js, Angular, and TypeScript. Specialized in modular systems, feature management, and configuration-driven UI to enable faster product iteration.",
		},
		about: {
			title: "About Me",
			paragraphs: [
				"Software Engineer with experience designing scalable frontend architectures and internal platforms in agile environments.",
				"I specialize in modular systems, state management strategies, and configuration-driven applications that enable dynamic behavior without requiring redeployment.",
				"I’ve worked on large-scale migrations and built feature management and UI rendering systems that improve development speed, maintainability, and product flexibility.",
			],
			stats: {
				experience: "Years Exp.",
				frameworks: "Frameworks",
				english: "English Level",
			},
		},
		sections: {
			skills: { title: "My", subtitle: "Skills" },
			experience: {
				title: "Professional",
				subtitle: "Experience",
				keyContributions: "Key Contributions:",
			},
			education: { title: "Education &", subtitle: "Certifications" },
			projects: { title: "Featured", subtitle: "Projects" },
			contact: { title: "Get in", subtitle: "Touch" },
		},
	},
	es: {
		nav: {
			about: "Sobre mí",
			projects: "Proyectos",
			skills: "Habilidades",
			education: "Educación",
			experience: "Experiencia",
			contact: "Contacto",
		},
		common: {
			viewDetails: "Ver Detalles",
			contactMe: "Contáctame",
			downloadCv: "Descargar CV",
			sendEmail: "Enviar Correo",
			allRightsReserved: "Todos los derechos reservados.",
			back: "Volver",
			aboutProject: "Sobre el proyecto",
			liveDemo: "Ver Demo",
		},
		hero: {
			greeting: "Hola, soy",
			role: "Ingeniero de Software enfocado en Arquitectura Frontend y Sistemas de Plataforma",
			description:
				"Diseño y construyo aplicaciones web escalables y plataformas internas utilizando Vue.js, Angular y TypeScript. Especializado en sistemas modulares, gestión de funcionalidades y UI basada en configuración para acelerar la evolución de productos.",
		},
		about: {
			title: "Sobre mí",
			paragraphs: [
				"Ingeniero de Software con experiencia diseñando arquitecturas frontend escalables y plataformas internas en entornos ágiles.",
				"Me especializo en sistemas modulares, estrategias de gestión de estado y aplicaciones basadas en configuración que permiten comportamientos dinámicos sin necesidad de redeployments.",
				"He trabajado en migraciones a gran escala y en el desarrollo de sistemas de gestión de funcionalidades y renderizado dinámico de interfaces que mejoran la velocidad de desarrollo, mantenibilidad y flexibilidad del producto.",
			],
			stats: {
				experience: "Años Exp.",
				frameworks: "Frameworks",
				english: "Nivel de Inglés",
			},
		},
		sections: {
			skills: { title: "Mis", subtitle: "Habilidades" },
			experience: {
				title: "Experiencia",
				subtitle: "Profesional",
				keyContributions: "Contribuciones Clave:",
			},
			education: { title: "Educación y", subtitle: "Certificaciones" },
			projects: { title: "Proyectos", subtitle: "Destacados" },
			contact: { title: "Ponte en", subtitle: "Contacto" },
		},
	},
};
