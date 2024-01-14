import * as S from './TournamentCard.style';
import example from '../../../../assets/img/img.png';
import { IcExternalGray, Logo } from '../../../../assets/svg';
import PriceTag from '../../../common/title/Price/PriceTag';
import { GiftData } from '../../../../core/mockupData';

interface TournamentCardProps {
  item: GiftData;
  onClick: () => void;
  selected: boolean;
}

const TournamentCard: React.FC<TournamentCardProps> = ({ item, onClick, selected }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <S.Wrapper>
      <S.TournamentCardWrapper isClicked={selected} onClick={handleClick}>
        <S.SelectWrapper isClicked={selected}>
          <Logo />
        </S.SelectWrapper>
        <S.TournamentImgWrapper>
          <img src={example} alt={item.name} />
        </S.TournamentImgWrapper>

        <S.ItemInfo>
          <S.Title>{item.name}</S.Title>
          <PriceTag price={item.cost} />
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
