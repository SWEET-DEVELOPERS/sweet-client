import exampleItemImg from '../../../../assets/img/Rectangle.png';
import * as S from './TournamentCard.style';
const TournamentCard = () => {
  return (
    <>
      <S.TournamentCardWrapper>
        {/* 이미지  object fit contain*/}
        <S.TournamentImgWrapper>
          <img src={exampleItemImg} alt='제품이미지' />
        </S.TournamentImgWrapper>

        <S.ItemInfo>
          {/* 제품설명/제품제목p/제품가격p */}
          <S.Title>임영웅 콘서트 Gold열</S.Title>
          {/* 제품가격 13,000 숫자 3자리 쉼표 */}
          <S.Price>8,130,000원</S.Price>
          {/* 보러가기 컴포넌트 분리할까 말까 링크있는 
    아이템이면 생성 조건 렌더링 */}
        </S.ItemInfo>
      </S.TournamentCardWrapper>
    </>
  );
};

export default TournamentCard;
