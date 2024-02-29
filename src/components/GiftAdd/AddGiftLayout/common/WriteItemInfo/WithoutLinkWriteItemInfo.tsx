import * as S from './WriteItemInfo.styled';
import ItemTextField from '../../../ItemTextField/ItemTextField';
import { toast } from 'react-toastify';
import { useAddGiftContext } from '../../../../../context/AddGift/AddGiftContext';

interface WriteItemInfoProps {
  imageUrl: string;
  setIsActivated: React.Dispatch<React.SetStateAction<boolean>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setCost: React.Dispatch<React.SetStateAction<number | null>>;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  cost: number | null;
  url: string;
}

const WriteItemInfo = ({
  imageUrl,
  setIsActivated,
  setName,
  setCost,
  setUrl,
  name,
  cost,
  url,
}: WriteItemInfoProps) => {
  const handleSetIsActivated = (newNameText: string, newPriceText: string) => {
    console.log(' newNameText', newNameText);
    console.log(' newPriceText', newPriceText);
    console.log('imageUrl', imageUrl);
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

  const { addGiftInfo } = useAddGiftContext();

  const handleNameTextChange = (newText: string) => {
    setName(newText);
    if (cost !== null) {
      handleSetIsActivated(newText, cost.toString());
    }
  };

  const handlePriceTextChange = (newText: string) => {
    if (newText === '') {
      setCost(null);
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

  const handleLinkTextChange = (newText: string) => {
    setUrl(newText);
  };

  return (
    <S.WriteItemInfoWrapper>
      <ItemTextField
        type='text'
        text={name}
        handleTextChange={handleNameTextChange}
        placeholderText='상품명을 입력해 주세요'
        categoryTitle='상품이름'
      />
      <ItemTextField
        text={cost ? cost : cost === null ? '' : addGiftInfo.cost === null ? '' : addGiftInfo.cost}
        handleTextChange={handlePriceTextChange}
        type='number'
        categoryTitle='가격'
        placeholderText='가격을 입력해주세요'
      />
      <ItemTextField
        text={url ? url : addGiftInfo.url}
        handleTextChange={handleLinkTextChange}
        categoryTitle='링크'
        placeholderText='링크를 입력해주세요 (선택)'
        type='text'
      />
    </S.WriteItemInfoWrapper>
  );
};

export default WriteItemInfo;
