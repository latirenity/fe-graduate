import styled from "styled-components";
import { Field, Form, Formik } from "formik";

export const S = {
  globalContainer: styled.div`
    background: radial-gradient(rgba(24, 26, 33, 0) 0%, #181a21 100%) fixed
        no-repeat,
      url("https://store.akamai.steamstatic.com/public/shared/images/joinsteam/new_login_bg_strong_mask.jpg")
        center top no-repeat,
      #181a21;
      padding: 80px 0;
  `,
  container: styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
  `,
  title: styled.h3`
    margin: 48px;
    color: ${({ theme }) => theme.colors.grey[0]};
    font-size: 36px;
    font-weight: 300;
    text-transform: uppercase;
    width: 80%;
  `,
  Form: styled(Form)`
    position: relative;
    width: 80%;
    color: ${({theme}) => theme.colors.grey[0]};
    z-index: 1;
    background-color: ${({theme}) => theme.colors.blue[3]};
  `,
  inputContainer: styled.div`
    display: flex;
    flex-direction: column;
    margin: 36px;
  `,
  Field: styled(Field)`
  border: none;
  outline: none;
  float: none;
  appearance: none;
  `
};
