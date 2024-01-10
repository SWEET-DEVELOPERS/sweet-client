import { useState } from 'react';
import exampleItemImg from '../../../../assets/img/Rectangle.png';
import * as S from './TournamentCard.style';
import { IcExternalGray, IcRefreshGray, Logo } from '../../../../assets/svg';

const TournamentCard = () => {
  const [isClicked, setIsClicked] = useState(false);

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <S.Wrapper>
      <S.TournamentCardWrapper isClicked={isClicked} onClick={handleClick}>
        <S.SelectWrapper isClicked={isClicked}>
          <Logo />
        </S.SelectWrapper>
        <S.TournamentImgWrapper>
          <img src={exampleItemImg} alt='제품이미지' />
        </S.TournamentImgWrapper>

        <S.ItemInfo>
          <S.Title>CHANEL 22 MINI 핸드백</S.Title>
          <S.Price>{formatPrice(8130000)}원</S.Price>
          {/* 보러가기 컴포넌트 분리할까 말까 링크있는 
    아이템이면 생성 조건 렌더링 */}
        </S.ItemInfo>
      </S.TournamentCardWrapper>
      <S.LinkIconWrapper>
        <IcExternalGray style={{ width: '1.6rem' }} />
        더보기
      </S.LinkIconWrapper>
    </S.Wrapper>
  );
};

export default TournamentCard;
