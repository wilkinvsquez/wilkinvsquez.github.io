import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/global.css";
import App from "./App.tsx";

import { LanguageProvider } from "./context/LanguageContext";

createRoot(document.getElementById("root") as HTMLElement).render(
	<StrictMode>
		<LanguageProvider>
			<App />
		</LanguageProvider>
	</StrictMode>,
);
