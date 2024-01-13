import React, { useState } from 'react';
import * as S from './TournamentCard.style';
import example from '../../../../assets/img/img.png';
import { IcExternalGray, Logo } from '../../../../assets/svg';
import PriceTag from '../../../common/title/Price/PriceTag';

interface TournamentCardProps {
  item: {
    imageUrl: string;
    name: string;
    cost: number;
    // 다른 필요한 프로퍼티들 추가
  };
}

const TournamentCard: React.FC<TournamentCardProps> = ({ item }) => {
  const [isClicked, setIsClicked] = useState(false);

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
          <img src={example} alt={item.name} />
        </S.TournamentImgWrapper>

        <S.ItemInfo>
          <S.Title>{item.name}</S.Title>
          <PriceTag price={item.cost} />
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
