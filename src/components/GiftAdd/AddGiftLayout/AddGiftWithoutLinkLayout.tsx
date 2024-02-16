import { useState } from 'react';
import AddGiftFooter from '../AddGiftFooter/AddGiftFooter';
import GiftStatusBar from '../AddGiftLink/common/GiftStatusBar/GiftStatusBar';
import * as S from './common/AddGiftLayout.styled';
import AddGiftImg from './common/AddGiftImg/AddGiftImg';
import WithoutLinkWriteItemInfo from './common/WriteItemInfo/WithoutLinkWriteItemInfo';
import Modal from '../../common/Modal/Modal';
import LinkAddHeader from '../AddGiftLink/common/LinkAddHeader/LinkAddHeader';

interface AddGiftWithLinkLayoutProps {
  roomId: number;
  linkText: string;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setLinkText: React.Dispatch<React.SetStateAction<string>>;
  targetDate: string;
  modalStatus: boolean;
}

// 직접 입력 화면
export const AddGiftWithoutLinkLayout = ({
  roomId,
  step,
  setStep,
  linkText,
  setLinkText,
  targetDate,
}: AddGiftWithLinkLayoutProps) => {
  const [isActivated, setIsActivated] = useState(false);
  const [nameText, setNameText] = useState<string>('');
  const [priceText, setPriceText] = useState<number | null>(null);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [, setIsImageUploaded] = useState<boolean>(false);
  const [, setPreviewImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const checkPriceNull = (price: number | null) => {
    if (price === null) {
      return 0;
    } else {
      return price;
    }
  };

  // 모달 확인 클릭 버튼
  const handleClickConfirmClick = () => {
    setIsModalOpen(!isModalOpen);
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
      <LinkAddHeader targetDate={targetDate} setStep={setStep} step={step} />
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
        file={file}
        setImageUrl={setImageUrl}
      />
    </S.AddGiftWithLinkLayoutWrapper>
  );
};

export default AddGiftWithoutLinkLayout;
