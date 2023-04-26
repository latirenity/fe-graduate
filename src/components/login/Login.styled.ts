import styled from "styled-components";
import { Field, Form } from "formik";
import { styles } from "../../globalStyle";

export const S = {
	globalContainer: styled.div`
		/* background: radial-gradient(rgba(24, 26, 33, 0) 0%, #181a21 100%) fixed
				no-repeat,
			url("https://store.akamai.steamstatic.com/public/shared/images/joinsteam/new_login_bg_strong_mask.jpg")
				center top no-repeat,
			#181a21; */
	`,
	container: styled.div`
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 80%;
	`,
	title: styled.h3`
		margin: 48px;
		color: ${({ theme }) => theme.colors.grey[0]};
		font-size: 36px;
		font-weight: 300;
		text-transform: uppercase;
		width: 80%;
	`,
	Form: styled(Form)`
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 48px 0;
		width: 80%;
		color: ${({ theme }) => theme.colors.grey[0]};
		z-index: 1;
		background-color: ${({ theme }) => theme.colors.blue[3]};
	`,
	inputContainer: styled.div`
		display: flex;
		flex-direction: column;
		margin-bottom: 36px;
		width: 80%;
	`,
	label: styled.label`
		font-size: 14px;
		font-weight: 500;
		color: ${({ theme }) => theme.colors.blue[0]};
	`,
	Field: styled(Field)`
		${styles.input}
	`,
	errorMessage: styled.p`
		color: ${({ theme }) => theme.colors.error};
	`,
	submitButton: styled.button`
		${styles.button};
	`,
};
