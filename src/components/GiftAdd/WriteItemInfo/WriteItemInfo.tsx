import ItemNameTextField from '../ItemNameTextField/ItemNameTextField';
import ItemPriceTextField from '../ItemPriceTextField/ItemPriceTextField';
import * as S from './WriteItemInfo.styled';

const WriteItemInfo = () => {
  return (
    <S.WriteItemInfoWrapper>
      <ItemNameTextField />
      <ItemPriceTextField />
    </S.WriteItemInfoWrapper>
  );
};

export default WriteItemInfo;
