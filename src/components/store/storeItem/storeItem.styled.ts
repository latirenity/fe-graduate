import styled from "styled-components";

export const S = {
	itemContainer: styled.div`
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: ${({ theme }) => theme.colors.grey[0]};
		background-color: ${({ theme }) => theme.colors.blue[0]};
		box-shadow: 0 0 10px ${({ theme }) => theme.colors.grey[3]};
		transition: 0.2s;
		cursor: pointer;
		&:hover {
			box-shadow: 0 0 10px ${({ theme }) => theme.colors.blue[1]};
		}
	`,
	imageContainer: styled.div`
		position: absolute;
		width: 100%;
		height: 100%;
		transition: 0.3s;
		&:hover {
			padding-top: 48px;
			bottom: 0;
		}
	`,
	image: styled.img`
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: 0.3s;
	`,
	title: styled.h3`
		margin: 10px;
	`,
};
