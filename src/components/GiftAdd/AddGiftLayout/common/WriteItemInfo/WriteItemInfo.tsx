import { useState } from 'react';
import * as S from './WriteItemInfo.styled';
import ItemTextField from '../../../ItemTextField/ItemTextField';

interface WriteItemInfoProps {
  setIsActivated: React.Dispatch<React.SetStateAction<boolean>>;
  isLink: boolean;
}

const WriteItemInfo = ({ setIsActivated, isLink }: WriteItemInfoProps) => {
  const [nameText, setNameText] = useState<string>('');
  const [priceText, setPriceText] = useState<string>('');
  const [linkText, setLinkText] = useState<string>('');

  const handleSetIsActivated = () => {
    if (nameText.length > 0 && priceText.length > 0) {
      setIsActivated(true);
    } else {
      setIsActivated(false);
    }
  };

  return (
    <S.WriteItemInfoWrapper>
      <ItemTextField
        type='text'
        text={nameText}
        setText={setNameText}
        handleSetIsActivated={handleSetIsActivated}
        placeholderText='상품명을 입력해주세요'
        categoryTitle='상품이름'
      />
      <ItemTextField
        text={priceText}
        setText={setPriceText}
        handleSetIsActivated={handleSetIsActivated}
        type='number'
        categoryTitle='가격'
        placeholderText='가격을 입력해주세요'
      />
      {isLink ? (
        ''
      ) : (
        <ItemTextField
          text={linkText}
          setText={setLinkText}
          handleSetIsActivated={handleSetIsActivated}
          categoryTitle='링크'
          placeholderText='링크를 입력해주세요 (선택)'
          type='text'
        />
      )}
    </S.WriteItemInfoWrapper>
  );
};

export default WriteItemInfo;
