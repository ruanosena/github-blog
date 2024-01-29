import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	CardLink,
	Info,
	InfoCard,
	InfoCardContent,
	InfoCardFooter,
	InfoCardHeader,
	InfoTitle,
} from "./styles";
import {
	faArrowUpRightFromSquare,
	faCalendarDay,
	faChevronLeft,
	faComment,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function PostInfo() {
	return (
		<InfoCard>
			<InfoCardContent>
				<InfoCardHeader>
					<CardLink href="/">
						<FontAwesomeIcon icon={faChevronLeft} />
						Voltar
					</CardLink>
					<CardLink href="">
						Ver no GitHub
						<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
					</CardLink>
				</InfoCardHeader>
				<InfoTitle>JavaScript data types and data structures</InfoTitle>
				<InfoCardFooter>
					<Info>
						<FontAwesomeIcon icon={faGithub} />
						ruanosena
					</Info>
					<Info>
						<FontAwesomeIcon icon={faCalendarDay} />
						Há 1 dia
					</Info>
					<Info>
						<FontAwesomeIcon icon={faComment} />5 comentários
					</Info>
				</InfoCardFooter>
			</InfoCardContent>
		</InfoCard>
	);
}
