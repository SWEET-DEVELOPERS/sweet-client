import { useState } from 'react';
import GiftAddFirstLinkLayout from '../../components/GiftAdd/AddGiftLink/GiftAddFirstLinkLayout/GiftAddFirstLinkLayout';
import AddGiftWithLinkLayout from '../../components/GiftAdd/AddGiftLayout/AddGiftWithLinkLayout';
import AddGiftWithoutLinkLayout from '../../components/GiftAdd/AddGiftLayout/AddGiftWithoutLinkLayout';
import GiftAddSecondLinkLayout from '../../components/GiftAdd/AddGiftLink/GiftAddSecondLinkLayout/GiftAddSecondLinkLayout';
import GiftAddPageLayout from '../../components/GiftAdd/GiftAddPageLayout/GiftAddPageLayout';
import { OpenGraphResponseType } from '../../types/etc';
import { useLocation } from 'react-router-dom';

// interface GiftAddPage {
//   roomId: number;
// }

const GiftAddPage = () => {
  const [step, setStep] = useState(0);
  const [linkText, setLinkText] = useState<string>('');
  const [openGraph, setOpenGraph] = useState<OpenGraphResponseType>({ title: '', image: '' });

  const location = useLocation();
  const roomId = location.state.roomId;
  const targetDate = location.state.targetDate;

  switch (step) {
    case 0:
      return <GiftAddPageLayout setStep={setStep} roomId={roomId} />;

    case 1:
      return (
        <GiftAddFirstLinkLayout
          setStep={setStep}
          setLinkText={setLinkText}
          openGraph={openGraph}
          setOpenGraph={setOpenGraph}
        />
      );

    case 2:
      return (
        <AddGiftWithLinkLayout
          setStep={setStep}
          roomId={roomId}
          link={linkText}
          openGraph={openGraph}
        />
      );

    case 3:
      return (
        <AddGiftWithoutLinkLayout
          setStep={setStep}
          roomId={roomId}
          linkText={linkText}
          setLinkText={setLinkText}
        />
      );

    case 4:
      return <GiftAddSecondLinkLayout setStep={setStep} setLink={setLinkText} link={linkText} />;
  }
};

export default GiftAddPage;
