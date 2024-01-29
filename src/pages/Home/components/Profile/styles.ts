import styled from "styled-components";

export const ProfileCard = styled.section`
	display: flex;
	column-gap: 1.5rem;
	height: 212px;
	margin-top: -106px;
	border-radius: 10px;
	padding: 2rem;
	box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.2);
	background: ${(props) => props.theme.profile};
`;

export const ProfileImage = styled.img`
	max-width: 100%;
	height: auto;
	border-radius: 8px;
	overflow: hidden;
	margin: 0 0.5rem;
`;

export const ProfileCardContent = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	row-gap: 0.5rem;
`;

export const ProfileCardHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const ProfileName = styled.h2`
	font-size: 1.5rem;
	color: ${(props) => props.theme.title};
	font-weight: bold;
	line-height: 1.3;
`;

export const CardLink = styled.a`
	display: flex;
	column-gap: 0.5rem;
	align-items: center;
	font-size: 0.75rem;
	font-weight: bold;
	color: ${(props) => props.theme.blue};
	text-transform: uppercase;
	text-decoration: none;
`;

export const ProfileCardFooter = styled.footer`
	display: flex;
	align-items: center;
	column-gap: 1.5rem;
	margin-top: auto;
`;

export const ProfileInfo = styled.div`
	display: flex;
	align-items: center;
	column-gap: 0.5rem;
	color: ${(props) => props.theme.subtitle};

	svg {
		color: ${(props) => props.theme.label};
	}
`;
