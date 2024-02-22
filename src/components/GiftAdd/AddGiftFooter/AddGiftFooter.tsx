import usePostGift from '../../../hooks/queries/gift/usePostGift';
import GiftAddNextBtn from '../AddGiftLink/common/GiftAddNextBtn/GiftAddNextBtn';
import * as S from './AddGiftFooter.styled';
import { AddGiftInfo } from '../../../types/gift';
import usePutImageUrlToS3 from '../../../hooks/usePutImageUrlToS3';

interface AddGiftFooterProps {
  targetDate: string;
  roomId: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  isActivated: boolean;
  name: string;
  cost: number;
  link: string;
  file: File | null;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
  updateAddGiftInfo: (newInfo: Partial<AddGiftInfo>) => void;
  fileName: string;
}

const AddGiftFooter = ({
  targetDate,
  roomId,
  setStep,
  isActivated,
  name,
  cost,
  link,
  file,
  setImageUrl,
  fileName,
  updateAddGiftInfo,
}: AddGiftFooterProps) => {
  const { mutation } = usePostGift(roomId, targetDate, setStep, updateAddGiftInfo);
  const { putImageUrlToS3 } = usePutImageUrlToS3(roomId);

  const onClick = async () => {
    const { imageUrlS3 } = await putImageUrlToS3({ fileName, file, roomId, setImageUrl });
    if (isActivated) {
      mutation.mutate({
        roomId: roomId,
        name: name,
        cost: cost,
        imageUrl: imageUrlS3,
        url: link,
      });
    }
  };

  return (
    <S.AddGiftFooterWrapper>
      <GiftAddNextBtn isActivated={isActivated} onClick={onClick} children='완료' />
    </S.AddGiftFooterWrapper>
  );
};
export default AddGiftFooter;
