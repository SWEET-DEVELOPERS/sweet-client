import { useNavigate } from 'react-router-dom';
import usePostGift from '../../../hooks/queries/gift/usePostGift';
import GiftAddNextBtn from '../AddGiftLink/common/GiftAddNextBtn/GiftAddNextBtn';
import * as S from './AddGiftFooter.styled';

interface AddGiftFooterProps {
  targetDate: string;
  roomId: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  isActivated: boolean;
  name: string;
  cost: number;
  imageUrl: string;
  link: string;
  saveImageUrl: (fileName: string) => Promise<void>;
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
  // 이미지 put하는 함수
  saveImageUrl,
  fileName,
}: AddGiftFooterProps) {
  const navigate = useNavigate();
  const { mutation } = usePostGift(roomId, targetDate);

  const onClick = async () => {
    await saveImageUrl(fileName);
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
