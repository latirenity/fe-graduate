import styled from "styled-components";
import { styles } from "../../../globalStyle";

export const S = {
  optionsContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 36px 0px 36px 24px;
  `,
  sort: styled.div`
    display: flex;
    color: ${({ theme }) => theme.colors.grey[0]};
    font-size: 24px;
    font-weight: 400;
    gap: 24px;
    width: 60%;
  `,
  sortButton: styled.button<{ active: boolean }>`
    ${styles.button}
    background-color: ${({theme, active}) => active ? theme.colors.green[3] : theme.colors.grey[2]};
    color: ${({theme, active}) => active ? theme.colors.green[1] : theme.colors.grey[0]};
    text-transform: uppercase;
    font-size: 12px;
  `,
  filter: styled.input`
    ${styles.input};
    width: 40%;
    ::placeholder {
      color: ${({ theme }) => theme.colors.grey[0]};
      opacity: 0.5;
    }
  `,
};
