import { useState } from 'react';
import MiniTimer from '../../common/MiniTimer/MiniTimer';
import AddGiftFooter from '../AddGiftFooter/AddGiftFooter';
import GiftStatusBar from '../AddGiftLink/common/GiftStatusBar/GiftStatusBar';
import ShowLink from '../ShowLink/ShowLink';
import WriteItemInfo from './common/WriteItemInfo/WriteItemInfo';
import * as S from './common/AddGiftLayout.styled';
import AddGiftImg from './common/AddGiftImg/AddGiftImg';
import Modal from '../../common/Modal/Modal';

interface AddGiftWithLinkLayoutProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const AddGiftWithLinkLayout = ({ setStep }: AddGiftWithLinkLayoutProps) => {
  const [isActivated, setIsActivated] = useState(true);
  const [isModalOn, setIsModalOn] = useState(false);
  const handleClickConfirmClick = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <S.AddGiftWithLinkLayoutWrapper>
      {isModalOn ? (
        <Modal onConfirmClick={handleClickConfirmClick}>
          상품 데이터를 불러올 수 없어요 <br /> 직접 입력해주세요
        </Modal>
      ) : (
        <></>
      )}

      <S.AddGiftWithLinkHeader>
        <MiniTimer time='00:00:00' />
      </S.AddGiftWithLinkHeader>
      <GiftStatusBar registeredGiftNum={1} isMargin={false} />
      <AddGiftImg />
      <ShowLink />
      <WriteItemInfo setIsActivated={setIsActivated} isLink={true} />
      <AddGiftFooter setStep={setStep} isActivated={isActivated} />
    </S.AddGiftWithLinkLayoutWrapper>
  );
};

export default AddGiftWithLinkLayout;
