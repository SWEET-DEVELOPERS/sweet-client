import * as S from './TournamentCard.style';
import { IcExternalGray } from '../../../../assets/svg';
import IconSelected from '../../../../assets/img/Union.png';
import PriceTag from '../../../common/title/Price/PriceTag';
import { GiftData } from '../../../../core/mockupData';

interface TournamentCardProps {
  item: GiftData;
  onClick: () => void;
  selected: boolean;
}
const TournamentCard = ({ item, onClick, selected }: TournamentCardProps) => {
  const handleClick = () => {
    onClick();
    selected = !selected;
  };

  return (
    <S.Wrapper>
      <S.TournamentCardWrapper isClicked={selected} onClick={handleClick}>
        <S.SelectWrapper isClicked={selected}>
          <img src={IconSelected} alt='선택-리본' style={{ width: '5rem', height: '4rem' }} />
        </S.SelectWrapper>
        <S.TournamentImgWrapper>
          <img src={item.imageUrl} alt={item.name} />
        </S.TournamentImgWrapper>

        <S.ItemInfo>
          <S.Title>{item.name}</S.Title>
          <PriceTag price={item.cost} />
        </S.ItemInfo>
      </S.TournamentCardWrapper>
      {item.url && (
        <S.LinkIconWrapper onClick={() => window.open(item.url)}>
          <IcExternalGray style={{ width: '1.6rem' }} />
          보러가기
        </S.LinkIconWrapper>
      )}
    </S.Wrapper>
  );
};

export default TournamentCard;
