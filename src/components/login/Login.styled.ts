import styled from "styled-components";
import { Field, Form } from "formik";
import { styles } from "../../globalStyle";

export const S = {
	globalContainer: styled.div``,
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
