import { LinearProgress, Pagination } from "@mui/material";
import styled from "styled-components";

export const S = {
	storeContainer: styled.div`
		display: grid;
		grid-template-columns: repeat(3, 33%);
		grid-template-rows: repeat(2, 300px);
		gap: 20px;
	`,
	Pagination: styled(Pagination)`
		display: flex;
		flex-direction: column;
		margin: 16px 0;
	`,
	LinearProgress: styled(LinearProgress)``,
};
