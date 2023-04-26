import { C } from "../../styledComponent";
import { S } from "./Account.styled";

export const Account = () => {
	return (
		<C.wrapper>
			<S.container>
				<S.imageContainer>
					<S.image src="../../resources/img/404.jpg" />
				</S.imageContainer>
				<S.descriptionConrainer>
					<S.userNickname>Nickname</S.userNickname>
					<S.userInformation>Information</S.userInformation>
				</S.descriptionConrainer>
				<S.achivmentsContainer>
					<S.achivments>Games</S.achivments>
				</S.achivmentsContainer>
			</S.container>
		</C.wrapper>
	);
};
