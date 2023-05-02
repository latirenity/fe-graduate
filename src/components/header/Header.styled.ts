import { NavLink } from "react-router-dom";
import { ReactComponent as AccountIcon } from "../../resources/icons/account.svg";
import { ReactComponent as CartIcon } from "../../resources/icons/cart.svg";
import { ReactComponent as LanguageIcon } from "../../resources/icons/language.svg";
import { ReactComponent as ThemeIcon } from "../../resources/icons/theme.svg";
import { ReactComponent as LogoutIcon } from "../../resources/icons/logout.svg";
import styled from "styled-components";
import { styles } from "../../globalStyle";

export const S = {
  globalHeader: styled.header`
    background-color: ${({ theme }) => theme.colors.blue[3]};
    width: 100%;
  `,
  header: styled.div`
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
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
    color: ${({ theme }) => theme.colors.grey[1]};
    font-size: 18px;
    font-weight: 400;
    border-bottom: 2px solid transparent;
    transition: 0.3s;
    &:hover {
      color: ${({ theme }) => theme.colors.grey[0]};
      border-bottom: 2px solid ${({ theme }) => theme.colors.grey[0]};
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

  optionIconLogout: styled(LogoutIcon)`
    ${styles.icon}
  `,

  separation: styled.span`
    background-color: ${({ theme }) => theme.colors.grey[1]};
    padding: 0 1px;
    height: 60%;
    left: 50%;
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
