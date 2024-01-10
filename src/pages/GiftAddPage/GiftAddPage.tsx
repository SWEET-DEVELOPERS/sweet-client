import GiftStatusBar from '../../components/GiftAdd/GiftStatusBar/GiftStatusBar';
import LinkAddHeader from '../../components/GiftAdd/LinkAddHeader/LinkAddHeader';
import { Title } from '../../components/common/title/Title.style';
import * as S from './GiftAddPage.styled';
import InputUrl from '../../components/GiftAdd/InputUrl/InputUrl';
import GiftAddBtnWrapper from '../../components/GiftAdd/GiftAddBtnWrapper/GiftAddBtnWrapper';
import { useState } from 'react';

const GiftAddPage = () => {
  const [step, setStep] = useState(1);
  const [isActivated, setIsActivated] = useState(false);

  return (
    <S.GiftAddPageWrapper>
      <LinkAddHeader />
      <GiftStatusBar />
      <Title style={{ marginTop: '2.4rem' }}>첫번째 상품의</Title>
      <Title style={{ marginBottom: '7.2rem' }}>판매 링크를 입력해주세요</Title>
      <InputUrl setIsActivated={setIsActivated} />
      <GiftAddBtnWrapper setStep={setStep} isActivated={isActivated} />
    </S.GiftAddPageWrapper>
  );
};

export default GiftAddPage;
