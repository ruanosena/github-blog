import { HeaderContainer, HeaderContent } from "./styles";

import LogoImg from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";

export function Header() {
	return (
		<HeaderContainer>
			<HeaderContent>
				<NavLink to="/">
					<img src={LogoImg} alt="" />
				</NavLink>
			</HeaderContent>
		</HeaderContainer>
	);
}
