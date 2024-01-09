import { IcEmptyBox } from '../../assets/svg';
import MiniTimer from '../../components/common/MiniTimer/MiniTimer';
import * as S from './GiftAddPage.styled';

function GiftAddPage() {
  return (
    <S.GiftAddPageWrapper>
      {/* 헤더 추가 예정 */}
      <MiniTimer time={'00:00:00'} />
      <S.AddButtonsWrapper>
        <IcEmptyBox width={159} height={160} />
        <IcEmptyBox width={159} height={160} />
      </S.AddButtonsWrapper>
    </S.GiftAddPageWrapper>
  );
}

export default GiftAddPage;
