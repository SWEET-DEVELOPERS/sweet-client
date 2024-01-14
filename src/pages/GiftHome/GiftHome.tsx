import GiftHome2030Gifts from '../../components/GiftHome/GiftHome2030Gifts/GiftHome2030Gifts';
import GiftHomeFriendsGifts from '../../components/GiftHome/GiftHomeFriendsGifts/GiftHomeFriendsGifts';
import GiftHomeSummary from '../../components/GiftHome/GiftHomeSummary/GiftHomeSummary';
import * as S from './GiftHome.styled';

export default function GiftHome() {
  const userData = {
    friendsNumber: 42,
    giftOwner: '가나다라마바사아자차',
    targetDate: new Date('2024-01-13T00:10:00'),
  };

  const exampleData = [
    {
      price: '42000',
      title: '어센틱 로고 후디 멜란지 그레이',
      user: '왕보리',
      imgUrl: '',
    },
    {
      price: '37000',
      title: '오로라 레터링 케이크(소)',
      user: '왕보리',
      imgUrl: '',
    },
    {
      price: '42000',
      title: '어센틱 로고 후디 멜란지 그레이',
      user: '왕보리',
      imgUrl: '',
    },
    {
      price: '37000',
      title: '오로라 레터링 케이크(소)',
      user: '왕보리',
      imgUrl: '',
    },
  ];

  return (
    <S.GiftHomeWrapper>
      <GiftHomeSummary data={userData} />
      <GiftHomeFriendsGifts data={exampleData} />
      <GiftHome2030Gifts data={exampleData} />
    </S.GiftHomeWrapper>
  );
}
