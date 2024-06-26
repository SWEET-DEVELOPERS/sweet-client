import IcLink from '../../../assets/svg/IcLink';
import useClipboard from '../../../hooks/useCopyClip';
import { RoomInfoType } from '../../../types/room';
import CountDownTimer from '../CountDownTimer/CountDownTimer';
import * as S from './GiftHomeSummary.styled';

interface GiftHomeSummaryProps {
  data: RoomInfoType;
  isBtn: boolean;
}

export const GiftHomeSummary = ({ data, isBtn }: GiftHomeSummaryProps) => {
  const baseURL = import.meta.env.VITE_APP_BASE_URL_KAKAO;
  console.log('isBtn', isBtn);
  const { handleCopyToClipboard } = useClipboard(isBtn);

  return (
    <S.GiftHomeSummaryBackground>
      <S.GiftHomeSummaryWrapper>
        <S.FriendsNumber>{data.gifterNumber}명의 친구들이 함께하는 중</S.FriendsNumber>
        <S.GiftHomeSummaryTitle>
          <S.PinkTitle>{data.gifteeName}</S.PinkTitle>님의
        </S.GiftHomeSummaryTitle>
        <S.GiftHomeSummaryTitle>선물을 함께 준비해요</S.GiftHomeSummaryTitle>
        <S.CopyLinkBtnWrapper
          onClick={() => handleCopyToClipboard(`${baseURL}result/${data.invitationCode}`)}
        >
          <IcLink style={{ width: '1.7rem', height: '1.7rem' }} />
          <S.Caption02Text>초대 링크 복사</S.Caption02Text>
        </S.CopyLinkBtnWrapper>
        <S.Body09Text>선물 토너먼트까지</S.Body09Text>

        <CountDownTimer targetDate={new Date(data.tournamentStartDate)} giftee={data.gifteeName} />
      </S.GiftHomeSummaryWrapper>
    </S.GiftHomeSummaryBackground>
  );
};

export default GiftHomeSummary;
