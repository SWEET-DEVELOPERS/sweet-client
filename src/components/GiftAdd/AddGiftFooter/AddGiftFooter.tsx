import { useNavigate } from 'react-router-dom';
import usePostGift from '../../../hooks/queries/gift/usePostGift';
import GiftAddNextBtn from '../AddGiftLink/common/GiftAddNextBtn/GiftAddNextBtn';
import * as S from './AddGiftFooter.styled';
import usePutImageUrlToS3 from '../../../hooks/usePutImageUrlToS3';

interface AddGiftFooterProps {
  targetDate: string;
  roomId: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  isActivated: boolean;
  name: string;
  cost: number;
  imageUrl: string;
  link: string;
  file: File | null;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
  fileName: string;
}

function AddGiftFooter({
  targetDate,
  roomId,
  setStep,
  isActivated,
  name,
  cost,
  imageUrl,
  link,
  file,
  setImageUrl,

  fileName,
}: AddGiftFooterProps) {
  const navigate = useNavigate();
  const { mutation } = usePostGift(roomId, targetDate);
  const { putImageUrlToS3 } = usePutImageUrlToS3(roomId);

  const onClick = async () => {
    putImageUrlToS3({ fileName, file, roomId, setImageUrl });
    if (isActivated) {
      mutation.mutate(
        {
          roomId: roomId,
          name: name,
          cost: cost,
          imageUrl: imageUrl,
          url: link,
        },
        {
          onSuccess: () => {
            navigate(`/add-gift/${roomId}/${targetDate}`);
            setStep(0);
          },
        },
      );
    }
  };

  return (
    <S.AddGiftFooterWrapper>
      <GiftAddNextBtn isActivated={isActivated} onClick={onClick} children='완료' />
    </S.AddGiftFooterWrapper>
  );
}
export default AddGiftFooter;
