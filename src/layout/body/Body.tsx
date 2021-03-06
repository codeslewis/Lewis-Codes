import { BrowserRouter, Route, Switch } from "react-router-dom";
import Projects from "../../components/projects/Projects";
import Certifications from "../../components/certifications/Certifications";
import Skills from "../../components/skills/Skills";
import About from "../../components/about/About";


function Body() {
	return (
		<>
				<BrowserRouter>
					<Switch>
						<Route path="/projects">
							<Projects />
						</Route>
						<Route path="/certifications">
							<Certifications />
						</Route>
						<Route path="/skills">
							<Skills />
						</Route>
						<Route path="/">
							<About />
						</Route>
					</Switch>
				</BrowserRouter>
		</>
	);
}

export default Body;
