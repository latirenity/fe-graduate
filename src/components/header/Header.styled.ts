import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const S = {
  header: styled.header`
    display: flex;
    justify-content: space-between;
    background-color: #171a21;
    text-transform: uppercase;
    padding: 0 24px;
  `,

  logoLink: styled(NavLink)`
    margin: 24px;
  `,

  logo: styled.img`
    max-width: 200px;
  `,

  navigateList: styled.div`
    display: flex;
    gap: 24px;
    flex-grow: 1;
    align-items: center;
    width: 50%;
  `,

  navigate: styled(NavLink)`
    color: #b8b6b4;
    font-size: 18px;
    font-weight: 400;
    border-bottom: 2px solid transparent;
    transition: 0.3s;
    &:hover {
      border-bottom: 2px solid #b8b6b4;
    }
  `,

  optionList: styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
  `,

  optionLink: styled(NavLink)`
    display: flex;
  `,

  optionButton: styled.button`
    display: flex;
    background-color: transparent;
    border: none;
  `,
}