import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { C } from "../../styledComponent";
import { S } from "./Account.styled";
import { AccountItem } from "./libraryItem/LibraryItem";
import { libraryActions } from "../../redux/library/librarySlice";
import { userActions } from "../../redux/user/userSlice";

const MAX_IMAGE_SIZE = 1e10;

export const Account = () => {
	const [pathAvatar, setPathAvatar] = useState<string>("");
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(userActions.getUserInfo());
		dispatch(libraryActions.getGamesListFromLibrary({}));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const { user } = useAppSelector((state) => state.user);
	const { gamesListFromLibrary } = useAppSelector((state) => state.library);

	const [username, setUsername] = useState<string>(user.username ?? "");
	const [description, setDescription] = useState<string>(
		user.description ?? ""
	);

	const getBase64 = async (file: File) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);

		return new Promise<string>((resolve, reject) => {
			reader.onload = function () {
				const result = reader.result as string;
				resolve(result);
			};
			reader.onerror = function (error) {
				reject(error);
			};
		});
	};

	const handleAvatar = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const image = event.target.files?.[0] ?? null;
		if (!image) {
			deleteAvatar();
		} else if (image.size > MAX_IMAGE_SIZE) {
			alert("Maximum file size exceeded");
			deleteAvatar();
		} else {
			setPathAvatar(event.target.value);
			const base64 = await getBase64(image as File);
			await dispatch(userActions.setUserInfo({ ...user, avatar: base64 }));
			await dispatch(userActions.getUserInfo());
		}
	};

	const deleteAvatar = async () => {
		await setPathAvatar("");
		await dispatch(userActions.setUserInfo({ ...user, avatar: "" }));
		await dispatch(userActions.getUserInfo());
	};

	const handleEditDescription = async () => {
		await setIsEdit((prev) => !prev);

		if (isEdit) {
			await dispatch(
				userActions.setUserInfo({ ...user, username, description })
			);
			await dispatch(userActions.getUserInfo());
		}
	};

	console.log(username, description);

	return (
		<C.wrapper>
			<S.accountContainer>
				<S.avatarContainer $avatarActive={!user.avatar}>
					{user.avatar && <S.avatar src={user.avatar} />}
					<S.labelUploadAvatar>
						Update avatar
						<input
							value={pathAvatar}
							type="file"
							accept="image/*"
							onChange={(event) => handleAvatar(event)}
							hidden
						/>
					</S.labelUploadAvatar>
					{user.avatar && (
						<S.deleteAvatarButton onClick={deleteAvatar}>
							Delete
						</S.deleteAvatarButton>
					)}
				</S.avatarContainer>
				<S.accountDescriptionContainer>
					{isEdit ? (
						<S.editAccountNickname
							value={username}
							onChange={(event) => setUsername(event.target.value.trim())}
							maxLength={20}
						/>
					) : (
						<S.accountNickname>{user.username || "Nickname"}</S.accountNickname>
					)}
					{isEdit ? (
						<S.editAccountInformation
							value={description}
							onChange={(event) => setDescription(event.target.value.trim())}
							maxLength={100}
						/>
					) : (
						<S.accountInformation>
							{user.description || "No information"}
						</S.accountInformation>
					)}
					<S.editButton onClick={handleEditDescription}>
						{isEdit ? "Save" : "Edit"}
					</S.editButton>
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
