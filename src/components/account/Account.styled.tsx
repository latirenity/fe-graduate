import styled from "styled-components";
import { styles } from "../../globalStyle";

export const S = {
	container: styled.div`
		margin-top: 48px;
		display: flex;
		justify-content: space-between;
	`,
	imageContainer: styled.div`
		width: 25%;
		height: 25%;
	`,
	image: styled.img`
		width: 100%;
		height: 100%;
		object-fit: cover;
	`,
	descriptionConrainer: styled.div`
		display: flex;
		flex-direction: column;
	`,
	userNickname: styled.p`
		font-size: 32px;
		font-weight: 500;
		margin-bottom: 34px;
		color: ${({ theme }) => theme.colors.grey[0]};
	`,
	userInformation: styled.p`
		font-size: 18px;
		font-weight: 400;
		color: ${({ theme }) => theme.colors.grey[0]};
	`,
	achivmentsContainer: styled.div`
		width: 20%;
	`,
	achivments: styled.button`
		${styles.button}
		width: 100%;
	`,
};
