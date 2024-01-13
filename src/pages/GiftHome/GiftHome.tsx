import { useNavigate } from 'react-router-dom';
import GiftHome2030Gifts from '../../components/GiftHome/GiftHome2030Gifts/GiftHome2030Gifts';
import GiftHomeFriendsGifts from '../../components/GiftHome/GiftHomeFriendsGifts/GiftHomeFriendsGifts';
import GiftHomeHeader from '../../components/GiftHome/GiftHomeHeader/GiftHomeHeader';
import GiftHomeSummary from '../../components/GiftHome/GiftHomeSummary/GiftHomeSummary';
import BtnFill from '../../components/common/Button/Cta/fill/BtnFill';
import * as S from './GiftHome.styled';

export default function GiftHome() {
  const navigate = useNavigate();

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

  const handleClickBtn = () => {
    navigate('/addGift');
  };

  return (
    <S.GiftHomeWrapper>
      <GiftHomeHeader />
      <GiftHomeSummary data={userData} />
      <GiftHomeFriendsGifts data={exampleData} />
      <GiftHome2030Gifts data={exampleData} />
      <BtnFill
        children={'선물 등록하기'}
        onClick={handleClickBtn}
        customStyle={{ position: 'fixed', bottom: '0', marginBottom: '2rem' }}
      />
    </S.GiftHomeWrapper>
  );
}
