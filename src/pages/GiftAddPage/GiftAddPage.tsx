import { useState } from 'react';
import GiftAddFirstLinkLayout from '../../components/GiftAdd/AddGiftLink/GiftAddFirstLinkLayout/GiftAddFirstLinkLayout';
import AddGiftWithLinkLayout from '../../components/GiftAdd/AddGiftLayout/AddGiftWithLinkLayout';
import AddGiftWithoutLinkLayout from '../../components/GiftAdd/AddGiftLayout/AddGiftWithoutLinkLayout';
import GiftAddSecondLinkLayout from '../../components/GiftAdd/AddGiftLink/GiftAddSecondLinkLayout/GiftAddSecondLinkLayout';
import GiftAddPageLayout from '../../components/GiftAdd/GiftAddPageLayout/GiftAddPageLayout';

const GiftAddPage = () => {
  const [step, setStep] = useState(0);

  switch (step) {
    case 0:
      return <GiftAddPageLayout setStep={setStep} />;

    case 1:
      return <GiftAddFirstLinkLayout setStep={setStep} />;

    case 2:
      return <AddGiftWithLinkLayout setStep={setStep} />;

    case 3:
      return <AddGiftWithoutLinkLayout setStep={setStep} />;

    case 4:
      return <GiftAddSecondLinkLayout setStep={setStep} />;
  }
};

export default GiftAddPage;
