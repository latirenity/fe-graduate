import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { C } from "../../styledComponent";
import { S } from "./Account.styled";
import { AccountItem } from "./libraryItem/LibraryItem";
import { libraryActions } from "../../redux/library/librarySlice";

export const Account = () => {
	const [avatar, setAvatar] = useState<File>();

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(libraryActions.getGamesListFromLibrary({}));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const { gamesListFromLibrary } = useAppSelector((state) => state.library);

	return (
		<C.wrapper>
			<S.accountContainer>
				<S.avatarContainer>
					<S.avatar src="" />
					<S.labelUploadImage htmlFor="upload-image">
						Upload avatar
					</S.labelUploadImage>
					<S.uploadImage
						id="upload-image"
						type="file"
						accept="image/*"
						onChange={(event) => console.log("click")}
					/>
				</S.avatarContainer>
				<S.accountDescriptionContainer>
					<S.accountNickname>Nickname</S.accountNickname>
					<S.accountInformation>Information</S.accountInformation>
				</S.accountDescriptionContainer>
			</S.accountContainer>

			<S.libraryContainer>
				{gamesListFromLibrary.length > 0 ? (
					gamesListFromLibrary.map((item) => (
						<AccountItem key={item.id} data={item} />
					))
				) : (
					<S.libraryEmptyText>Library is empty</S.libraryEmptyText>
				)}
			</S.libraryContainer>
		</C.wrapper>
	);
};
