import { useState } from 'react';
import GiftAddBtnWrapper from '../common/GiftAddBtnWrapper/GiftAddBtnWrapper';
import GiftStatusBar from '../common/GiftStatusBar/GiftStatusBar';
import InputUrl from '../common/InputUrl/InputUrl';
import LinkAddHeader from '../common/LinkAddHeader/LinkAddHeader';
import * as S from '../common/GiftAddLinkLayout.styled';
import Title from '../../../common/title/Title';
import usePostOpenGraph from '../../../../hooks/queries/etc/usePostOpengraph';
import { OpenGraphResponseType } from '../../../../types/etc';
import { AddGiftInfo } from '../../../../types/gift';
import { useUpdateGifteeNameContext } from '../../../../context/GifteeName/GifteeNameContext';

interface GiftAddFirstLinkLayoutProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setLinkText: React.Dispatch<React.SetStateAction<string>>;
  linkText: string;
  itemNum: number;
  step: number;
  setOpenGraph: React.Dispatch<React.SetStateAction<OpenGraphResponseType>>;
  targetDate: string;
  setModalStatus: React.Dispatch<React.SetStateAction<boolean>>;
  updateAddGiftInfo: (newInfo: Partial<AddGiftInfo>) => void;
  addGiftInfo: AddGiftInfo;
  // gifteeName: string;
}

const GiftAddFirstLinkLayout = ({
  setStep,
  setLinkText,
  itemNum,
  step,
  setOpenGraph,
  targetDate,
  setModalStatus,
  updateAddGiftInfo,
  addGiftInfo,
  // gifteeName
}: GiftAddFirstLinkLayoutProps) => {
  const [isActivated, setIsActivated] = useState(!!addGiftInfo.url);
  const [text, setText] = useState<string>(addGiftInfo.url);
  const { mutation } = usePostOpenGraph({ body: { BaseURL: text } });

  const { gifteeName } = useUpdateGifteeNameContext();

  const fetchOpenGraph = (BaseUrl: string) => {
    try {
      const response = mutation.mutate(
        { BaseURL: BaseUrl },
        {
          onSuccess: (data) => {
            const giftTitle = data.title;
            const giftImage = data.image;
            setOpenGraph({ title: giftTitle, image: giftImage });
            console.log('오픈그래프 정보를 가져왔습니다.', { giftTitle, giftImage });
            console.log('작성한 링크 텍스트', text);
            console.log('fetchOpenGraph 속 response', response);

            setLinkText(text);
            updateAddGiftInfo({ url: text, imageUrl: giftImage });
            setStep(2);
          },
          onError: () => {
            updateAddGiftInfo({ imageUrl: '' });
            setOpenGraph({ title: '', image: '' });
            setModalStatus(true);
            setStep(3);
          },
        },
      );
    } catch (error) {
      setStep(3);
    }
  };

  const onClick = async () => {
    // 서버 통신 후 링크 유효성 검사 결과 기준으로 모달 띄우거나 다음 화면으로 넘어가기
    fetchOpenGraph(text);
  };

  return (
    <S.GiftAddLinkLayoutWrapper>
      <LinkAddHeader
        targetDate={targetDate}
        setStep={setStep}
        step={step}
        url={text}
        updateAddGiftInfo={updateAddGiftInfo}
        gifteeName={gifteeName}
      />
      <GiftStatusBar registeredGiftNum={itemNum} isMargin={true} />
      <S.TitleWrapper>
        <Title>
          {itemNum === 0 ? '첫번째 상품의' : '두번째 상품의'}
          <br />
          판매 링크를 입력해주세요
        </Title>
      </S.TitleWrapper>
      <InputUrl text={text} setText={setText} setIsActivated={setIsActivated} />
      <GiftAddBtnWrapper setStep={setStep} isActivated={isActivated} onClick={onClick} />
    </S.GiftAddLinkLayoutWrapper>
  );
};

export default GiftAddFirstLinkLayout;
