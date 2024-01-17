import { IcEmptyBox } from '../../../assets/svg';
import * as S from './GiftAddButtonsWrapper.styled';

interface GiftAddButtonsProps {
  onClick: () => void;
}

const EmptyGiftAddButtonsWrapper = ({ onClick }: GiftAddButtonsProps) => {
  return (
    <S.IcEmptyBoxWrapper onClick={onClick}>
      <IcEmptyBox style={{ width: '15.9rem', height: '16rem' }} />
    </S.IcEmptyBoxWrapper>
  );
};

export default EmptyGiftAddButtonsWrapper;
