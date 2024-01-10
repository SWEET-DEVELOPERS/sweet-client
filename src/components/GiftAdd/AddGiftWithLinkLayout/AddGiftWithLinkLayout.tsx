import IcPlusImageFinal from '../../../assets/svg/IcPlusImageFinal';
import MiniTimer from '../../common/MiniTimer/MiniTimer';
import GiftStatusBar from '../GiftStatusBar/GiftStatusBar';
import ShowLink from '../ShowLink/ShowLink';
import WriteItemInfo from '../WriteItemInfo/WriteItemInfo';
import * as S from './AddGiftWithLinkLayout.styled';

const AddGiftWithLinkLayout = () => {
  return (
    <S.AddGiftWithLinkLayoutWrapper>
      <S.AddGiftWithLinkHeader>
        <MiniTimer time='00:00:00' />
      </S.AddGiftWithLinkHeader>
      <GiftStatusBar />
      <S.ThumbnailWrapper>
        <IcPlusImageFinal style={{ width: '5rem', height: '5rem' }} />
      </S.ThumbnailWrapper>
      <ShowLink />
      <WriteItemInfo />
    </S.AddGiftWithLinkLayoutWrapper>
  );
};

export default AddGiftWithLinkLayout;
