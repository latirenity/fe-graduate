import styled from "styled-components";
import { styles } from "../../globalStyle";


export const S = {
  container: styled.div`
    margin-top: 100px;
  `,
  titleContainer: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  title: styled.h3`
  color: ${({theme}) => theme.colors.grey[1]};
  `,
  cartButton: styled.button`
    ${styles.button}
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
  
  `,
  infoDescription: styled.p`

  `,
  infoProperties: styled.p`
  
  `
}