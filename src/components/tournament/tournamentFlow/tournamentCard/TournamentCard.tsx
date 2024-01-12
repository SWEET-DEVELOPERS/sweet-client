import { useState } from 'react';
import exampleItemImg from '../../../../assets/img/Rectangle.png';
import * as S from './TournamentCard.style';
import { Logo } from '../../../../assets/svg';
import PriceTag from '../../../common/title/Price/PriceTag';

const TournamentCard = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <S.TournamentCardWrapper isClicked={isClicked} onClick={handleClick}>
        <S.SelectWrapper isClicked={isClicked}>
          <Logo />
        </S.SelectWrapper>
        <S.TournamentImgWrapper>
          <img src={exampleItemImg} alt='제품이미지' />
        </S.TournamentImgWrapper>

        <S.ItemInfo>
          <S.Title>임영웅 콘서트 Gold열</S.Title>
          <PriceTag price={8130000} />
          {/* 보러가기 컴포넌트 분리할까 말까 링크있는 
    아이템이면 생성 조건 렌더링 */}
        </S.ItemInfo>
      </S.TournamentCardWrapper>
    </>
  );
};

export default TournamentCard;
