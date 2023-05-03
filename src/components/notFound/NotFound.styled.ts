import styled from "styled-components";
import notFound from "../../resources/img/404.jpg";

export const S = {
	container: styled.div`
		position: absolute;
		top: 102px;
		bottom: 0;
		width: 100%;
		background-image: url(${notFound});
		background-size: cover;
		background-attachment: fixed;
	`,
};
