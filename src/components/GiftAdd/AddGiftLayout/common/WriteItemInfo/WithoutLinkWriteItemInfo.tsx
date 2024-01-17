import * as S from './WriteItemInfo.styled';
import ItemTextField from '../../../ItemTextField/ItemTextField';

interface WriteItemInfoProps {
  setIsActivated: React.Dispatch<React.SetStateAction<boolean>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setCost: React.Dispatch<React.SetStateAction<number | null>>;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  cost: number | null;
  url: string;
}

const WriteItemInfo = ({
  setIsActivated,
  setName,
  setCost,
  setUrl,
  name,
  cost,
  url,
}: WriteItemInfoProps) => {
  const handleSetIsActivated = (newNameText: string, newPriceText: string) => {
    if (newNameText.length > 0 && newPriceText.length > 0) {
      setIsActivated(true);
    } else {
      setIsActivated(false);
    }
  };

  const handleNameTextChange = (newText: string) => {
    setName(newText);
    if (cost !== null) {
      handleSetIsActivated(newText, cost.toString());
    }
  };

  const handlePriceTextChange = (newCost: number | null) => {
    if (newCost !== null) {
      setCost(newCost);
      handleSetIsActivated(name, newCost.toString());
    }
  };

  const handleLinkTextChange = (newText: string) => {
    setUrl(newText);
  };

  return (
    <S.WriteItemInfoWrapper>
      <ItemTextField
        type='text'
        text={name}
        handleTextChange={handleNameTextChange}
        placeholderText='상품명을 입력해주세요'
        categoryTitle='상품이름'
      />
      <ItemTextField
        text={cost ? cost.toString() : ''}
        handleTextChange={(newText) => handlePriceTextChange(Number(newText))}
        type='number'
        categoryTitle='가격'
        placeholderText='가격을 입력해주세요'
      />
      <ItemTextField
        text={url}
        handleTextChange={handleLinkTextChange}
        categoryTitle='링크'
        placeholderText='링크를 입력해주세요 (선택)'
        type='text'
      />
    </S.WriteItemInfoWrapper>
  );
};

export default WriteItemInfo;
