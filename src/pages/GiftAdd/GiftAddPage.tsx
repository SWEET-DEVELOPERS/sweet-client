import { useState } from 'react';
import GiftAddFirstLinkLayout from '../../components/GiftAdd/AddGiftLink/GiftAddFirstLinkLayout/GiftAddFirstLinkLayout';
import AddGiftWithoutLinkLayout from '../../components/GiftAdd/AddGiftLayout/AddGiftWithoutLinkLayout';
import GiftAddPageLayout from '../../components/GiftAdd/GiftAddPageLayout/GiftAddPageLayout';
import { OpenGraphResponseType } from '../../types/etc';
import { useParams } from 'react-router-dom';
import AddGiftWithLinkLayout from '../../components/GiftAdd/AddGiftLayout/AddGiftWithLinkLayout';
import { useAddGiftContext } from '../../context/AddGift/AddGiftContext';

const GiftAddPage = () => {
  const [step, setStep] = useState(0);

  // case 1 링크 입력 페이지 state들
  const [itemNum, setItemNum] = useState(0);
  const [linkText, setLinkText] = useState<string>('');

  // case 2, 3 선물 등록 페이지 state들
  const [openGraph, setOpenGraph] = useState<OpenGraphResponseType>({ title: '', image: '' });
  const [modalStatus, setModalStatus] = useState(false);

  const params = useParams();
  const roomId = params.roomId;
  const targetDate = params.targetTime;
  const roomIdNumber = parseInt(roomId || '');

  const { addGiftInfo, updateAddGiftInfo } = useAddGiftContext();

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
          step={step}
          setModalStatus={setModalStatus}
          addGiftInfo={addGiftInfo}
          updateAddGiftInfo={updateAddGiftInfo}
        />
      );

    case 2:
      return (
        <AddGiftWithLinkLayout
          step={step}
          setStep={setStep}
          roomId={roomIdNumber}
          link={linkText}
          openGraph={openGraph}
          targetDate={targetDate || ''}
          addGiftInfo={addGiftInfo}
          updateAddGiftInfo={updateAddGiftInfo}
        />
      );

    case 3:
      return (
        <AddGiftWithoutLinkLayout
          step={step}
          setStep={setStep}
          roomId={roomIdNumber}
          linkText={linkText}
          setLinkText={setLinkText}
          targetDate={targetDate || ''}
          modalStatus={modalStatus}
          addGiftInfo={addGiftInfo}
          openGraph={openGraph}
          updateAddGiftInfo={updateAddGiftInfo}
        />
      );
  }
};

export default GiftAddPage;
