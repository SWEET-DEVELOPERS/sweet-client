import DoneCardRoom from '../../../../components/CardRoom/DoneCardRoom';
import GiftRoomHeader from '../GiftRoomHeader/GiftRoomHeader';
import { ClosedRoomType } from '../../../../types/member';
import * as S from './DoneGiftView.style';
import { useNavigate } from 'react-router-dom';

interface DoneGiftViewProps {
  data: ClosedRoomType | undefined;
  style?: React.CSSProperties;
}

const DoneGiftView: React.FC<DoneGiftViewProps> = ({ data }) => {
  const navigate = useNavigate();

  const [doneData1, doneData2] = Array.isArray(data) ? data : [undefined, undefined];

  return (
    <S.DoneGiftViewWrapper>
      <GiftRoomHeader name='종료된 선물방' page='detail-done' doneData={data} />
      <S.RoomWrapper>
        {[doneData1, doneData2].map(
          (doneData, index) =>
            doneData && (
              <DoneCardRoom
                key={index}
                user={doneData.gifteeName || ''}
                srcImage={doneData.imageUrl || ''}
                userCount={doneData.gifterNumber || 0}
                onClick={() =>
                  navigate(`/tournament-ranking/${doneData.gifteeName}/${doneData.roomId}`)
                }
              />
            ),
        )}
        {!doneData1 && !doneData2 && <S.NoneRoom>지금 진행 중인 선물방이 없어요</S.NoneRoom>}
      </S.RoomWrapper>
    </S.DoneGiftViewWrapper>
  );
};

export default DoneGiftView;
