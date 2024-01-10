import { useState } from 'react';
import GiftAddFirstLinkLayout from '../../components/GiftAdd/GiftAddFirstLinkLayout/GiftAddFirstLinkLayout';

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
  }
};

export default GiftAddPage;
