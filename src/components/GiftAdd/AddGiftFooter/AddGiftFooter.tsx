// import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { IcLeft } from '../../../assets/svg';
import usePostGift from '../../../hooks/queries/gift/usePostGift';
import GiftAddNextBtn from '../AddGiftLink/common/GiftAddNextBtn/GiftAddNextBtn';
import * as S from './AddGiftFooter.styled';
import { OpenGraphResponseType } from '../../../types/etc';
import { AddGiftInfo } from '../../../types/gift';

interface ItemInfoType {
  roomId: number;
}

interface AddGiftFooterProps {
  targetDate: string;
  itemInfo: ItemInfoType;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  isActivated: boolean;
  openGraph: OpenGraphResponseType;
  name: string;
  cost: number;
  imageUrl: string;
  link: string;
  saveImageUrl: (fileName: string) => Promise<void>;
  fileName: string;
  fetchPresignedUrl: (fileName: string) => Promise<{ imageUrl: any; presignedUrl: any }>;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
  updateAddGiftInfo: (newInfo: Partial<AddGiftInfo>) => void;
}

const AddGiftFooter = ({
  targetDate,
  itemInfo,
  setStep,
  isActivated,
  openGraph,
  name,
  cost,
  imageUrl,
  link,
  // saveImageUrl,
  fileName,
  // fetchPresignedUrl,
  // setImageUrl,
  updateAddGiftInfo,
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
    // const { presignedUrl } = await fetchPresignedUrl(fileName);
    // await saveImageUrl(presignedUrl);
    // setImageUrl(presignedUrl);
    if (isActivated) {
      updateAddGiftInfo({ name: '', cost: 0, imageUrl: '', url: ',' });
      console.log('값', imageUrl);
      if (openGraph.image) {
        mutation.mutate(
          {
            roomId: itemInfo.roomId,
            name: name,
            cost: cost,
            imageUrl: imageUrl,
            url: link,
          },
          {
            onSuccess: () => {
              // console.log('PUT 서버통신 후 presignedUrl', presignedUrl);
              navigate(`/add-gift/${itemInfo.roomId}/${targetDate}`);
              setStep(0);
            },
          },
        );
      } else {
        mutation.mutate(
          {
            roomId: itemInfo.roomId,
            name: name,
            cost: cost,
            imageUrl: '',
            url: link,
          },
          {
            onSuccess: () => {
              // console.log('PUT 서버통신 후 presignedUrl', presignedUrl);
              navigate(`/add-gift/${itemInfo.roomId}/${targetDate}`);
              setStep(0);
            },
          },
        );
      }
    }
  };

  // const handlePrevBtnClick = () => {
  //   setStep(1);
  // };

  return (
    <S.AddGiftFooterWrapper>
      <GiftAddNextBtn isActivated={isActivated} onClick={onClick} children='완료' />
    </S.AddGiftFooterWrapper>
  );
};
export default AddGiftFooter;
