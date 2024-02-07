import { useState } from 'react';
import AddGiftFooter from '../AddGiftFooter/AddGiftFooter';
import GiftStatusBar from '../AddGiftLink/common/GiftStatusBar/GiftStatusBar';
import * as S from './common/AddGiftLayout.styled';
import AddGiftImg from './common/AddGiftImg/AddGiftImg';
import WithoutLinkWriteItemInfo from './common/WriteItemInfo/WithoutLinkWriteItemInfo';
import Modal from '../../common/Modal/Modal';
import usePutPresignedUrl from '../../../hooks/queries/onboarding/usePutPresignedUrl';
import usePostMyPresignedUrl from '../../../hooks/queries/etc/usePostMyPresignedUrl';
import LinkAddHeader from '../AddGiftLink/common/LinkAddHeader/LinkAddHeader';
// import { postOpenGraph } from '../../../hooks/queries/etc/usePostOpengraph';
import { OpenGraphResponseType } from '../../../types/etc';
import useParseFileName from '../../../hooks/useParseFileName';

interface AddGiftWithLinkLayoutProps {
  roomId: number;
  linkText: string;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setLinkText: React.Dispatch<React.SetStateAction<string>>;
  targetDate: string;
  modalStatus: boolean;
  openGraph: OpenGraphResponseType;
}
// 직접 입력 화면
function AddGiftWithoutLinkLayout({
  roomId,
  step,
  setStep,
  linkText,
  setLinkText,
  targetDate,
  // modalStatus,
  openGraph,
}: AddGiftWithLinkLayoutProps) {
  const [isActivated, setIsActivated] = useState(false);
  const [nameText, setNameText] = useState<string>('');
  const [priceText, setPriceText] = useState<number | null>(null);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');
  const [isImageUploaded, setIsImageUploaded] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(true);

  //빌드 에러 해결용
  console.log('previewImage', previewImage);
  // const setParsedFileName = (imageString: string) => {
  //   // 확장자 제거
  //   const imageNameWithoutExtension = imageString.replace(/\.[^/.]+$/, '');
  //   console.log('imageNameWithoutExtension', imageNameWithoutExtension);
  //   // 띄워쓰기 제거
  //   const formattedImageName = imageNameWithoutExtension.replace(/\s/g, '');
  //   console.log('formattedImageName', formattedImageName);

  //   // 앞 3글자 가져오기
  //   const firstThreeLetters = formattedImageName.substring(0, 3);
  //   console.log('firstThreeLetters', firstThreeLetters);

  //   // 이미지 업로드 시간
  //   const uploadTime = new Date().toISOString();
  //   console.log('uploadTime', uploadTime);

  //   // 최종 이미지 이름
  //   const finalImageName = `${firstThreeLetters}${uploadTime}`;
  //   console.log('finalImageName', finalImageName);
  //   setFileName(finalImageName);
  //   console.log('fileName', fileName);

  //   return finalImageName;
  // };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (files && files.length > 0) {
      const selectedFiles = files as FileList;
      setPreviewImage(URL.createObjectURL(selectedFiles[0]));
      setImageUrl(URL.createObjectURL(selectedFiles[0]));
      setIsImageUploaded(!!selectedFiles?.[0]);

      console.log(isImageUploaded);

      const imageName = files[0].name.trim();

      useParseFileName({ imageString: imageName, setFileName });
      console.log('페이지 안에서 fileName', fileName);

      console.log('fileName:', fileName);
    }
  };

  const postPresignedUrl = usePostMyPresignedUrl(roomId);
  const putPresignedUrl = usePutPresignedUrl();
  // const navigate = useNavigate();

  const fetchPresignedUrl = async (fileName: string) => {
    if (!fileName) {
      console.log('파일명이 없어서 fetchPresignedUrl을 실행하지 않습니다.');
      return { imageUrl: '', presignedUrl: '' };
    } else {
      const response = await postPresignedUrl.mutateAsync({ filename: fileName, url: '' });
      const presignedUrl = response.presignedUrl;
      const imageUrl = presignedUrl.split('?')[0];
      console.log('imageUrl', imageUrl);
      console.log('presignedUrl', presignedUrl);
      setImageUrl(imageUrl);
      return { imageUrl, presignedUrl };
    }
  };

  const saveImageUrl = async (fileName: string) => {
    const { presignedUrl, imageUrl } = await fetchPresignedUrl(fileName);

    if (presignedUrl && presignedUrl !== '') {
      try {
        await putPresignedUrl.mutateAsync(presignedUrl);
        console.log('saveImageUrl 안 imageUrl 값 확인', imageUrl);
      } catch (error) {
        console.log('putPresignedUrl 실행 중 에러 발생:', error);
        return;
      }
    } else {
      console.log('preSignedUrl이 비어있어서 putPresignedUrl을 실행하지 않습니다.');
    }
  };

  const itemInfo = {
    roomId: roomId,
  };

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
        setImageUrl={setImageUrl}
        openGraph={null}
        onClickEditBtn={handleImageUpload}
        // previewImage={previewImage}
        // setPreviewImage={setPreviewImage}
      />
      <WithoutLinkWriteItemInfo
        imageUrl={imageUrl}
        // setImageUrl={setImageUrl}
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
        openGraph={openGraph}
        cost={checkPriceNull(priceText)}
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
        link={linkText}
        setStep={setStep}
        isActivated={isActivated}
        itemInfo={itemInfo}
        saveImageUrl={saveImageUrl}
        fileName={fileName}
        fetchPresignedUrl={fetchPresignedUrl}
      />
    </S.AddGiftWithLinkLayoutWrapper>
  );
}

export default AddGiftWithoutLinkLayout;
