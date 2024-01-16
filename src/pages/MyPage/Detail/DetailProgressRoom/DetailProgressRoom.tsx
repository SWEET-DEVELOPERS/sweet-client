import { IcLogoEmpty } from '../../../../assets/svg';
import EditCardRoom from '../../../../components/CardRoom/EditCardRoom';
import ProgressCardRoom from '../../../../components/CardRoom/ProgressCardRoom';
import BtnSmallStroke from '../../../../components/common/Button/Cta/SmallStroke/BtnSmallStroke';
import useGetActiveRoom from '../../../../hooks/queries/member/useGetActiveRoom';
import * as S from './DetailProgress.style';

const DetailProgressRoom = () => {
  const data = useGetActiveRoom()?.data;
  console.log(data);
  return (
    <S.DetailProgressRoomWrapper>
      <S.RoomWrapper>
        {Array.isArray(data) ? (
          data.map((item, index) =>
            item.isOwner ? (
              <EditCardRoom
                key={index}
                user={item.gifteeName}
                userCount={item.gifterNumber}
                srcImage={item.imageUrl}
              />
            ) : (
              <ProgressCardRoom
                key={index}
                user={item.gifteeName || ''}
                userCount={item.gifterNumber || 0}
                srcImage={item.imageUrl || ''}
              />
            ),
          )
        ) : (
          <>
            <IcLogoEmpty />
            <S.EmptyText>준비했던 선물이 없어요</S.EmptyText>
            <BtnSmallStroke>새로운 선물 준비하기</BtnSmallStroke>
          </>
        )}
      </S.RoomWrapper>
    </S.DetailProgressRoomWrapper>
  );
};

export default DetailProgressRoom;
