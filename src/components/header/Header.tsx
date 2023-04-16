import { C } from "../../styledComponent";
import { S } from "./Header.styled";

export const Header = () => {
  return (
    <S.globalHeader>
      <C.wrapper>
        <S.header>
          <S.logoLink to={"/"}>
            <S.logo
              src="https://store.cloudflare.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"
            />
          </S.logoLink>

          <S.navigateContainer>
            <S.navigateLink to={"/store"}>Store</S.navigateLink>
            <S.navigateLink to={"/about"}>About steam</S.navigateLink>
          </S.navigateContainer>

          <S.optionContainer>
            <S.optionLink to={"/account"}>
              <S.optionIconAccount />
            </S.optionLink>

            <S.optionLink to={"/cart"}>
              <S.optionIconCart />
            </S.optionLink>

            <S.separation />

            <S.optionButton>
              <S.optionIconLanguage />
            </S.optionButton>

            <S.optionButton>
              <S.optionIconTheme />
            </S.optionButton>
          </S.optionContainer>
        </S.header>
      </C.wrapper>
    </S.globalHeader>
  );
};
