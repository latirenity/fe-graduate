import styled from "styled-components";



export const S = {
  container: styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.colors.grey[0]};
    border: 1px solid #000;
  `,
  image: styled.img`
    width: 100%;
    height: 60%;
  `,
  title: styled.h3`

  `,
  rating: styled.p`
  
  `,
  released: styled.p`
  
  `
}