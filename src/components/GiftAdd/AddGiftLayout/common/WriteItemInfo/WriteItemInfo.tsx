import * as S from './WriteItemInfo.styled';
import ItemTextField from '../../../ItemTextField/ItemTextField';
import { toast } from 'react-toastify';
import { useAddGiftContext } from '../../../../../context/AddGift/AddGiftContext';

interface WriteItemInfoProps {
  setIsActivated: React.Dispatch<React.SetStateAction<boolean>>;
  imageUrl: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setCost: React.Dispatch<React.SetStateAction<number | null>>;
  name: string;
  cost: number | null;
}

const WriteItemInfo = ({
  imageUrl,
  setIsActivated,
  setName,
  setCost,
  name,
  cost,
}: WriteItemInfoProps) => {
  const { addGiftInfo, updateAddGiftInfo } = useAddGiftContext();

  const handleSetIsActivated = (newNameText: string, newPriceText: string) => {
    if (
      newNameText.length > 0 &&
      newPriceText !== undefined &&
      newPriceText !== null &&
      newPriceText.length > 0 &&
      imageUrl
    ) {
      setIsActivated(true);
    } else {
      setIsActivated(false);
    }
  };

  const handleNameTextChange = (newText: string) => {
    setName(newText);
    updateAddGiftInfo({ name: newText });
    if (cost !== null) {
      handleSetIsActivated(newText, cost.toString());
    }
  };

  const handlePriceTextChange = (newText: string) => {
    if (newText === '') {
      setCost(null);
      updateAddGiftInfo({ cost: null });
      handleSetIsActivated(name, '');
      return;
    }

    const parsedCost = Number(newText);

    if (!isNaN(parsedCost)) {
      setCost(parsedCost);
      handleSetIsActivated(name, parsedCost.toString());
      return;
    }

    toast.info('가격은 숫자만 입력 가능합니다.', {
      position: 'bottom-center',
      autoClose: 700,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: 'colored',
      icon: false,
    });
  };

  return (
    <S.WriteItemInfoWrapper>
      <ItemTextField
        type='text'
        text={addGiftInfo.name ? addGiftInfo.name : name}
        handleTextChange={handleNameTextChange}
        placeholderText='상품명을 입력해주세요'
        categoryTitle='상품이름'
      />
      <ItemTextField
        text={cost ? cost : cost === null ? '' : addGiftInfo.cost === null ? '' : addGiftInfo.cost}
        handleTextChange={handlePriceTextChange}
        type='number'
        categoryTitle='가격'
        placeholderText='가격을 입력해주세요'
      />
    </S.WriteItemInfoWrapper>
  );
};

export default WriteItemInfo;
