import styled from "styled-components";



export const S = {
  container: styled.div`
  position: relative;
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.colors.grey[0]};
    box-shadow: 0 0 10px ${({theme}) => theme.colors.grey[6]};
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 0 10px ${({theme}) => theme.colors.grey[1]};
    }
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