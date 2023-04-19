import { Pagination } from "@mui/material";
import styled from "styled-components";

export const S = {
	storeContainer: styled.div`
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
	`,
	Pagination: styled(Pagination)`
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 10px 0;
	`,
};
