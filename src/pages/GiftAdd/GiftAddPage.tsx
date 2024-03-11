import { useState } from 'react';
import GiftAddFirstLinkLayout from '../../components/GiftAdd/AddGiftLink/GiftAddFirstLinkLayout/GiftAddFirstLinkLayout';
import AddGiftWithoutLinkLayout from '../../components/GiftAdd/AddGiftLayout/AddGiftWithoutLinkLayout';
import GiftAddPageLayout from '../../components/GiftAdd/GiftAddPageLayout/GiftAddPageLayout';
import { OpenGraphResponseType } from '../../types/etc';
import { useParams } from 'react-router-dom';
import AddGiftWithLinkLayout from '../../components/GiftAdd/AddGiftLayout/AddGiftWithLinkLayout';
import { useAddGiftContext } from '../../context/AddGift/AddGiftContext';
// import Loading from '../Loading/Loading';
import GiftAddPageLayoutSkeleton from '../../components/GiftAdd/GiftAddPageLayout/GiftAddPageLayoutSkeleton';

const GiftAddPage = () => {
  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { addGiftInfo, updateAddGiftInfo } = useAddGiftContext();
  console.log('AddGiftINFO', addGiftInfo);
  // case 1 링크 입력 페이지 state들
  const [itemNum, setItemNum] = useState(0);
  const [linkText, setLinkText] = useState<string>('');

  // case 2, 3 선물 등록 페이지 state들
  const [openGraph, setOpenGraph] = useState<OpenGraphResponseType>({ title: '', image: '' });
  const [modalStatus, setModalStatus] = useState(false);
  const [duplicateModalStatus, setDuplicateModalStatus] = useState(false);
  const [nameText, setNameText] = useState<string>(addGiftInfo.name);
  const [priceText, setPriceText] = useState<number | null>(addGiftInfo.cost);

  // 이미지 관련 state들
  const [imageUrl, setImageUrl] = useState<string>(addGiftInfo.imageUrl);
  const [fileName, setFileName] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);

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
          step={step}
          setModalStatus={setModalStatus}
          addGiftInfo={addGiftInfo}
          updateAddGiftInfo={updateAddGiftInfo}
        />
      );

    case 2:
      return isLoading ? (
        <GiftAddPageLayoutSkeleton />
      ) : (
        <AddGiftWithLinkLayout
          step={step}
          setStep={setStep}
          roomId={roomIdNumber}
          link={linkText}
          openGraph={openGraph}
          targetDate={targetDate || ''}
          setModalStatus={setModalStatus}
          addGiftInfo={addGiftInfo}
          updateAddGiftInfo={updateAddGiftInfo}
          setIsLoading={setIsLoading}
          isModalOpen={duplicateModalStatus}
          setIsModalOpen={setDuplicateModalStatus}
          nameText={nameText}
          setNameText={setNameText}
          priceText={priceText}
          setPriceText={setPriceText}
          imageUrl={imageUrl}
          setLinkText={setLinkText}
          setImageUrl={setImageUrl}
        />
      );

    case 3:
      return isLoading ? (
        <GiftAddPageLayoutSkeleton />
      ) : (
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
          setIsLoading={setIsLoading}
          isDuplicateModalOpen={duplicateModalStatus}
          setIsDuplicateModalOpen={setDuplicateModalStatus}
          nameText={nameText}
          setNameText={setNameText}
          priceText={priceText}
          setPriceText={setPriceText}
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          file={file}
          setFile={setFile}
          fileName={fileName}
          setFileName={setFileName}
        />
      );
  }
};

export default GiftAddPage;
