import { createContext, useState, useEffect, type ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextProps {
	theme: Theme;
	toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
	theme: "light",
	toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState<Theme>("light");

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme") as Theme | null;
		if (savedTheme) {
			setTheme(savedTheme);
			document.body.className = savedTheme + "-theme";
		} else {
			const prefersDark = window.matchMedia(
				"(prefers-color-scheme: dark)",
			).matches;
			const initialTheme = prefersDark ? "dark" : "light";
			setTheme(initialTheme);
			document.body.className = initialTheme + "-theme";
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("theme", theme);
		document.body.className = theme + "-theme";
	}, [theme]);

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
