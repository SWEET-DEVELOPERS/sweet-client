import MiniTimer from '../../common/MiniTimer/MiniTimer';
import * as S from './GiftAddPageLayout.style';
import GiftAddButtonsWrapper from '../GiftAddButtons/GiftAddButtonsWrapper';
import GiftAddPageBottom from '../GiftAddPageBottomSection/GiftAddPageBottom';
import GiftAddPageLayoutHeader from './GiftAddPageLayoutHeader';
import useGetMyGift from '../../../hooks/queries/gift/useGetMyGift';
import EmptyGiftAddButtonsWrapper from '../GiftAddButtons/EmptyGiftAddButtonsWrapper';
import useDeleteMyGift from '../../../hooks/queries/gift/useDeleteMyGift';
import { useUpdateGifteeNameContext } from '../../../context/GifteeName/GifteeNameContext';

interface GiftAddPageLayoutProps {
  roomId: string;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  targetDate: string;
  itemNum: number;
  setItemNum: React.Dispatch<React.SetStateAction<number>>;
  // updateGifteeName: (newInfo: string) => void;
}

const GiftAddPageLayout = ({
  targetDate,
  roomId,
  setStep,
  setItemNum,
  // updateGifteeName,
}: GiftAddPageLayoutProps) => {
  const { updateGifteeName } = useUpdateGifteeNameContext();
  const roomIdNumber = parseInt(roomId);
  const { data } = useGetMyGift({ roomId: roomIdNumber });
  // updateGifteeName(data.data.giftee);
  setItemNum(data.data.myGiftDtoList.length);
  const parsedRoomId = parseInt(roomId);
  const { mutation } = useDeleteMyGift(parsedRoomId);

  const myGiftData = data.data.myGiftDtoList;
  const adPrice = '39,000';

  const handleClickAddBtn = () => {
    setStep(1);
  };

  const handleClickCancelBtn = (giftId: number) => {
    mutation.mutate(giftId);
  };

  return (
    <S.GiftAddPageWrapper>
      <GiftAddPageLayoutHeader title={'내가 등록한 선물'} />
      <MiniTimer targetDate={targetDate || ''} giftee={''} />
      <S.AddButtonsWrapper>
        {myGiftData.map((item, index) => (
          <GiftAddButtonsWrapper
            key={index}
            data={item}
            onCancelClick={() => handleClickCancelBtn(item.giftId)}
          />
        ))}
        {Array.from({ length: 2 - myGiftData.length }).map((_, index) => (
          <EmptyGiftAddButtonsWrapper key={index} onClick={handleClickAddBtn} />
        ))}
      </S.AddButtonsWrapper>
      <GiftAddPageBottom adPrice={adPrice} myGiftData={myGiftData} />
    </S.GiftAddPageWrapper>
  );
};

export default GiftAddPageLayout;
