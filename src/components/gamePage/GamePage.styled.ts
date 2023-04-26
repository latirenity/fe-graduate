import styled from "styled-components";
import { styles } from "../../globalStyle";

export const S = {
  container: styled.div`
    margin-top: 48px;
  `,
  titleContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 0;
  `,
  title: styled.h3`
    color: ${({ theme }) => theme.colors.grey[0]};
    font-size: 36px;
  `,
  cartButton: styled.button`
    ${styles.button}
  `,
  contentContainer: styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    ::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => theme.colors.blue[3]};
      opacity: 0.1;
      z-index: -1;
    }
  `,
  swiperContainer: styled.div`
    width: 70%;
  `,
  infoContainer: styled.div`
    width: 30%;
    height: 100%;
  `,
  infoImageContainer: styled.div`
  width: 100%;
  height: 350px;
  `,
  infoImage: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,
  infoDescription: styled.p`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.grey[0]};
  `,
  infoProperties: styled.p`
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.grey[0]};
    margin: 14px 0;
  `,
  span: styled.span`
    color: ${({ theme }) => theme.colors.grey[1]};
    text-transform: capitalize;
    margin-left: 18px;
  `,
};
