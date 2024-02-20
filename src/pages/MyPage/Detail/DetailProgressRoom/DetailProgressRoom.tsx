import { useNavigate } from 'react-router-dom';
import { IcLogoEmpty } from '../../../../assets/svg';
import EditCardRoom from '../../../../components/CardRoom/EditCardRoom';
import ProgressCardRoom from '../../../../components/CardRoom/ProgressCardRoom';
import BtnSmallStroke from '../../../../components/common/Button/Cta/SmallStroke/BtnSmallStroke';
import useGetActiveRoom from '../../../../hooks/queries/member/useGetActiveRoom';
import DateCheck from '../../../../components/DateCheck/DateCheck';
import { ActiveRoomArrayType } from '../../../../types/member';
import * as S from './DetailProgress.style';
import LeftIconHeader from '../../../../components/LeftIconHeader/LeftIconHeader';

const DetailProgressRoom = () => {
  const navigate = useNavigate();
  const data = useGetActiveRoom()?.data;

  const getNavigateLink = (item: ActiveRoomArrayType) => {
    const isFuture = DateCheck({ date: item.tournamentStartDate });
    return isFuture ? `/gift-home/${item.roomId}` : `/tournament/${item.gifteeName}/${item.roomId}`;
  };

  const renderRoomCard = (item: ActiveRoomArrayType, index: number) => {
    const CardComponent = item.isOwner ? EditCardRoom : ProgressCardRoom;
    return (
      <CardComponent
        key={index}
        user={item.gifteeName || ''}
        userCount={item.gifterNumber || 0}
        srcImage={item.imageUrl || ''}
        roomId={item.roomId}
        date={item.tournamentStartDate}
        onClick={() => navigate(getNavigateLink(item))}
      />
    );
  };

  return (
    <S.DetailProgressRoomWrapper>
      <LeftIconHeader title='진행중인 선물방' />
      <S.RoomWrapper>
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item, index) => renderRoomCard(item, index))
        ) : (
          <S.EmptyWrapper title='진행중인 선물방'>
            <IcLogoEmpty style={{ width: '8rem', height: '6.4rem' }} />
            <S.EmptyText>준비했던 선물이 없어요</S.EmptyText>
            <BtnSmallStroke customStyle={{ margin: '1.6rem' }}>새로운 선물 준비하기</BtnSmallStroke>
          </S.EmptyWrapper>
        )}
      </S.RoomWrapper>
    </S.DetailProgressRoomWrapper>
  );
};

export default DetailProgressRoom;
