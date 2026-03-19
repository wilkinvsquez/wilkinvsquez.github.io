export interface ExperienceItem {
	id: number;
	role: string;
	company: string;
	period: string;
	summary: string;
	contributions: string[];
}

export const experience: Record<"en" | "es", ExperienceItem[]> = {
	en: [
		{
			id: 1,
			role: "Software Engineer",
			company: "CENTAURO SOLUTIONS",
			period: "Feb 2023 - Present",
			summary:
				"Designing and building internal platforms and scalable frontend systems to support dynamic application behavior across multiple products.",
			contributions: [
				"Led the development of internal platforms enabling dynamic feature control and UI configuration across applications.",
				"Designed configuration-driven systems to support flexible and scalable application behavior.",
				"Contributed to frontend architecture and state management strategies improving scalability and maintainability.",
				"Drove a large-scale migration of a cross-platform application, improving performance and modularity.",
			],
		},
		{
			id: 2,
			role: "Frontend Engineer",
			company: "CLICKLEASE LIMITADA",
			period: "Jul 2021 – Jan 2023",
			summary:
				"Worked on customer-facing financial platforms and integration solutions to enable leasing services across multiple partner ecosystems.",
			contributions: [
				"Led the development of embedded financing solutions across partner platforms, enabling seamless user applications.",
				"Delivered scalable integration solutions across diverse client environments, expanding service reach.",
				"Contributed to the development of a customer application platform handling sensitive financial data.",
				"Collaborated with cross-functional teams to deliver user-focused features aligned with business goals.",
			],
		},
		{
			id: 3,
			role: "Data Entry",
			company: "AVANTICA TECHNOLOGIES",
			period: "Oct 2019 – Jan 2021",
			summary:
				"Supported data extraction and processing tasks across internal platforms.",
			contributions: [],
		},
	],
	es: [
		{
			id: 1,
			role: "Ingeniero de Software",
			company: "CENTAURO SOLUTIONS",
			period: "Feb 2023 - Presente",
			summary:
				"Diseño y desarrollo de plataformas internas y sistemas frontend escalables que permiten comportamiento dinámico en múltiples aplicaciones.",
			contributions: [
				"Lideré el desarrollo de plataformas internas que permiten el control dinámico de funcionalidades y configuración de interfaces.",
				"Diseñé sistemas basados en configuración que habilitan comportamiento flexible y escalable en las aplicaciones.",
				"Contribuí a decisiones de arquitectura frontend y estrategias de manejo de estado mejorando la escalabilidad y mantenibilidad.",
				"Participé en la migración a gran escala de una aplicación cross-platform, mejorando rendimiento y modularidad.",
			],
		},
		{
			id: 2,
			role: "Ingeniero Frontend",
			company: "CLICKLEASE LIMITADA",
			period: "Jul 2021 – Ene 2023",
			summary:
				"Participé en el desarrollo de plataformas financieras orientadas al cliente y soluciones de integración para habilitar servicios de leasing en múltiples ecosistemas de partners.",
			contributions: [
				"Lideré el desarrollo de soluciones de financiamiento embebidas en plataformas de partners, permitiendo a los usuarios aplicar directamente desde páginas de producto.",
				"Implementé soluciones de integración escalables en distintos entornos de clientes, ampliando el alcance del servicio.",
				"Contribuí al desarrollo de una plataforma de aplicación de clientes manejando información financiera sensible de forma segura y confiable.",
				"Colaboré con equipos multidisciplinarios para entregar funcionalidades alineadas con objetivos de negocio y experiencia de usuario.",
			],
		},
		{
			id: 3,
			role: "Data Entry",
			company: "AVANTICA TECHNOLOGIES",
			period: "Oct 2019 – Ene 2021",
			summary:
				"Soporte en procesos de extracción, organización y gestión de datos en plataformas internas.",
			contributions: [],
		},
	],
};
