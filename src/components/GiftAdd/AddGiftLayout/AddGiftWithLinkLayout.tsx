import { useState } from 'react';
import IcPlusImageFinal from '../../../assets/svg/IcPlusImageFinal';
import MiniTimer from '../../common/MiniTimer/MiniTimer';
import AddGiftFooter from '../AddGiftFooter/AddGiftFooter';
import GiftStatusBar from '../AddGiftLink/common/GiftStatusBar/GiftStatusBar';
import ShowLink from '../ShowLink/ShowLink';
import WriteItemInfo from './common/WriteItemInfo/WriteItemInfo';
import * as S from './common/AddGiftLayout.styled';
import IcImgEditBtn from '../../../assets/svg/IcImgEditBtn';

interface AddGiftWithLinkLayoutProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const AddGiftWithLinkLayout = ({ setStep }: AddGiftWithLinkLayoutProps) => {
  const [isActivated, setIsActivated] = useState(true);

  return (
    <S.AddGiftWithLinkLayoutWrapper>
      <S.AddGiftWithLinkHeader>
        <MiniTimer time='00:00:00' />
      </S.AddGiftWithLinkHeader>
      <GiftStatusBar registeredGiftNum={1} isMargin={false} />
      <S.ThumbnailWrapper>
        <IcImgEditBtn
          style={{
            position: 'absolute',
            width: '2.8rem',
            height: '2.8rem',
            top: '0.8rem',
            right: '0.8rem',
          }}
        />
        <IcPlusImageFinal style={{ width: '5rem', height: '5rem' }} />
      </S.ThumbnailWrapper>
      <ShowLink />
      <WriteItemInfo setIsActivated={setIsActivated} isLink={true} />
      <AddGiftFooter setStep={setStep} isActivated={isActivated} />
    </S.AddGiftWithLinkLayoutWrapper>
  );
};

export default AddGiftWithLinkLayout;
