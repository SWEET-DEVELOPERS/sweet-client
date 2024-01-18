import { useState } from 'react';
import GiftAddFirstLinkLayout from '../../components/GiftAdd/AddGiftLink/GiftAddFirstLinkLayout/GiftAddFirstLinkLayout';
import AddGiftWithLinkLayout from '../../components/GiftAdd/AddGiftLayout/AddGiftWithLinkLayout';
import AddGiftWithoutLinkLayout from '../../components/GiftAdd/AddGiftLayout/AddGiftWithoutLinkLayout';
import GiftAddSecondLinkLayout from '../../components/GiftAdd/AddGiftLink/GiftAddSecondLinkLayout/GiftAddSecondLinkLayout';
import GiftAddPageLayout from '../../components/GiftAdd/GiftAddPageLayout/GiftAddPageLayout';
import { OpenGraphResponseType } from '../../types/etc';
import { useLocation } from 'react-router-dom';

const GiftAddPage = () => {
  const [step, setStep] = useState(0);
  const [linkText, setLinkText] = useState<string>('');
  const [openGraph, setOpenGraph] = useState<OpenGraphResponseType>({ title: '', image: '' });

  const location = useLocation();

  const params = location.search;
  const newParams = new URLSearchParams(params);
  const roomId = newParams.get('roomId');
  const targetDate = newParams.get('targetTime');

  const roomIdNumber = parseInt(roomId || '');

  switch (step) {
    case 0:
      return (
        <GiftAddPageLayout setStep={setStep} roomId={roomId || ''} targetDate={targetDate || ''} />
      );

    case 1:
      return (
        <GiftAddFirstLinkLayout
          setStep={setStep}
          setLinkText={setLinkText}
          openGraph={openGraph}
          setOpenGraph={setOpenGraph}
          targetDate={targetDate || ''}
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

    case 4:
      return (
        <GiftAddSecondLinkLayout
          setStep={setStep}
          setLink={setLinkText}
          link={linkText}
          targetDate={targetDate || ''}
        />
      );
  }
};

export default GiftAddPage;
