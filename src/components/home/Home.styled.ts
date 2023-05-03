import styled from "styled-components";
import { styles } from "../../globalStyle";

export const S = {
	container: styled.div`
		display: flex;
		justify-content: space-between;
		align-items: center;
	`,
	title: styled.h1`
		margin: 100px 0;
		color: ${({ theme }) => theme.colors.grey[1]};
		text-align: center;
	`,
	button: styled.button`
		${styles.button}
		width: 35%;
	`,
};
