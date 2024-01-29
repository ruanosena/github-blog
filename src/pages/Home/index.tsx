import { PostCard } from "./components/PostCard";
import { Profile } from "./components/Profile";
import { BlogContent, BlogHeader, BlogInput, BlogTitle, Wrapper } from "./styles";

export function Home() {
	return (
		<Wrapper>
			<Profile />

			<section>
				<BlogHeader>
					<BlogTitle>Publicações</BlogTitle>
					<span>6 publicações</span>
					<BlogInput type="text" placeholder="Buscar conteúdo" />
				</BlogHeader>
				<BlogContent>
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
				</BlogContent>
			</section>
		</Wrapper>
	);
}
