import styled from "styled-components";

export const HeaderContainer = styled.header`
	background: ${(props) => props.theme.profile};
	padding: 4rem 0 8.375rem;
`;

export const HeaderContent = styled.div`
	width: 100%;
	max-width: 864px;
	margin: 0 auto;
	display: flex;
	justify-content: center;
`;
