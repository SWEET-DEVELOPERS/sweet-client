import { useState } from 'react';
import IcPlusImageFinal from '../../../assets/svg/IcPlusImageFinal';
import MiniTimer from '../../common/MiniTimer/MiniTimer';
import AddGiftFooter from '../AddGiftFooter/AddGiftFooter';
import GiftStatusBar from '../GiftStatusBar/GiftStatusBar';
import ShowLink from '../ShowLink/ShowLink';
import WriteItemInfo from '../WriteItemInfo/WriteItemInfo';
import * as S from './common/AddGiftLayout.styled';

interface AddGiftWithLinkLayoutProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const AddGiftWithoutLinkLayout = ({ setStep }: AddGiftWithLinkLayoutProps) => {
  const [isActivated, setIsActivated] = useState(true);

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
      <WriteItemInfo setIsActivated={setIsActivated} />
      <AddGiftFooter setStep={setStep} isActivated={isActivated} />
    </S.AddGiftWithLinkLayoutWrapper>
  );
};

export default AddGiftWithoutLinkLayout;
