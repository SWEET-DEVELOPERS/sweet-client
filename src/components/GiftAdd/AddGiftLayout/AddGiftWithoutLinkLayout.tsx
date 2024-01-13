import { useState } from 'react';
import IcPlusImageFinal from '../../../assets/svg/IcPlusImageFinal';
import MiniTimer from '../../common/MiniTimer/MiniTimer';
import AddGiftFooter from '../AddGiftFooter/AddGiftFooter';
import GiftStatusBar from '../AddGiftLink/common/GiftStatusBar/GiftStatusBar';
import ShowLink from '../ShowLink/ShowLink';
import WriteItemInfo from './common/WriteItemInfo/WriteItemInfo';
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
      <GiftStatusBar registeredGiftNum={1} isMargin={false} />
      <S.ThumbnailWrapper>
        <IcPlusImageFinal style={{ width: '5rem', height: '5rem' }} />
      </S.ThumbnailWrapper>
      <ShowLink />
      <WriteItemInfo setIsActivated={setIsActivated} isLink={false} />
      <AddGiftFooter setStep={setStep} isActivated={isActivated} />
    </S.AddGiftWithLinkLayoutWrapper>
  );
};

export default AddGiftWithoutLinkLayout;
