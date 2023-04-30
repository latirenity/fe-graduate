import styled from "styled-components";
import { styles } from "../../globalStyle";

export const S = {
	accountContainer: styled.div`
		margin-top: 48px;
		display: flex;
	`,
	avatarContainer: styled.div`
		display: flex;
		align-items: center;
		flex-direction: column;
		background-image: url("../../resources/img/without-avatar.png");
		width: 25%;
		height: 25%;
		margin-right: 56px;
	`,
	avatar: styled.img`
		width: 100%;
		height: 100%;
		object-fit: cover;
		margin-bottom: 12px;
		border: 3px solid ${({ theme }) => theme.colors.grey[0]};
	`,
	uploadImage: styled.input`
		visibility: hidden;
	`,
	labelUploadImage: styled.label`
		${styles.button}
		padding: 3px;
		width: 30%;
		font-size: 12px;
		font-weight: 200;
		text-align: center;
	`,
	accountDescriptionContainer: styled.div`
		display: flex;
		flex-direction: column;
	`,
	accountNickname: styled.p`
		font-size: 32px;
		font-weight: 500;
		margin-bottom: 34px;
		color: ${({ theme }) => theme.colors.grey[0]};
	`,
	accountInformation: styled.p`
		font-size: 18px;
		font-weight: 400;
		color: ${({ theme }) => theme.colors.grey[0]};
	`,
	libraryContainer: styled.div`
		display: flex;
		flex-direction: column;
		margin-top: 76px;
		background-color: ${({ theme }) => theme.colors.blue[3]};
		padding: 12px;
		gap: 12px;
	`,
	libraryEmptyText: styled.p`
		font-size: 36px;
		font-weight: 500;
		text-align: center;
		padding: 12px;
		color: ${({ theme }) => theme.colors.grey[0]};
	`,
};
