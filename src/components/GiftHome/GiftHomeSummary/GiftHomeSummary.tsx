import IcLink from '../../../assets/svg/IcLink';
import CountDownTimer from '../CountDownTimer/CountDownTimer';
import * as S from './GiftHomeSummary.styled';

interface GiftHomeSummaryProps {
  data: {
    friendsNumber: number;
    giftOwner: string;
    targetDate: Date;
  };
}

export default function GiftHomeSummary({ data }: GiftHomeSummaryProps) {
  return (
    <S.GiftHomeSummaryWrapper>
      <S.FriendsNumber>{data.friendsNumber}명의 친구들이 함께하는 중</S.FriendsNumber>
      <S.GiftHomeSummaryTitle>
        <S.PinkTitle>{data.giftOwner}</S.PinkTitle>님의
      </S.GiftHomeSummaryTitle>
      <S.GiftHomeSummaryTitle>선물을 함께 준비해요</S.GiftHomeSummaryTitle>
      <S.CopyLinkBtnWrapper>
        <IcLink style={{ width: '1.7rem', height: '1.7rem' }} />
        <S.Caption02Text>초대 링크 복사</S.Caption02Text>
      </S.CopyLinkBtnWrapper>
      <S.Body09Text>선물 토너먼트</S.Body09Text>
      <CountDownTimer targetDate={data.targetDate} />
    </S.GiftHomeSummaryWrapper>
  );
}