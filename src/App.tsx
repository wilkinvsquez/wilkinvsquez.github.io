import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";

function App() {
	return (
		<>
			<Navbar />
			<div className='app'>
				{/* Reemplaza esto con tus secciones reales */}
				<Experience />
				<Projects />
				<About />
				<Contact />
			</div>
		</>
	);
}

export default App;
