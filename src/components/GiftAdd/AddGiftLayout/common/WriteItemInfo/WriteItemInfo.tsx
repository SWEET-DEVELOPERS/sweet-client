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

  const handleSetIsActivated = (newNameText: string, newPriceText: string) => {
    if (newNameText.length > 0 && newPriceText.length > 0) {
      setIsActivated(true);
    } else {
      setIsActivated(false);
    }
  };

  const handleNameTextChange = (newText: string) => {
    setNameText(newText);
    handleSetIsActivated(newText, priceText);
  };

  const handlePriceTextChange = (newText: string) => {
    setPriceText(newText);
    handleSetIsActivated(nameText, newText);
  };

  const handleLinkTextChange = (newText: string) => {
    setLinkText(newText);
  };

  return (
    <S.WriteItemInfoWrapper>
      <ItemTextField
        type='text'
        text={nameText}
        handleTextChange={handleNameTextChange}
        placeholderText='상품명을 입력해주세요'
        categoryTitle='상품이름'
      />
      <ItemTextField
        text={priceText}
        handleTextChange={handlePriceTextChange}
        type='number'
        categoryTitle='가격'
        placeholderText='가격을 입력해주세요'
      />
      {isLink ? (
        ''
      ) : (
        <ItemTextField
          text={linkText}
          handleTextChange={handleLinkTextChange}
          categoryTitle='링크'
          placeholderText='링크를 입력해주세요 (선택)'
          type='text'
        />
      )}
    </S.WriteItemInfoWrapper>
  );
};

export default WriteItemInfo;
