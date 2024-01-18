import * as S from './WriteItemInfo.styled';
import ItemTextField from '../../../ItemTextField/ItemTextField';

interface WriteItemInfoProps {
  setIsActivated: React.Dispatch<React.SetStateAction<boolean>>;

  setName: React.Dispatch<React.SetStateAction<string>>;
  setCost: React.Dispatch<React.SetStateAction<number | null>>;
  name: string;
  cost: number | null;
}

const WriteItemInfo = ({ setIsActivated, setName, setCost, name, cost }: WriteItemInfoProps) => {
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

  const handlePriceTextChange = (newCost: number) => {
    setCost(newCost);
    handleSetIsActivated(name, newCost.toString());
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
    </S.WriteItemInfoWrapper>
  );
};

export default WriteItemInfo;
