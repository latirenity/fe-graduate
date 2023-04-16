import { HeaderIcon } from "./headerIcon/HeaderIcon"
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
            <HeaderIcon icon={'account'} />
          </S.optionLink>

          <S.optionLink to={'/cart'}>
            <HeaderIcon icon={'cart'} />
          </S.optionLink>

          <S.optionButton>
            <HeaderIcon icon={'language'} />
          </S.optionButton>

          <S.optionButton>
            <HeaderIcon icon={'theme'} />
          </S.optionButton>
        </S.optionList>
      </S.header>
    </>
  )

}