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
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
  setIsLoading,
  setIsModalOpen,
}: AddGiftFooterProps) => {
  const { mutation } = usePostGift(
    roomId,
    targetDate,
    setStep,
    updateAddGiftInfo,
    setIsLoading,
    setIsModalOpen,
  );
  const { putImageUrlToS3 } = usePutImageUrlToS3(roomId);
  const onClick = async () => {
    setIsLoading(true);
    const { imageUrlS3 } = await putImageUrlToS3({ fileName, file, roomId, setImageUrl });
    if (isActivated) {
      try {
        await mutation.mutateAsync({
          roomId: roomId,
          name: name,
          cost: cost,
          imageUrl: imageUrlS3,
          url: link,
        });
      } catch (error: any) {
        console.error('Mutation error:', error.message);
        if (error.message === 'Error: 중복된 선물 등록입니다.') {
          console.log('CHECK');
          setIsModalOpen(true);
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <S.AddGiftFooterWrapper>
      <GiftAddNextBtn isActivated={isActivated} onClick={onClick} children='완료' />
    </S.AddGiftFooterWrapper>
  );
};
export default AddGiftFooter;
