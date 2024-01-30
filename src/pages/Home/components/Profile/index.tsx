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
import { useEffect, useState } from "react";
import { api } from "../../../../lib/axios";

interface ProfileType {
	id: number;
	avatar_url: string;
	company: string | null;
	followers: number;
	name: string | null;
	login: string;
	html_url: string;
	bio: string | null;
}

export function Profile() {
	const [profile, setProfile] = useState<ProfileType>();

	async function fetchProfileData() {
		const response = await api.get("users/ruanosena");

		setProfile(response.data);
	}

	useEffect(() => {
		fetchProfileData();
	}, []);

	return (
		<ProfileCard>
			<ProfileImage src="https://github.com/ruanosena.png" />
			<ProfileCardContent>
				<ProfileCardHeader>
					<ProfileName>{profile?.name || profile?.login}</ProfileName>
					<CardLink href={profile?.html_url}>
						GitHub
						<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
					</CardLink>
				</ProfileCardHeader>
				<p>{profile?.bio}</p>
				<ProfileCardFooter>
					<ProfileInfo>
						<FontAwesomeIcon icon={faGithub} />
						{profile?.login}
					</ProfileInfo>
					{profile?.company && (
						<ProfileInfo>
							<FontAwesomeIcon icon={faBuilding} />
							{profile.company}
						</ProfileInfo>
					)}
					<ProfileInfo>
						<FontAwesomeIcon icon={faUserGroup} />
						{profile?.followers == 1
							? `${profile?.followers} seguidor`
							: `${profile?.followers} seguidores`}
					</ProfileInfo>
				</ProfileCardFooter>
			</ProfileCardContent>
		</ProfileCard>
	);
}
