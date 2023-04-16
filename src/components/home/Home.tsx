import React from "react";
import { S } from "./Home.styled";
import { C } from "../../styledComponent";
import { useNavigate } from "react-router-dom";

export const Home = () => {

  const navigate = useNavigate()

  return (
    <C.wrapper>
      <S.title>Welcome to Steam</S.title>
      <S.container>
        <S.button onClick={() => navigate('/login')}>Login</S.button>
        <S.button onClick={() => navigate('/store')}>Сontinue as a guest</S.button>
      </S.container>
    </C.wrapper>
  )
}