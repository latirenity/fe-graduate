import { S } from "./storeItem.styled"


export const StoreItem = ({ data }: any) => {
  return(
    <S.container>
      <S.image src={`${data.background_image}`}/>
      <S.title>
      {data.name}
      </S.title>
      <S.rating>
        {data.rating}
      </S.rating>
      <S.released>
        {data.released}
      </S.released>
    </S.container>
  )
}