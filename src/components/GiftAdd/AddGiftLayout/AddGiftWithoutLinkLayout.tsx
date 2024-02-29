import { useState } from 'react';
import AddGiftFooter from '../AddGiftFooter/AddGiftFooter';
import GiftStatusBar from '../AddGiftLink/common/GiftStatusBar/GiftStatusBar';
import * as S from './common/AddGiftLayout.styled';
import AddGiftImg from './common/AddGiftImg/AddGiftImg';
import WithoutLinkWriteItemInfo from './common/WriteItemInfo/WithoutLinkWriteItemInfo';
import Modal from '../../common/Modal/Modal';
import LinkAddHeader from '../AddGiftLink/common/LinkAddHeader/LinkAddHeader';
import { OpenGraphResponseType } from '../../../types/etc';
import { AddGiftInfo } from '../../../types/gift';
import { useUpdateGifteeNameContext } from '../../../context/GifteeName/GifteeNameContext';
import DuplicateModal from '../../common/Modal/DuplicateModal';

interface AddGiftWithLinkLayoutProps {
  roomId: number;
  linkText: string;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setLinkText: React.Dispatch<React.SetStateAction<string>>;
  targetDate: string;
  modalStatus: boolean;
  openGraph: OpenGraphResponseType;
  updateAddGiftInfo: (newInfo: Partial<AddGiftInfo>) => void;
  addGiftInfo: AddGiftInfo;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isDuplicateModalOpen: boolean;
  setIsDuplicateModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  nameText: string;
  setNameText: React.Dispatch<React.SetStateAction<string>>;
  priceText: number | null;
  setPriceText: React.Dispatch<React.SetStateAction<number | null>>;
  imageUrl: string;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
}

// 직접 입력 화면
export const AddGiftWithoutLinkLayout = ({
  roomId,
  step,
  setStep,
  linkText,
  setLinkText,
  targetDate,
  updateAddGiftInfo,
  modalStatus,
  addGiftInfo,
  setIsLoading,
  isDuplicateModalOpen,
  setIsDuplicateModalOpen,
  nameText,
  setNameText,
  priceText,
  setPriceText,
  imageUrl,
  setImageUrl,
}: AddGiftWithLinkLayoutProps) => {
  console.log('오잉');
  const [isActivated, setIsActivated] = useState(
    !!addGiftInfo.name && !!addGiftInfo.cost && !!addGiftInfo.imageUrl,
  );

  const [fileName, setFileName] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [, setIsImageUploaded] = useState<boolean>(false);
  const [, setPreviewImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(modalStatus);

  const { gifteeName } = useUpdateGifteeNameContext();

  const checkPriceNull = (price: number | null) => {
    if (price === null) {
      return 0;
    } else {
      return price;
    }
  };

  // 모달 확인 클릭 버튼
  const handleClickConfirmClick = () => {
    setIsModalOpen(false);
    setStep(3);
  };

  return (
    <S.AddGiftWithLinkLayoutWrapper>
      {isModalOpen && (
        <Modal onConfirmClick={handleClickConfirmClick}>
          상품 정보를 자동으로
          <br />
          불러올 수 없어요 <br />
        </Modal>
      )}
      {isDuplicateModalOpen && (
        <DuplicateModal onConfirmClick={() => setIsDuplicateModalOpen(false)}>
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
        openGraph={null}
        setFile={setFile}
        setFileName={setFileName}
        setImageUrl={setImageUrl}
        setPreviewImage={setPreviewImage}
        setIsImageUploaded={setIsImageUploaded}
      />
      <WithoutLinkWriteItemInfo
        imageUrl={imageUrl}
        setIsActivated={setIsActivated}
        setName={setNameText}
        setCost={setPriceText}
        setUrl={setLinkText}
        name={nameText}
        cost={priceText}
        url={linkText}
      />
      <AddGiftFooter
        targetDate={targetDate}
        name={nameText}
        cost={checkPriceNull(priceText)}
        link={linkText}
        setStep={setStep}
        isActivated={isActivated}
        roomId={roomId}
        fileName={fileName}
        updateAddGiftInfo={updateAddGiftInfo}
        file={file}
        setImageUrl={setImageUrl}
        setIsLoading={setIsLoading}
        setIsModalOpen={setIsDuplicateModalOpen}
      />
    </S.AddGiftWithLinkLayoutWrapper>
  );
};

export default AddGiftWithoutLinkLayout;
