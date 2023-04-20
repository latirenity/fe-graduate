import { ErrorMessage, Formik } from "formik";
import { C } from "../../styledComponent";
import { S } from "./Login.styled";
import { validationSchema } from "./validation/validation";
import { useAppSelector } from "../../redux/store";

export const Login = () => {
	const { language } = useAppSelector((state) => state.settings);

	return (
		<S.globalContainer>
			<C.wrapper>
				<S.container>
					<S.title>Sign in</S.title>

					<Formik
						initialValues={{
							name: "",
							password: "",
						}}
						onSubmit={(event) => console.log("Submit")}
						validationSchema={validationSchema}
					>
						{({ errors, touched, handleSubmit }) => (
							<S.Form>
								<S.inputContainer>
									<S.label htmlFor="email">
										{language.login.label.email}
									</S.label>
									<S.Field id="email" name="email"></S.Field>
									<S.errorMessage>
										<ErrorMessage name="email" />
									</S.errorMessage>
								</S.inputContainer>
								<S.inputContainer>
									<S.label htmlFor="password">
										{language.login.label.password}
									</S.label>
									<S.Field id="password" name="password"></S.Field>
									<S.errorMessage>
										<ErrorMessage name="password" />
									</S.errorMessage>
								</S.inputContainer>
								<S.submitButton>{language.login.button.signIn}</S.submitButton>
							</S.Form>
						)}
					</Formik>
				</S.container>
			</C.wrapper>
		</S.globalContainer>
	);
};
