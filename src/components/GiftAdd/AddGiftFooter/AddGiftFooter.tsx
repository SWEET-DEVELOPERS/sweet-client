// import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { IcLeft } from '../../../assets/svg';
import usePostGift from '../../../hooks/queries/gift/usePostGift';
import GiftAddNextBtn from '../AddGiftLink/common/GiftAddNextBtn/GiftAddNextBtn';
import * as S from './AddGiftFooter.styled';

interface ItemInfoType {
  roomId: number;
}

interface AddGiftFooterProps {
  targetDate: string;
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
  targetDate,
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
  // const updatedItemInfo = {
  //   roomId: itemInfo.roomId,
  //   name: name,
  //   cost: cost,
  //   imageUrl: imageUrl,
  //   url: link,
  // };
  const navigate = useNavigate();
  const { mutation } = usePostGift(itemInfo.roomId, targetDate);

  const onClick = async () => {
    console.log(fileName);
    const { presignedUrl } = await fetchPresignedUrl(fileName);
    await saveImageUrl(presignedUrl);
    setImageUrl(presignedUrl);
    if (isActivated) {
      console.log('값', imageUrl);
      mutation.mutate(
        {
          roomId: itemInfo.roomId,
          name: name,
          cost: cost,
          imageUrl: presignedUrl,
          url: link,
        },
        {
          onSuccess: () => {
            console.log('PUT 서버통신 후 presignedUrl', presignedUrl);
            navigate(`/add-gift/${itemInfo.roomId}/${targetDate}`);
            setStep(0);
          },
        },
      );
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
