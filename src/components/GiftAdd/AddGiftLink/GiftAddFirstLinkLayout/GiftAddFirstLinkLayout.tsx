import { useState } from 'react';
import GiftAddBtnWrapper from '../common/GiftAddBtnWrapper/GiftAddBtnWrapper';
import GiftStatusBar from '../common/GiftStatusBar/GiftStatusBar';
import InputUrl from '../common/InputUrl/InputUrl';
import LinkAddHeader from '../common/LinkAddHeader/LinkAddHeader';
import * as S from '../common/GiftAddLinkLayout.styled';
import Title from '../../../common/title/Title';
import usePostOpenGraph from '../../../../hooks/queries/etc/usePostOpengraph';

interface GiftAddFirstLinkLayoutProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setLinkText: React.Dispatch<React.SetStateAction<string>>;
}

const GiftAddFirstLinkLayout = ({ setStep }: GiftAddFirstLinkLayoutProps) => {
  const [isActivated, setIsActivated] = useState(false);
  const [text, setText] = useState<string>('');
  const { mutation } = usePostOpenGraph({ body: { BaseURL: text } });
  const fetchOpenGraph = async (BaseUrl: string) => {
    try {
      const response = await mutation.mutateAsync({ BaseURL: BaseUrl });
      const giftTitle = response.data.title;
      const giftImage = response.data.image;
      console.log('OpenGraph data:', { giftTitle, giftImage });
    } catch (error) {
      console.error('Error fetching OpenGraph:', error);
    }
  };

  const onClick = () => {
    // 서버 통신 후 링크 유효성 검사 결과 기준으로 모달 띄우거나 다음 화면으로 넘어가기
    fetchOpenGraph(text);
    setStep(2);
  };

  return (
    <S.GiftAddLinkLayoutWrapper>
      <LinkAddHeader />
      <GiftStatusBar registeredGiftNum={1} isMargin={true} />
      <Title title='첫번째 상품의 ' />
      70
      <Title title='판매 링크를 입력해주세요' />
      <InputUrl text={text} setText={setText} setIsActivated={setIsActivated} />
      <GiftAddBtnWrapper setStep={setStep} isActivated={isActivated} onClick={onClick} />
    </S.GiftAddLinkLayoutWrapper>
  );
};

export default GiftAddFirstLinkLayout;
