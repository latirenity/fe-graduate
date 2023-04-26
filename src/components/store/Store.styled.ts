import { LinearProgress, Pagination } from "@mui/material";
import styled from "styled-components";

export const S = {
	storeContainer: styled.div`
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(2, 1fr);
		gap: 20px;
	`,
	Pagination: styled(Pagination)`
		display: flex;
		flex-direction: column;
		margin: 16px 0;
	`,
	LinearProgress: styled(LinearProgress)``,
};
