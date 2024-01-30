import { NavLink } from "react-router-dom";
import { Card, CardBody, CardHeader, CardTitle } from "./styles";
import { IssueType } from "../..";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

interface PostCardProps {
	issue: IssueType;
}

export function PostCard({ issue }: PostCardProps) {
	const dateRelativeToNow = formatDistanceToNow(issue.created_at, {
		locale: ptBR,
		addSuffix: true,
	});

	return (
		<Card>
			<CardHeader>
				<NavLink to={`/${issue.id}`} style={{ textDecoration: "none", flex: 1 }}>
					<CardTitle>{issue.title}</CardTitle>
				</NavLink>
				<span>{dateRelativeToNow}</span>
			</CardHeader>
			<CardBody>
				<p>{issue.body}</p>
			</CardBody>
		</Card>
	);
}
