import styled from "styled-components";

export const Card = styled.article`
	background: ${(props) => props.theme.post};
	border-radius: 10px;
	padding: 2rem;
`;

export const CardHeader = styled.header`
	display: flex;
	align-items: baseline;
	margin-bottom: 1.25rem;

	span {
		color: ${(props) => props.theme.span};
	}
`;

export const CardTitle = styled.h3`
	flex: 1;
	font-size: 1.25rem;
	font-weight: bold;
	color: ${(props) => props.theme.title};
`;

export const CardBody = styled.div`
	max-height: 7rem;
	overflow: hidden;

	p {
		text-overflow: ellipsis;
		/* white-space: nowrap; */
	}
`;
