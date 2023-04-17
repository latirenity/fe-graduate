import styled from "styled-components";


export const S = {
  itemContainer: styled.div`
  position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({theme}) => theme.colors.grey[0]};
    background-color: ${({theme}) => theme.colors.grey[2]};
    box-shadow: 0 0 10px ${({theme}) => theme.colors.grey[3]};
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 0 10px ${({theme}) => theme.colors.grey[1]};
    }
  `,
  image: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,
  title: styled.h3`
    margin: 10px;
  `,
  rating: styled.p`
  
  `,
  released: styled.p`
  
  `
}