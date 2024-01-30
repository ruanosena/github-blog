import styled from "styled-components";

export const Wrapper = styled.main`
	width: 100%;
	max-width: 864px;
	margin: 0 auto;
`;

export const BlogHeader = styled.header`
	display: flex;
	flex-flow: row wrap;
	gap: 0.75rem;
	margin-top: 4.5rem;
	margin-bottom: 3rem;
`;

export const BlogTitle = styled.h2`
	flex: 1;
	font-size: 1.125rem;
	color: ${(props) => props.theme.subtitle};
`;

export const BlogInput = styled.input`
	width: 100%;
	padding: 0.75rem 1rem;
	border: 1px solid ${(props) => props.theme.border};
	border-radius: 6px;
	color: ${(props) => props.theme.text};
	background: ${(props) => props.theme.input};

	&::placeholder {
		color: ${(props) => props.theme.label};
	}
`;

export const BlogContent = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 2rem;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;
