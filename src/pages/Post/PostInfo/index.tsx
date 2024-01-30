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
import { IssueType } from "../../Home";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

interface PostInfoProps {
	issue: IssueType;
}

export function PostInfo({ issue }: PostInfoProps) {
	const dateRelativeToNow = formatDistanceToNow(issue.created_at, {
		locale: ptBR,
		addSuffix: true,
	});
	return (
		<InfoCard>
			<InfoCardContent>
				<InfoCardHeader>
					<CardLink href="/">
						<FontAwesomeIcon icon={faChevronLeft} />
						Voltar
					</CardLink>
					<CardLink href={issue.html_url}>
						Ver no GitHub
						<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
					</CardLink>
				</InfoCardHeader>
				<InfoTitle>{issue.title}</InfoTitle>
				<InfoCardFooter>
					<Info>
						<FontAwesomeIcon icon={faGithub} />
						{issue.user.login}
					</Info>
					<Info>
						<FontAwesomeIcon icon={faCalendarDay} />
						{dateRelativeToNow}
					</Info>
					<Info>
						<FontAwesomeIcon icon={faComment} />
						{issue.comments == 1 ? `${issue.comments} comentário` : `${issue.comments} comentários`}
					</Info>
				</InfoCardFooter>
			</InfoCardContent>
		</InfoCard>
	);
}
