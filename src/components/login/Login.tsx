import { ErrorMessage, Formik } from "formik";
import { C } from "../../styledComponent";
import { S } from "./Login.styled";
import { validationSchema } from "./validation/validation";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { authActions } from "../../redux/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { CreateTokensRequestType } from "../../types/types";

export const Login = () => {
	const dispatch = useAppDispatch();
	const { language } = useAppSelector((state) => state.settings);
	const navigate = useNavigate();

	const onSubmit = async (values: CreateTokensRequestType) => {
		await dispatch(authActions.createTokens(values));
		navigate("/store");
	};

	return (
		<S.globalContainer>
			<C.wrapper>
				<S.container>
					<S.title>{language.login.signIn}</S.title>

					<Formik
						initialValues={{
							email: "",
							password: "",
						}}
						onSubmit={(values) => onSubmit(values)}
						validationSchema={validationSchema}
					>
						{({ errors, touched, handleSubmit }) => (
							<S.Form>
								<S.inputContainer>
									<S.label htmlFor="email">
										{language.login.label.email}
									</S.label>
									<S.Field type="text" id="email" name="email"></S.Field>
									<S.errorMessage>
										<ErrorMessage name="email" />
									</S.errorMessage>
								</S.inputContainer>
								<S.inputContainer>
									<S.label htmlFor="password">
										{language.login.label.password}
									</S.label>
									<S.Field
										type="password"
										id="password"
										name="password"
									></S.Field>
									<S.errorMessage>
										<ErrorMessage name="password" />
									</S.errorMessage>
								</S.inputContainer>
								<S.submitButton type="submit">
									{language.login.signIn}
								</S.submitButton>
							</S.Form>
						)}
					</Formik>
				</S.container>
			</C.wrapper>
		</S.globalContainer>
	);
};
