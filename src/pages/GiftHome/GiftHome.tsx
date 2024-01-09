import GiftHome2030Gifts from '../../components/GiftHome/GiftHome2030Gifts/GiftHome2030Gifts';
import GiftHomeFriendsGifts from '../../components/GiftHome/GiftHomeFriendsGifts/GiftHomeFriendsGifts';
import GiftHomeSummary from '../../components/GiftHome/GiftHomeSummary/GiftHomeSummary';
import * as S from './GiftHome.styled';

export default function GiftHome() {
  return (
    <S.GiftHomeWrapper>
      <GiftHomeSummary />
      <GiftHomeFriendsGifts />
      <GiftHome2030Gifts />
    </S.GiftHomeWrapper>
  );
}
