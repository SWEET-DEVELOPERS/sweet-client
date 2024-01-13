import React, { useState } from 'react';
import * as S from './TournamentCard.style';
import example from '../../../../assets/img/img.png';
import { IcExternalGray, Logo } from '../../../../assets/svg';
import PriceTag from '../../../common/title/Price/PriceTag';

interface TournamentCardProps {
  item: {
    giftId: number;
    imageUrl: string;
    name: string;
    cost: number;
    url: string;
  };
}

// Function component without React.FC
const TournamentCard = ({ item }: TournamentCardProps) => {
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
          {/* Add logic for the link component if needed */}
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
