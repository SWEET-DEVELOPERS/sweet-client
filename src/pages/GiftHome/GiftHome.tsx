import { useLocation, useNavigate, useParams } from 'react-router-dom';
import GiftHome2030Gifts from '../../components/GiftHome/GiftHome2030Gifts/GiftHome2030Gifts';
import GiftHomeFriendsGifts from '../../components/GiftHome/GiftHomeFriendsGifts/GiftHomeFriendsGifts';
import GiftHomeHeader from '../../components/GiftHome/GiftHomeHeader/GiftHomeHeader';
import GiftHomeSummary from '../../components/GiftHome/GiftHomeSummary/GiftHomeSummary';
import BtnFill from '../../components/common/Button/Cta/fill/BtnFill';
import * as S from './GiftHome.styled';
import useGetRoomInfo from '../../hooks/queries/room/useGetRoomInfo';
import GiftHomeMyGifts from './GiftHomeMyGifts/GiftHomeMyGifts';

export default function GiftHome() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const roomId = searchParams.get('roomId');
  const navigate = useNavigate();
  const params = useParams();
  console.log('params', params);
  // console.log('roomIdString', roomIdString);
  // console.log('추출된 초대 코드', roomId);

  const { data } = useGetRoomInfo({ roomId: Number(roomId) });
  const tournamentStartTime = data?.data.tournamentStartDate;

  const handleClickBtn = () => {
    navigate(`/add-gift/${roomId}/${tournamentStartTime}`);
  };

  return (
    <S.GiftHomeWrapper>
      <GiftHomeHeader />
      <GiftHomeSummary data={data?.data} />
      {data?.data.roomMyGiftDtoList.length > 0 ? (
        <GiftHomeMyGifts
          roomId={Number(roomId)}
          data={data.data.roomMyGiftDtoList}
          targetDate={tournamentStartTime}
        />
      ) : (
        <></>
      )}

      <GiftHomeFriendsGifts
        roomId={Number(roomId)}
        targetDate={data.data.tournamentStartDate}
        data={data.data.roomFriendsGiftDtoList}
      />
      <GiftHome2030Gifts
        roomId={Number(roomId)}
        targetDate={data.data.tournamentStartDate}
        data={data.data.hotProductGiftDtoList}
      />
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
