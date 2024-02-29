import { useEffect, useState } from 'react';
import AddGiftFooter from '../AddGiftFooter/AddGiftFooter';
import GiftStatusBar from '../AddGiftLink/common/GiftStatusBar/GiftStatusBar';
import ShowLink from '../ShowLink/ShowLink';
import WriteItemInfo from './common/WriteItemInfo/WriteItemInfo';
import * as S from './common/AddGiftLayout.styled';
import AddGiftImg from './common/AddGiftImg/AddGiftImg';
import { OpenGraphResponseType } from '../../../types/etc';
import LinkAddHeader from '../AddGiftLink/common/LinkAddHeader/LinkAddHeader';
import { AddGiftInfo } from '../../../types/gift';
import useConvertURLtoFile from '../../../hooks/useConvertURLtoFile';
import DuplicateModal from '../../common/Modal/DuplicateModal';
import { useUpdateGifteeNameContext } from '../../../context/GifteeName/GifteeNameContext';

interface AddGiftWithLinkLayoutProps {
  link: string;
  setLinkText: React.Dispatch<React.SetStateAction<string>>;
  roomId: number;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  openGraph: OpenGraphResponseType;
  targetDate: string;
  updateAddGiftInfo: (newInfo: Partial<AddGiftInfo>) => void;
  setModalStatus: React.Dispatch<React.SetStateAction<boolean>>;
  addGiftInfo: AddGiftInfo;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  nameText: string;
  setNameText: React.Dispatch<React.SetStateAction<string>>;
  priceText: number | null;
  setPriceText: React.Dispatch<React.SetStateAction<number | null>>;
  imageUrl: string;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
}

const AddGiftWithLinkLayout = ({
  link,
  setLinkText,
  roomId,
  step,
  setStep,
  openGraph,
  targetDate,
  updateAddGiftInfo,
  setModalStatus,
  addGiftInfo,
  setIsLoading,
  isModalOpen,
  setIsModalOpen,
  nameText,
  setNameText,
  priceText,
  setPriceText,
  imageUrl,
  setImageUrl,
}: AddGiftWithLinkLayoutProps) => {
  const [isActivated, setIsActivated] = useState(
    !!addGiftInfo.name && !!addGiftInfo.cost && !!addGiftInfo.imageUrl,
  );

  const [fileName, setFileName] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [, setIsImageUploaded] = useState<boolean>(false);
  const [, setPreviewImage] = useState<string | null>(null);

  const { gifteeName } = useUpdateGifteeNameContext();

  const checkPriceNull = (price: number | null) => {
    if (price === null) {
      return 0;
    } else {
      return price;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log('OpenGraph imageUrl', openGraph);
      setNameText(openGraph.title);
      const convertResult = await useConvertURLtoFile({
        url: openGraph.image,
        setStep,
        setImageUrl,
        setModalStatus,
        updateAddGiftInfo,
      });
      if (convertResult && 'convertedOgFile' in convertResult) {
        setFile(convertResult.convertedOgFile);
        setFileName(openGraph.image);
        setImageUrl(openGraph.image);
      }
    };

    fetchData();
  }, [openGraph, setStep]);

  return (
    <S.AddGiftWithLinkLayoutWrapper>
      {isModalOpen && (
        <DuplicateModal onConfirmClick={() => setIsModalOpen(false)}>
          선물방에 이미
          <br /> 등록된 상품이에요
        </DuplicateModal>
      )}
      <LinkAddHeader
        targetDate={targetDate}
        setStep={setStep}
        step={step}
        name={nameText}
        cost={priceText}
        imageUrl={imageUrl}
        updateAddGiftInfo={updateAddGiftInfo}
        gifteeName={gifteeName}
      />
      <GiftStatusBar registeredGiftNum={1} isMargin={true} />
      <AddGiftImg
        imageUrl={imageUrl}
        openGraph={openGraph}
        setFile={setFile}
        setFileName={setFileName}
        setImageUrl={setImageUrl}
        setPreviewImage={setPreviewImage}
        setIsImageUploaded={setIsImageUploaded}
      />
      <ShowLink link={link} />
      <WriteItemInfo
        imageUrl={imageUrl}
        setIsActivated={setIsActivated}
        setName={setNameText}
        setCost={setPriceText}
        name={nameText}
        cost={priceText}
      />
      <AddGiftFooter
        targetDate={targetDate}
        name={nameText}
        cost={checkPriceNull(priceText)}
        link={link}
        setStep={setStep}
        isActivated={isActivated}
        roomId={roomId}
        fileName={fileName}
        updateAddGiftInfo={updateAddGiftInfo}
        file={file}
        setImageUrl={setImageUrl}
        setIsLoading={setIsLoading}
        setIsModalOpen={setIsModalOpen}
        setNameText={setNameText}
        setPriceText={setPriceText}
        setLinkText={setLinkText}
      />
    </S.AddGiftWithLinkLayoutWrapper>
  );
};

export default AddGiftWithLinkLayout;
