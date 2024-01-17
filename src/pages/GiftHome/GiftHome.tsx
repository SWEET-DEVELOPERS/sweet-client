import { useNavigate } from 'react-router-dom';
import GiftHome2030Gifts from '../../components/GiftHome/GiftHome2030Gifts/GiftHome2030Gifts';
import GiftHomeFriendsGifts from '../../components/GiftHome/GiftHomeFriendsGifts/GiftHomeFriendsGifts';
import GiftHomeHeader from '../../components/GiftHome/GiftHomeHeader/GiftHomeHeader';
import GiftHomeSummary from '../../components/GiftHome/GiftHomeSummary/GiftHomeSummary';
import BtnFill from '../../components/common/Button/Cta/fill/BtnFill';
import * as S from './GiftHome.styled';
import useGetRoomInfo from '../../hooks/queries/room/useGetRoomInfo';

interface GiftHomeProps {
  roomId: number;
}

export default function GiftHome({ roomId }: GiftHomeProps) {
  const navigate = useNavigate();

  const { data, isLoading, isError } = useGetRoomInfo({ roomId: Number(roomId) });

  if (isLoading) {
    return <div>LOADING...</div>;
  }

  if (isError || !data) {
    return <div>ERROR,,,</div>;
  }

  const handleClickBtn = () => {
    navigate('/add-gift');
  };

  return (
    <S.GiftHomeWrapper>
      <GiftHomeHeader />
      <GiftHomeSummary data={data.data} />
      <GiftHomeFriendsGifts data={data.data.roomFriendsGiftDtoList} />
      <GiftHome2030Gifts data={data.data.hotProductGiftDtoList} />
      <BtnFill
        children={'선물 등록하기'}
        onClick={handleClickBtn}
        customStyle={{
          position: 'fixed',
          bottom: '0',
          marginBottom: '2rem',
          width: '33.5rem',
          padding: '1.5rem 8.1rem 1.6rem 8.1rem',
        }}
      />
    </S.GiftHomeWrapper>
  );
}
