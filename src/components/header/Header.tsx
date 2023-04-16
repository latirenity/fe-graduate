import { HeaderIcons } from "./headerIcon/HeaderIcons"
import { S } from "./Header.styled"


export const Header = () => {


  return (
    <>
      <S.header>
        <S.logoLink to={'/'}>
          <S.logo src="https://store.cloudflare.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016" alt="" />
        </S.logoLink>

        <S.navigateList>
            <S.navigate to={'/store'}>
              Store
            </S.navigate>
            <S.navigate to={'/about'}>
              About steam
            </S.navigate>
        </S.navigateList>

        <S.optionList>

          <S.optionLink to={'/account'}>
            <HeaderIcons icon={'account'} />
          </S.optionLink>
          <S.optionLink to={'/cart'}>
            <HeaderIcons icon={'cart'} />
          </S.optionLink>

          <S.separation />

          <S.optionButton>
            <HeaderIcons icon={'language'} />
          </S.optionButton>
          <S.optionButton>
            <HeaderIcons icon={'theme'} />
          </S.optionButton>

        </S.optionList>
      </S.header>
    </>
  )

}