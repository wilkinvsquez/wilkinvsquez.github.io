import "./styles/global.css";
import "./styles/variables.css";
import "./styles/reset.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home";
import { ProjectDetails } from "./components/ProjectDetails/ProjectDetails";
import { MouseSpotlight } from "./components/MouseSpotlight/MouseSpotlight";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";

function App() {
	return (
		<Router>
			<div className='fixed-background' />
			<MouseSpotlight />
			<ScrollToTop />
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/project/:id' element={<ProjectDetails />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
