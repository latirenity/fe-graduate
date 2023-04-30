import styled from "styled-components";

export const S = {
	container: styled.div`
		display: flex;
		flex-direction: column;
		margin-top: 44px;
		background-color: ${({ theme }) => theme.colors.blue[3]};
		padding: 12px;
		gap: 12px;
	`,
	title: styled.h3`
		color: ${({ theme }) => theme.colors.grey[0]};
		margin-top: 38px;
		text-transform: uppercase;
		font-weight: 400;
		font-size: 30px;
	`,
	cartEmptyText: styled.p`
		font-size: 36px;
		font-weight: 500;
		text-align: center;
		padding: 12px;
		color: ${({ theme }) => theme.colors.grey[0]};
	`,
};
