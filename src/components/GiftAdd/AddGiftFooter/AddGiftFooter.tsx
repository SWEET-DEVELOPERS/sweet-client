import { IcLeft } from '../../../assets/svg';
import usePostGift from '../../../hooks/queries/gift/usePostGift';
import GiftAddNextBtn from '../AddGiftLink/common/GiftAddNextBtn/GiftAddNextBtn';
import * as S from './AddGiftFooter.styled';

interface ItemInfoType {
  roomId: number;
}

interface AddGiftFooterProps {
  itemInfo: ItemInfoType;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  isActivated: boolean;
  name: string;
  cost: number;
  imageUrl: string;
  link: string;
  saveImageUrl: (fileName: string) => Promise<void>;
  fileName: string;
  fetchPresignedUrl: (fileName: string) => Promise<{ imageUrl: any; presignedUrl: any }>;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
}

const AddGiftFooter = ({
  itemInfo,
  setStep,
  isActivated,
  name,
  cost,
  imageUrl,
  link,
  saveImageUrl,
  fileName,
  fetchPresignedUrl,
  setImageUrl,
}: AddGiftFooterProps) => {
  const updatedItemInfo = {
    ...itemInfo,
    name: name,
    cost: cost,
    imageUrl: imageUrl,
    url: link,
  };

  const { mutation } = usePostGift();

  const onClick = async () => {
    const { presignedUrl } = await fetchPresignedUrl(fileName);
    console.log('푸터 안에서 fileName', fileName);
    await saveImageUrl(presignedUrl);
    setImageUrl(presignedUrl);
    if (isActivated) {
      mutation.mutate(updatedItemInfo);
      setStep(0);
    }
  };

  const handlePrevBtnClick = () => {
    setStep(1);
  };

  return (
    <S.AddGiftFooterWrapper>
      <S.BtnPrev>
        <IcLeft style={{ width: '2.4rem', height: '2.4rem' }} onClick={handlePrevBtnClick} />
        이전
      </S.BtnPrev>
      <GiftAddNextBtn isActivated={isActivated} onClick={onClick} children='완료' />
    </S.AddGiftFooterWrapper>
  );
};
export default AddGiftFooter;
