import { useState } from 'react';
import MiniTimer from '../../common/MiniTimer/MiniTimer';
import AddGiftFooter from '../AddGiftFooter/AddGiftFooter';
import GiftStatusBar from '../AddGiftLink/common/GiftStatusBar/GiftStatusBar';
import ShowLink from '../ShowLink/ShowLink';
import * as S from './common/AddGiftLayout.styled';
import AddGiftImg from './common/AddGiftImg/AddGiftImg';
import WithoutLinkWriteItemInfo from './common/WriteItemInfo/WithoutLinkWriteItemInfo';
import Modal from '../../common/Modal/Modal';

interface AddGiftWithLinkLayoutProps {
  roomId: number;
  linkText: string;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setLinkText: React.Dispatch<React.SetStateAction<string>>;
}
// 직접 입력 화면
function AddGiftWithoutLinkLayout({
  roomId,
  setStep,
  linkText,
  setLinkText,
}: AddGiftWithLinkLayoutProps) {
  const [isActivated, setIsActivated] = useState(false);
  const [nameText, setNameText] = useState<string>('');
  const [priceText, setPriceText] = useState<number | null>(null);
  const [imageUrl, setImageUrl] = useState<string>('');

  const itemInfo = {
    roomId: roomId,
  };

  const checkPriceNull = (price: number | null) => {
    if (price === null) {
      return 0;
    } else {
      return price;
    }
  };

  const now = new Date();

  const handleClickConfirmClick = () => {
    setStep((prev) => prev + 1);
  };
  return (
    <S.AddGiftWithLinkLayoutWrapper>
        <Modal onConfirmClick={handleClickConfirmClick}>
          상품 데이터를 불러올 수 없어요 <br /> 직접 입력해주세요
        </Modal>
          <S.AddGiftWithLinkHeader>
            <MiniTimer time={now} />
          </S.AddGiftWithLinkHeader>
          <GiftStatusBar registeredGiftNum={1} isMargin={false} />
          <AddGiftImg imageUrl={imageUrl} setImageUrl={setImageUrl} />
          <ShowLink />
          <WithoutLinkWriteItemInfo
            setIsActivated={setIsActivated}
            setName={setNameText}
            setCost={setPriceText}
            setUrl={setLinkText}
            name={nameText}
            cost={priceText}
            url={linkText}
          />
          <AddGiftFooter
            setStep={setStep}
            isActivated={isActivated}
            itemInfo={itemInfo}
            link={linkText}
            name={nameText}
            imageUrl={imageUrl}
            cost={checkPriceNull(priceText)}
          />
    </S.AddGiftWithLinkLayoutWrapper>
  );
}

export default AddGiftWithoutLinkLayout;
