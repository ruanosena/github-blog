import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { PostCard } from "./components/PostCard";
import { Profile } from "./components/Profile";
import { BlogContent, BlogHeader, BlogInput, BlogTitle, Wrapper } from "./styles";
import { api } from "../../lib/axios";

export interface IssueType {
	id: number;
	title: string;
	user: { login: string; avatar_url: string };
	created_at: string;
	body: string;
}

interface IssuesReponseType {
	items: IssueType[];
}

export function Home() {
	const [issues, setIssues] = useState<IssueType[]>();
	const [issueText, setIssueText] = useState("");

	async function handleFetchPost(event: FormEvent) {
		event.preventDefault();
		const q = `${issueText}%20repo:${"rocketseat-education"}/${"reactjs-github-blog-challenge"}`;

		const response = await api.get<IssuesReponseType>("search/issues", { params: { q } });

		setIssues(response.data.items);
	}

	function handleIssueChange(event: ChangeEvent<HTMLInputElement>) {
		event.target.setCustomValidity("");
		setIssueText(event.target.value);
	}

	function handleIssueInvalid(event: InvalidEvent<HTMLInputElement>) {
		event.target.setCustomValidity("Esse campo é obrigatório!");
	}

	return (
		<Wrapper>
			<Profile />

			<section>
				<BlogHeader>
					<BlogTitle>Publicações</BlogTitle>
					<span>6 publicações</span>
					<form action="" onSubmit={handleFetchPost} style={{ width: "100%" }}>
						<BlogInput
							type="text"
							placeholder="Buscar conteúdo"
							onChange={handleIssueChange}
							onInvalid={handleIssueInvalid}
							required
						/>
					</form>
				</BlogHeader>
				<BlogContent>
					{issues?.map((issue) => (
						<PostCard key={issue.id} issue={issue} />
					))}
				</BlogContent>
			</section>
		</Wrapper>
	);
}
