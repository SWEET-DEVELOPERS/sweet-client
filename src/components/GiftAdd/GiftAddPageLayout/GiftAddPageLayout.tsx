import MiniTimer from '../../common/MiniTimer/MiniTimer';
import * as S from './GiftAddPageLayout.style';
import GiftAddButtonsWrapper from '../GiftAddButtons/GiftAddButtonsWrapper';
import GiftAddPageBottom from '../GiftAddPageBottomSection/GiftAddPageBottom';
import GiftAddPageLayoutHeader from './GiftAddPageLayoutHeader';
import useGetMyGift from '../../../hooks/queries/gift/useGetMyGift';
import EmptyGiftAddButtonsWrapper from '../GiftAddButtons/EmptyGiftAddButtonsWrapper';
import useDeleteMyGift from '../../../hooks/queries/gift/useDeleteMyGift';

interface GiftAddPageLayoutProps {
  roomId: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  targetDate: string;
}

const GiftAddPageLayout = ({ roomId, setStep, targetDate }: GiftAddPageLayoutProps) => {
  const { data, isLoading, isError } = useGetMyGift({ roomId: Number(roomId) });

  if (isLoading) {
    return <div>LOADING...</div>;
  }

  if (isError || !data) {
    return <div>ERROR,,,</div>;
  }

  const myGiftData = data.data.myGiftDtoList;

  const adPrice = 39000;

  const handleClickAddBtn = () => {
    if (myGiftData.length === 0) {
      setStep(1);
    } else if (myGiftData.length === 1) {
      setStep(4);
    }
  };

  const handleClickCancelBtn = (giftId: number) => {
    const { mutation } = useDeleteMyGift({ giftId });
    mutation.mutate(giftId);
  };

  return (
    <S.GiftAddPageWrapper>
      <GiftAddPageLayoutHeader title={'내가 등록한 선물'} />
      <MiniTimer targetDate={targetDate} />
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
      <GiftAddPageBottom adPrice={adPrice} />
    </S.GiftAddPageWrapper>
  );
};

export default GiftAddPageLayout;
