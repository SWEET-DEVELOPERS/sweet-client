import { useState } from 'react';
import GiftAddFirstLinkLayout from '../../components/GiftAdd/GiftAddFirstLinkLayout/GiftAddFirstLinkLayout';
import AddGiftWithLinkLayout from '../../components/GiftAdd/AddGiftLayout/AddGiftWithLinkLayout';
import AddGiftWithoutLinkLayout from '../../components/GiftAdd/AddGiftLayout/AddGiftWithoutLinkLayout';

const GiftAddPage = () => {
  const [step, setStep] = useState(1);

  switch (step) {
    case 0:
      return (
        // 내가 등록한 선물 뷰 연결할 예정
        <></>
      );

    case 1:
      return <GiftAddFirstLinkLayout setStep={setStep} />;

    case 2:
      return <AddGiftWithLinkLayout setStep={setStep} />;

    case 3:
      return <AddGiftWithoutLinkLayout setStep={setStep} />;
  }
};

export default GiftAddPage;
