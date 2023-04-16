import { ErrorMessage, Field, Formik } from "formik";
import { C } from "../../styledComponent";
import { S } from "./Login.styled";

export const Login = () => {
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
          >
            {({ errors, touched, handleSubmit }) => (
              <S.Form>
                <S.inputContainer>
                  <label htmlFor="email">EMAIL</label>
                  <Field id="email" name="email"></Field>
                  <ErrorMessage name="email" />
                </S.inputContainer>
                <S.inputContainer>
                  <label htmlFor="password">PASSWORD</label>
                  <Field id="password" name="password"></Field>
                  <ErrorMessage name="password" />
                </S.inputContainer>
              </S.Form>
            )}
          </Formik>
        </S.container>
      </C.wrapper>
    </S.globalContainer>
  );
};
