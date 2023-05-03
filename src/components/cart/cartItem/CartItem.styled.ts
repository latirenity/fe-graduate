import styled from "styled-components";
import { styles } from "../../../globalStyle";

export const S = {
	container: styled.div`
		position: relative;
		display: flex;
		align-items: center;
		width: 100%;
		background-color: ${({ theme }) => theme.colors.blue[1]};
		padding: 20px;
	`,
	imageContainer: styled.div`
		width: 20%;
		height: 100px;
		margin-right: 24px;
	`,
	image: styled.img`
		width: 100%;
		height: 100%;
	`,
	itemName: styled.p`
		font-size: 24px;
		font-weight: 500;
		color: ${({ theme }) => theme.colors.grey[0]};
	`,
	itemGetButton: styled.button`
		${styles.button}
		position: absolute;
		bottom: 18%;
		right: 1%;
		width: 18%;
	`,
	itemDeleteButton: styled.button`
		position: absolute;
		top: 5%;
		right: 1%;
		color: ${({ theme }) => theme.colors.grey[0]};
		border: none;
		background: none;
		font-size: 14px;
		font-weight: 400;
		cursor: pointer;
		border-bottom: 1px solid transparent;
		transition: 0.3s;
		:hover {
			border-bottom: 1px solid ${({ theme }) => theme.colors.grey[0]};
		}
	`,
};
