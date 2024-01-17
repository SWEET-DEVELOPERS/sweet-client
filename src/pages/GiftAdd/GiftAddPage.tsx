import { useState } from 'react';
import GiftAddFirstLinkLayout from '../../components/GiftAdd/AddGiftLink/GiftAddFirstLinkLayout/GiftAddFirstLinkLayout';
import AddGiftWithLinkLayout from '../../components/GiftAdd/AddGiftLayout/AddGiftWithLinkLayout';
import AddGiftWithoutLinkLayout from '../../components/GiftAdd/AddGiftLayout/AddGiftWithoutLinkLayout';
import GiftAddSecondLinkLayout from '../../components/GiftAdd/AddGiftLink/GiftAddSecondLinkLayout/GiftAddSecondLinkLayout';
import GiftAddPageLayout from '../../components/GiftAdd/GiftAddPageLayout/GiftAddPageLayout';

interface GiftAddPage {
  roomId: number;
}

const GiftAddPage = ({ roomId }: GiftAddPage) => {
  const [step, setStep] = useState(0);
  const [linkText, setLinkText] = useState<string>('');

  switch (step) {
    case 0:
      return <GiftAddPageLayout setStep={setStep} roomId={roomId} />;
                                                                                                                                              
    case 1:
      return <GiftAddFirstLinkLayout setStep={setStep} setLinkText={setLinkText} />;

    case 2:
      return <AddGiftWithLinkLayout setStep={setStep} roomId={roomId} link={linkText} />;

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
