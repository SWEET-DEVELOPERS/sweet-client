import { useState } from 'react';
import GiftAddBtnWrapper from '../common/GiftAddBtnWrapper/GiftAddBtnWrapper';
import GiftStatusBar from '../common/GiftStatusBar/GiftStatusBar';
import InputUrl from '../common/InputUrl/InputUrl';
import LinkAddHeader from '../common/LinkAddHeader/LinkAddHeader';
import * as S from '../common/GiftAddLinkLayout.styled';
import Title from '../../../common/title/Title';
import { GiftAddFirstLinkLayoutProps } from './GiftAddFirstLinkLayout';

export const GiftAddFirstLinkLayout = ({ setStep }: GiftAddFirstLinkLayoutProps) => {
  const [isActivated, setIsActivated] = useState(false);
  const [text, setText] = useState<string>('');

  const queryClient = useQueryClient();

  // Fetch the result from the cache
  const openGraphResult = queryClient.getQueryData('openGraph');

  const onClick = () => {
    // 서버 통신 후 링크 유효성 검사 결과 기준으로 모달 띄우거나 다음 화면으로 넘어가기
    setStep(2);
  };

  return (
    <S.GiftAddLinkLayoutWrapper>
      <LinkAddHeader />
      <GiftStatusBar registeredGiftNum={1} isMargin={true} />
      <Title title='첫번째 상품의 ' />
      <Title title='판매 링크를 입력해주세요' />
      <InputUrl text={text} setText={setText} setIsActivated={setIsActivated} />
      <GiftAddBtnWrapper setStep={setStep} isActivated={isActivated} onClick={onClick} />
    </S.GiftAddLinkLayoutWrapper>
  );
};
