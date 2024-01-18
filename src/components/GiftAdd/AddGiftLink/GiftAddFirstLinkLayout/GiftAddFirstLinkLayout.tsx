import { useState } from 'react';
import GiftAddBtnWrapper from '../common/GiftAddBtnWrapper/GiftAddBtnWrapper';
import GiftStatusBar from '../common/GiftStatusBar/GiftStatusBar';
import InputUrl from '../common/InputUrl/InputUrl';
import LinkAddHeader from '../common/LinkAddHeader/LinkAddHeader';
import * as S from '../common/GiftAddLinkLayout.styled';
import Title from '../../../common/title/Title';
import usePostOpenGraph from '../../../../hooks/queries/etc/usePostOpengraph';
import { OpenGraphResponseType } from '../../../../types/etc';
// import { LinkText } from '../../ShowLink/ShowLink.styled';
// import { useNavigate } from 'react-router-dom';

interface GiftAddFirstLinkLayoutProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setLinkText: React.Dispatch<React.SetStateAction<string>>;
  // openGraph: OpenGraphResponseType;
  setOpenGraph: React.Dispatch<React.SetStateAction<OpenGraphResponseType>>;
  targetDate: string;
}

const GiftAddFirstLinkLayout = ({
  setStep,
  setLinkText,
  // openGraph,
  setOpenGraph,
  targetDate,
}: GiftAddFirstLinkLayoutProps) => {
  const [isActivated, setIsActivated] = useState(false);
  const [text, setText] = useState<string>('');
  const { mutation } = usePostOpenGraph({ body: { BaseURL: text } });

  const fetchOpenGraph = async (BaseUrl: string) => {
    try {
      const response = await mutation.mutateAsync({ BaseURL: BaseUrl });
      const giftTitle = response.title;
      const giftImage = response.image;
      setOpenGraph({ title: giftTitle, image: giftImage });
      console.log('오픈그래프 정보를 가져왔습니다.', { giftTitle, giftImage });
      setLinkText(text);
    } catch (error) {
      setStep(3);
    }
  };

  const onClick = () => {
    // 서버 통신 후 링크 유효성 검사 결과 기준으로 모달 띄우거나 다음 화면으로 넘어가기
    fetchOpenGraph(text);
    console.log('링크 들어오고 있냐?????', text);
    setStep(2);
  };

  return (
    <S.GiftAddLinkLayoutWrapper>
      <LinkAddHeader targetDate={targetDate} />
      <GiftStatusBar registeredGiftNum={1} isMargin={true} />
      <Title title='첫번째 상품의 ' />
      <Title title='판매 링크를 입력해주세요' />
      <InputUrl text={text} setText={setText} setIsActivated={setIsActivated} />
      <GiftAddBtnWrapper setStep={setStep} isActivated={isActivated} onClick={onClick} />
    </S.GiftAddLinkLayoutWrapper>
  );
};

export default GiftAddFirstLinkLayout;
