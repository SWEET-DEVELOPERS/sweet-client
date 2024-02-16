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
  const { mutation } = usePostGift(itemInfo.roomId, targetDate, setStep);

  function onClickBtn() {
    // const { presignedUrl } = await fetchPresignedUrl(fileName);
    // await saveImageUrl(presignedUrl);
    // setImageUrl(presignedUrl);
    if (isActivated) {
      updateAddGiftInfo({ name: '', cost: 0, imageUrl: '', url: ',' });
      console.log('값', imageUrl);
      if (openGraph.image) {
        mutation.mutate({
          roomId: itemInfo.roomId,
          name: name,
          cost: cost,
          imageUrl: imageUrl,
          url: link,
        });
      } else {
        mutation.mutate({
          roomId: itemInfo.roomId,
          name: name,
          cost: cost,
          imageUrl: '',
          url: link,
        });
      }
    }
  }

  return (
    <S.AddGiftFooterWrapper>
      <GiftAddNextBtn isActivated={isActivated} onClick={onClickBtn} children='완료' />
    </S.AddGiftFooterWrapper>
  );
};
export default AddGiftFooter;
