import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function App() {
	return (
		<>
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyles />
				<>
					<h1>Olá mundo!</h1>
					<div>
						<FontAwesomeIcon icon={faGithub} size="2x" />
					</div>
				</>
			</ThemeProvider>
		</>
	);
}
