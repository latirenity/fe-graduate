import styled from "styled-components";

export const S = {
	container: styled.div`
		display: flex;
		flex-direction: column;
		margin-top: 76px;
		background-color: ${({ theme }) => theme.colors.blue[3]};
		padding: 12px;
		gap: 12px;
	`,
};
