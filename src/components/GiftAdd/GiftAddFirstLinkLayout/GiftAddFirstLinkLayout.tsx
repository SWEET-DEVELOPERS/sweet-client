import { useState } from 'react';
import GiftAddBtnWrapper from '../GiftAddBtnWrapper/GiftAddBtnWrapper';
import GiftStatusBar from '../GiftStatusBar/GiftStatusBar';
import InputUrl from '../InputUrl/InputUrl';
import LinkAddHeader from '../LinkAddHeader/LinkAddHeader';
import * as S from './GiftAddFirstLinkLayout.styled';
import Title from '../../common/title/Title';

interface GiftAddFirstLinkLayoutProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const GiftAddFirstLinkLayout = ({ setStep }: GiftAddFirstLinkLayoutProps) => {
  const [isActivated, setIsActivated] = useState(false);

  return (
    <S.GiftAddFirstLinkLayoutWrapper>
      <LinkAddHeader />
      <GiftStatusBar />
      <Title title='첫번째 상품의' />
      <Title title='판매 링크를 입력해주세요' />
      <InputUrl setIsActivated={setIsActivated} />
      <GiftAddBtnWrapper setStep={setStep} isActivated={isActivated} />
    </S.GiftAddFirstLinkLayoutWrapper>
  );
};

export default GiftAddFirstLinkLayout;
