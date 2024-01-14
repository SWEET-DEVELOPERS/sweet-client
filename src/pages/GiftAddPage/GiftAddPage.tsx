import { useState } from 'react';
import GiftAddFirstLinkLayout from '../../components/GiftAdd/AddGiftLink/GiftAddFirstLinkLayout/GiftAddFirstLinkLayout';
import AddGiftWithLinkLayout from '../../components/GiftAdd/AddGiftLayout/AddGiftWithLinkLayout';
import AddGiftWithoutLinkLayout from '../../components/GiftAdd/AddGiftLayout/AddGiftWithoutLinkLayout';
import GiftAddSecondLinkLayout from '../../components/GiftAdd/AddGiftLink/GiftAddSecondLinkLayout/GiftAddSecondLinkLayout';
import GiftAddPageLayout from '../../components/GiftAdd/GiftAddPageLayout/GiftAddPageLayout';

const GiftAddPage = () => {
  const [step, setStep] = useState(1);

  switch (step) {
    case 0:
      return (
        // 내가 등록한 선물 뷰 연결할 예정
        <GiftAddPageLayout />
      );

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
