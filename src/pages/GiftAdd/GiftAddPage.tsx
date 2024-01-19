import { useState } from 'react';
import GiftAddFirstLinkLayout from '../../components/GiftAdd/AddGiftLink/GiftAddFirstLinkLayout/GiftAddFirstLinkLayout';
import AddGiftWithoutLinkLayout from '../../components/GiftAdd/AddGiftLayout/AddGiftWithoutLinkLayout';
import GiftAddPageLayout from '../../components/GiftAdd/GiftAddPageLayout/GiftAddPageLayout';
import { OpenGraphResponseType } from '../../types/etc';
import { useLocation, useParams } from 'react-router-dom';
import AddGiftWithLinkLayout from '../../components/GiftAdd/AddGiftLayout/AddGiftWithLinkLayout';

const GiftAddPage = () => {
  const [step, setStep] = useState(0);
  const [linkText, setLinkText] = useState<string>('');
  const [openGraph, setOpenGraph] = useState<OpenGraphResponseType>({ title: '', image: '' });
  const [itemNum, setItemNum] = useState(0);
  const [modalStatus, setModalStatus] = useState(false);

  const params = useParams();
  const roomId = params.roomId;
  const targetDate = params.targetTime;

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
          setModalStatus={setModalStatus}
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
          modalStatus={modalStatus}
        />
      );
  }
};

export default GiftAddPage;
