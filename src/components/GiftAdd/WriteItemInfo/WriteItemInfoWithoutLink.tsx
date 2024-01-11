import { useState } from 'react';
import ItemNameTextField from '../ItemNameTextField/ItemNameTextField';
import ItemPriceTextField from '../ItemPriceTextField/ItemPriceTextField';
import * as S from './WriteItemInfo.styled';

interface WriteItemInfoWithoutLinkProps {
  setIsActivated: React.Dispatch<React.SetStateAction<boolean>>;
}

const WriteItemInfo = ({ setIsActivated }: WriteItemInfoWithoutLinkProps) => {
  const [nameText, setNameText] = useState<string>('');
  const [priceText, setPriceText] = useState<string>('');

  const handleSetIsActivated = () => {
    if (nameText.length > 0 && priceText.length > 0) {
      setIsActivated(true);
    } else {
      setIsActivated(false);
    }
  };
  return (
    <S.WriteItemInfoWrapper>
      <ItemNameTextField
        text={nameText}
        setText={setNameText}
        handleSetIsActivated={handleSetIsActivated}
        // input type, placeholder props로 넘겨서 공통으로 뺼 예정
      />
      <ItemPriceTextField
        text={priceText}
        setText={setPriceText}
        handleSetIsActivated={handleSetIsActivated}
      />
    </S.WriteItemInfoWrapper>
  );
};

export default WriteItemInfo;
