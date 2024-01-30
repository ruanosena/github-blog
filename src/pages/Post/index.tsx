import { useParams } from "react-router-dom";
import { PostInfo } from "./PostInfo";
import { Content, Wrapper } from "./styles";
import { api } from "../../lib/axios";
import { IssueType } from "../Home";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

export function Post() {
	const [issue, setIssue] = useState<IssueType>();
	const { issueNumber } = useParams();

	async function fetchIssue() {
		const response = await api.get<IssueType>(
			`repos/${"rocketseat-education"}/${"reactjs-github-blog-challenge"}/issues/${issueNumber}`
		);
		setIssue(response.data);
	}

	useEffect(() => {
		fetchIssue();
	}, []);

	return (
		<Wrapper>
			{issue && <PostInfo issue={issue} />}
			<Content>
				<Markdown>{issue?.body}</Markdown>
			</Content>
		</Wrapper>
	);
}
