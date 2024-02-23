import MiniTimer from '../../common/MiniTimer/MiniTimer';
import * as S from './GiftAddPageLayout.style';
import GiftAddButtonsWrapper from '../GiftAddButtons/GiftAddButtonsWrapper';
import GiftAddPageBottom from '../GiftAddPageBottomSection/GiftAddPageBottom';
import GiftAddPageLayoutHeader from './GiftAddPageLayoutHeader';
import useGetMyGift from '../../../hooks/queries/gift/useGetMyGift';
import EmptyGiftAddButtonsWrapper from '../GiftAddButtons/EmptyGiftAddButtonsWrapper';
import useDeleteMyGift from '../../../hooks/queries/gift/useDeleteMyGift';
import { useState } from 'react';
import DeleteModal from '../../common/Modal/DeleteModal';

interface GiftAddPageLayoutProps {
  roomId: string;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  targetDate: string;
  itemNum: number;
  setItemNum: React.Dispatch<React.SetStateAction<number>>;
}

const GiftAddPageLayout = ({ targetDate, roomId, setStep, setItemNum }: GiftAddPageLayoutProps) => {
  const roomIdNumber = parseInt(roomId);
  const { data } = useGetMyGift({ roomId: roomIdNumber });
  setItemNum(data.data.myGiftDtoList.length);

  const parsedRoomId = parseInt(roomId);
  const { mutation } = useDeleteMyGift(parsedRoomId);

  const myGiftData = data.data.myGiftDtoList;
  const adPrice = '39,000';

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedItem, setClickedItem] = useState<number>();
  // 모달 확인 클릭 버튼
  const handleClickDeleteClick = (giftId: number) => {
    setClickedItem(giftId);
    setIsModalOpen(true);
  };

  const handleClickAddBtn = () => {
    console.log('working?');
    setStep(1);
  };

  const handleClickConfirmDeleteBtn = (giftId: number) => {
    mutation.mutate(giftId);
    setIsModalOpen(false);
  };

  return (
    <S.GiftAddPageWrapper>
      {isModalOpen && (
        <DeleteModal
          onClickCancel={() => setIsModalOpen(false)}
          onClickDelete={handleClickConfirmDeleteBtn}
          clickedItem={clickedItem}
        >
          정말 상품을 삭제하시겠어요?
        </DeleteModal>
      )}
      <GiftAddPageLayoutHeader title={'내가 등록한 선물'} />
      <MiniTimer targetDate={targetDate || ''} />
      <S.AddButtonsWrapper>
        {myGiftData.map((item, index) => (
          <GiftAddButtonsWrapper
            key={index}
            data={item}
            onCancelClick={() => handleClickDeleteClick(item.giftId)}
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
