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
  link: string;
  roomId: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const AddGiftWithLinkLayout = ({ link, roomId, setStep }: AddGiftWithLinkLayoutProps) => {
  const [isActivated, setIsActivated] = useState(false);
  const [isModalOn, setIsModalOn] = useState(false);
  const [nameText, setNameText] = useState<string>('');
  const [priceText, setPriceText] = useState<number>(0);
  const [imageUrl, setImageUrl] = useState<string>('');

  // 서버 통신으로 받은 시간 기준으로 미니 타이머 로직 추가 예정

  const handleClickConfirmClick = () => {
    setStep((prev) => prev + 1);
    // 빌드 에러 피하려고 그냥 넣었습니다!
    setIsModalOn(false);
  };

  const itemInfo = {
    roomId: roomId,
  };

  const now = new Date();

  return (
    <S.AddGiftWithLinkLayoutWrapper>
      {!link ? (
        <Modal onConfirmClick={handleClickConfirmClick}>
          상품 데이터를 불러올 수 없어요 <br /> 직접 입력해주세요
        </Modal>
      ) : (
        <></>
      )}
      <S.AddGiftWithLinkHeader>
        <MiniTimer time={now} />
      </S.AddGiftWithLinkHeader>
      <GiftStatusBar registeredGiftNum={1} isMargin={false} />
      <AddGiftImg />
      <ShowLink />
      <WriteItemInfo
        setIsActivated={setIsActivated}
        setName={setNameText}
        setCost={setPriceText}
        name={nameText}
        cost={priceText}
      />
      <AddGiftFooter
        name={nameText}
        cost={priceText}
        imageUrl={imageUrl}
        link={link}
        setStep={setStep}
        isActivated={isActivated}
        itemInfo={itemInfo}
      />
    </S.AddGiftWithLinkLayoutWrapper>
  );
};

export default AddGiftWithLinkLayout;
