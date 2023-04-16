import { NavLink } from "react-router-dom";
import { ReactComponent as AccountIcon } from "../../resources/icons/account.svg";
import { ReactComponent as CartIcon } from "../../resources/icons/cart.svg";
import { ReactComponent as LanguageIcon } from "../../resources/icons/language.svg";
import { ReactComponent as ThemeIcon } from "../../resources/icons/theme.svg";
import styled from "styled-components";
import { styles } from "../../globalStyle";

export const S = {
  header: styled.header`
    display: flex;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.grey[6]};
    text-transform: uppercase;
    padding: 0 24px;
  `,

  logoLink: styled(NavLink)`
    margin: 24px;
  `,

  logo: styled.img`
    max-width: 200px;
  `,

  navigateContainer: styled.div`
    display: flex;
    gap: 24px;
    flex-grow: 1;
    align-items: center;
    width: 50%;
  `,

  navigateLink: styled(NavLink)`
    color: ${({ theme }) => theme.colors.grey[2]};
    font-size: 18px;
    font-weight: 400;
    border-bottom: 2px solid transparent;
    transition: 0.3s;
    &:hover {
      color: ${({ theme }) => theme.colors.grey[1]};
      border-bottom: 2px solid ${({ theme }) => theme.colors.grey[1]};
    }
  `,

  optionContainer: styled.div`
    position: relative;
    display: flex;
    align-items: center;
  `,

  optionIconAccount: styled(AccountIcon)`
    ${styles.icon}
  `,

  optionIconCart: styled(CartIcon)`
    ${styles.icon}
  `,

    optionIconLanguage: styled(LanguageIcon)`
    ${styles.icon}
  `,

    optionIconTheme: styled(ThemeIcon)`
    ${styles.icon}
  `,

  separation: styled.span`
    position: absolute;
    background-color: ${({ theme }) => theme.colors.grey[2]};
    padding: 0 1px;
    height: 80%;
    left: 50%;
    transform: translate(-50%);
  `,

  optionLink: styled(NavLink)`
    display: flex;
    margin-right: 24px;
  `,

  optionButton: styled.button`
    display: flex;
    background-color: transparent;
    border: none;
    margin-left: 24px;
  `,
};
