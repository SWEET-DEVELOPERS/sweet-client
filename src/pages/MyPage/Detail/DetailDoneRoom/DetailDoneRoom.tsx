import { useNavigate } from 'react-router-dom';
import { IcLogoEmpty } from '../../../../assets/svg';
import DoneCardRoom from '../../../../components/CardRoom/DoneCardRoom';
import BtnSmallStroke from '../../../../components/common/Button/Cta/SmallStroke/BtnSmallStroke';
import useGetDoneRoom from '../../../../hooks/queries/member/useGetClosedRoom';
import { ClosedRoomArrayType } from '../../../../types/member';
import * as S from './DetailDoneRoom.style';
import LeftIconHeader from '../../../../components/LeftIconHeader/LeftIconHeader';
import EmptyView from '../EmptyView/EmptyView';

const DetailDoneRoom = () => {
  const navigate = useNavigate();
  const data = useGetDoneRoom()?.data;

  const renderDoneRoomCard = (item: ClosedRoomArrayType, index: number) => (
    <DoneCardRoom
      key={index}
      user={item?.gifteeName}
      srcImage={item?.imageUrl}
      userCount={item?.gifterNumber}
      onClick={() => navigate(`/tournament-ranking/${item.gifteeName}/${item.roomId}`)}
    />
  );

  return (
    <S.DetailDoneRoomWrapper>
      <LeftIconHeader title='종료된 선물방' />
      <>
        {Array.isArray(data) && data.length > 0 ? (
          <S.RoomWrapper>
            {data.map((item, index) => renderDoneRoomCard(item, index))}
          </S.RoomWrapper>
        ) : (
          <EmptyView title='종료된 선물방' />
        )}
      </>
    </S.DetailDoneRoomWrapper>
  );
};

export default DetailDoneRoom;
