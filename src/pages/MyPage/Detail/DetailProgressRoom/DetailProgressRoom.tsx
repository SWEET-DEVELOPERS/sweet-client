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
import EmptyView from '../EmptyView/EmptyView';

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
      <>
        {Array.isArray(data) && data.length > 0 ? (
          <S.RoomWrapper>{data.map((item, index) => renderRoomCard(item, index))}</S.RoomWrapper>
        ) : (
          <EmptyView title='진행중인 선물방' />
        )}
      </>
    </S.DetailProgressRoomWrapper>
  );
};

export default DetailProgressRoom;
