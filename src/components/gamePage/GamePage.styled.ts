import styled from "styled-components";
import { styles } from "../../globalStyle";


export const S = {
  container: styled.div`
    margin-top: 100px;
  `,
  titleContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
  `,
  title: styled.h3`
  color: ${({theme}) => theme.colors.grey[1]};
  `,
  cartButton: styled.button`
    ${styles.button}
    width: 10%;
    height: 4%;
    padding: 0;
    font-size: 12px;
    background-color: ${({theme}) => theme.colors.blue[1]};
  `,
  contentContainer: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  swiperContainer: styled.div`
    width: 60%;
  `,
  infoContainer: styled.div`
    width: 40%;
  `,
  infoImage: styled.img`
    width: 100%;
    height: 100%;
  `,
  infoDescription: styled.p`

  `,
  infoProperties: styled.p`
  
  `
}