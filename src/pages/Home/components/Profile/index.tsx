import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	CardLink,
	ProfileCard,
	ProfileCardContent,
	ProfileCardFooter,
	ProfileCardHeader,
	ProfileImage,
	ProfileInfo,
	ProfileName,
} from "./styles";
import {
	faArrowUpRightFromSquare,
	faBuilding,
	faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function Profile() {
	return (
		<ProfileCard>
			<ProfileImage src="https://github.com/ruanosena.png" />
			<ProfileCardContent>
				<ProfileCardHeader>
					<ProfileName>Cameron Williamson</ProfileName>
					<CardLink href="">
						GitHub
						<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
					</CardLink>
				</ProfileCardHeader>
				<p>
					Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam
					dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
				</p>
				<ProfileCardFooter>
					<ProfileInfo>
						<FontAwesomeIcon icon={faGithub} />
						ruanosena
					</ProfileInfo>
					<ProfileInfo>
						<FontAwesomeIcon icon={faBuilding} />
						Rocketseat
					</ProfileInfo>
					<ProfileInfo>
						<FontAwesomeIcon icon={faUserGroup} />
						32 seguidores
					</ProfileInfo>
				</ProfileCardFooter>
			</ProfileCardContent>
		</ProfileCard>
	);
}
