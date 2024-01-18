import { useState } from 'react';
import GiftAddFirstLinkLayout from '../../components/GiftAdd/AddGiftLink/GiftAddFirstLinkLayout/GiftAddFirstLinkLayout';
import AddGiftWithoutLinkLayout from '../../components/GiftAdd/AddGiftLayout/AddGiftWithoutLinkLayout';
import GiftAddSecondLinkLayout from '../../components/GiftAdd/AddGiftLink/GiftAddSecondLinkLayout/GiftAddSecondLinkLayout';
import GiftAddPageLayout from '../../components/GiftAdd/GiftAddPageLayout/GiftAddPageLayout';
import { OpenGraphResponseType } from '../../types/etc';
import { useLocation } from 'react-router-dom';
import AddGiftWithLinkLayout from '../../components/GiftAdd/AddGiftLayout/AddGiftWithLinkLayout';

const GiftAddPage = () => {
  const [step, setStep] = useState(0);
  const [linkText, setLinkText] = useState<string>('');
  const [openGraph, setOpenGraph] = useState<OpenGraphResponseType>({ title: '', image: '' });
  const [itemNum, setItemNum] = useState(0);

  const location = useLocation();

  const params = location.search;
  const newParams = new URLSearchParams(params);
  const roomId = newParams.get('roomId');
  const targetDate = newParams.get('targetTime');

  const roomIdNumber = parseInt(roomId || '');

  switch (step) {
    case 0:
      return (
        <GiftAddPageLayout
          step={step}
          setStep={setStep}
          roomId={roomId || ''}
          targetDate={targetDate || ''}
          setItemNum={setItemNum}
          itemNum={itemNum}
        />
      );

    case 1:
      return (
        <GiftAddFirstLinkLayout
          linkText={linkText}
          setStep={setStep}
          setLinkText={setLinkText}
          setOpenGraph={setOpenGraph}
          targetDate={targetDate || ''}
          itemNum={itemNum}
        />
      );

    case 2:
      return (
        <AddGiftWithLinkLayout
          setStep={setStep}
          roomId={roomIdNumber}
          link={linkText}
          openGraph={openGraph}
          targetDate={targetDate || ''}
        />
      );

    case 3:
      return (
        <AddGiftWithoutLinkLayout
          setStep={setStep}
          roomId={roomIdNumber}
          linkText={linkText}
          setLinkText={setLinkText}
          targetDate={targetDate || ''}
        />
      );

    // case 4:
    //   return (
    //     <GiftAddSecondLinkLayout
    //       setStep={setStep}
    //       setLinkText={setLinkText}
    //       openGraph={openGraph}
    //       setOpenGraph={setOpenGraph}
    //       targetDate={targetDate || ''}
    //     />
    //   );
  }
};

export default GiftAddPage;
