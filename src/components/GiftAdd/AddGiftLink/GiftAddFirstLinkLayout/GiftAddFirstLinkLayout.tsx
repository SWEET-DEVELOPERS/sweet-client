import { useState } from 'react';
import GiftAddBtnWrapper from '../common/GiftAddBtnWrapper/GiftAddBtnWrapper';
import GiftStatusBar from '../common/GiftStatusBar/GiftStatusBar';
import InputUrl from '../common/InputUrl/InputUrl';
import LinkAddHeader from '../common/LinkAddHeader/LinkAddHeader';
import * as S from '../common/GiftAddLinkLayout.styled';
import Title from '../../../common/title/Title';

interface GiftAddFirstLinkLayoutProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const GiftAddFirstLinkLayout = ({ setStep }: GiftAddFirstLinkLayoutProps) => {
  const [isActivated, setIsActivated] = useState(false);

  const onClick = () => {
    setStep(2);
  };

  return (
    <S.GiftAddLinkLayoutWrapper>
      <LinkAddHeader />
      <GiftStatusBar registeredGiftNum={1} isMargin={true} />
      <Title title='첫번째 상품의 ' />
      <Title title='판매 링크를 입력해주세요' />
      <InputUrl setIsActivated={setIsActivated} />
      <GiftAddBtnWrapper setStep={setStep} isActivated={isActivated} onClick={onClick} />
    </S.GiftAddLinkLayoutWrapper>
  );
};

export default GiftAddFirstLinkLayout;
