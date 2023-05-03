import styled from "styled-components";
import { styles } from "../../globalStyle";
import defaultAvatar from "../../resources/img/without-avatar.png";

export const S = {
	accountContainer: styled.div`
		margin-top: 48px;
		display: flex;
	`,
	avatarContainer: styled.div<{ $avatarActive: boolean }>`
		position: relative;
		display: flex;
		align-items: center;
		flex-direction: column;
		background-image: ${({ $avatarActive }) =>
			$avatarActive && `url(${defaultAvatar})`};
		background-size: cover;
		width: 25%;
		height: 290px;
		margin-right: 56px;
		border: 1px solid ${({ theme }) => theme.colors.grey[0]};
	`,
	avatar: styled.img`
		width: 100%;
		height: 100%;
		object-fit: cover;
	`,
	labelUploadAvatar: styled.label`
		${styles.button}
		position: absolute;
		left: 0;
		bottom: -32px;
		padding: 3px;
		width: 30%;
		font-size: 10px;
		font-weight: 200;
		text-align: center;
	`,
	deleteAvatarButton: styled.button`
		${styles.button}
		position: absolute;
		right: 0;
		bottom: -32px;
		padding: 3px;
		width: 30%;
		font-size: 10px;
		font-weight: 200;
		text-align: center;
	`,
	editButton: styled.button`
		${styles.button}
		padding: 3px;
		max-width: 104px;
		width: 100%;
		font-size: 10px;
		font-weight: 200;
		text-align: center;
	`,
	accountDescriptionContainer: styled.div`
		display: flex;
		flex-direction: column;
		min-width: 300px;
		max-width: 400px;
	`,
	accountNickname: styled.p`
		font-size: 32px;
		font-weight: 500;
		margin-bottom: 34px;
		color: ${({ theme }) => theme.colors.grey[0]};
	`,
	accountInformation: styled.p`
		display: flex;
		flex-direction: column;
		font-size: 18px;
		word-wrap: break-word;
		font-weight: 400;
		color: ${({ theme }) => theme.colors.grey[0]};
		margin-bottom: 12px;
	`,
	editAccountNickname: styled.input`
		${styles.input}
	`,
	editAccountInformation: styled.textarea`
		${styles.input}
		resize: none;
		height: 50%;
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
