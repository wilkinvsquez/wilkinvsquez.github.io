// src/components/ThemeToggle.tsx
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<button onClick={toggleTheme} aria-label='Toggle theme'>
			{theme === "light" ? "🌞 Light" : "🌙 Dark"}
		</button>
	);
};

export default ThemeToggle;
