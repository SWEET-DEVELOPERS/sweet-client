import exampleItemImg from '../../../../assets/img/Rectangle.png';
import PriceTag from '../../../common/title/Price/PriceTag';
import * as S from './TournamentResultCard.style';
const TournamentResultCard = () => {
  return (
    <>
      <S.TournamentCardWrapper>
        <S.TournamentImgWrapper>
          <img src={exampleItemImg} alt='제품이미지' />
        </S.TournamentImgWrapper>

        <S.ItemInfo>
          <S.Title>임영웅 콘서트 Gold열 임영웅 콘서트 Gold열</S.Title>
          <PriceTag price={8130000} />
        </S.ItemInfo>
      </S.TournamentCardWrapper>
    </>
  );
};

export default TournamentResultCard;
