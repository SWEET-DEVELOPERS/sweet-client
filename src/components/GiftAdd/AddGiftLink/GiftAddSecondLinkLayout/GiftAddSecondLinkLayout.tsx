import { useState } from 'react';
import GiftAddBtnWrapper from '../common/GiftAddBtnWrapper/GiftAddBtnWrapper';
import GiftStatusBar from '../common/GiftStatusBar/GiftStatusBar';
import InputUrl from '../common/InputUrl/InputUrl';
import LinkAddHeader from '../common/LinkAddHeader/LinkAddHeader';
import * as S from '../common/GiftAddLinkLayout.styled';
import Title from '../../../common/title/Title';

interface GiftAddSecondLinkLayoutProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setLink: React.Dispatch<React.SetStateAction<string>>;
  link: string;
}

const GiftAddSecondLinkLayout = ({ setStep, setLink, link }: GiftAddSecondLinkLayoutProps) => {
  const [isActivated, setIsActivated] = useState(false);

  const onClick = () => {
    setStep(1);
  };

  return (
    <S.GiftAddLinkLayoutWrapper>
      <LinkAddHeader />
      <GiftStatusBar registeredGiftNum={2} isMargin={true} />
      <Title title='두번째 상품의 ' />
      <Title title='판매 링크를 입력해주세요' />
      <InputUrl setIsActivated={setIsActivated} text={link} setText={setLink} />
      <GiftAddBtnWrapper setStep={setStep} isActivated={isActivated} onClick={onClick} />
    </S.GiftAddLinkLayoutWrapper>
  );
};

export default GiftAddSecondLinkLayout;
