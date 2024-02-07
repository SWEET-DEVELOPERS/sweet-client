import { useEffect, useState } from 'react';
import AddGiftFooter from '../AddGiftFooter/AddGiftFooter';
import GiftStatusBar from '../AddGiftLink/common/GiftStatusBar/GiftStatusBar';
import ShowLink from '../ShowLink/ShowLink';
import WriteItemInfo from './common/WriteItemInfo/WriteItemInfo';
import * as S from './common/AddGiftLayout.styled';
import AddGiftImg from './common/AddGiftImg/AddGiftImg';
import { OpenGraphResponseType } from '../../../types/etc';
// import usePostPresignedUrl from '../../../hooks/queries/etc/usePostPresignedUrl';
import usePutPresignedUrl from '../../../hooks/queries/onboarding/usePutPresignedUrl';
import usePostMyPresignedUrl from '../../../hooks/queries/etc/usePostMyPresignedUrl';
import LinkAddHeader from '../AddGiftLink/common/LinkAddHeader/LinkAddHeader';
import useParseFileName from '../../../hooks/useParseFileName';
// import { useNavigate } from 'react-router-dom';

interface AddGiftWithLinkLayoutProps {
  link: string;
  roomId: number;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  openGraph: OpenGraphResponseType;
  targetDate: string;
}
// 링크가 유효할 때 넘어가는 곳
const AddGiftWithLinkLayout = ({
  link,
  roomId,
  step,
  setStep,
  openGraph,
  targetDate,
}: AddGiftWithLinkLayoutProps) => {
  const [isActivated, setIsActivated] = useState(false);
  const [nameText, setNameText] = useState<string>(openGraph.title);
  const [priceText, setPriceText] = useState<number | null>(null);
  const [imageUrl, setImageUrl] = useState<string>(openGraph.image);
  const [fileName, setFileName] = useState<string>('');
  const [isImageUploaded, setIsImageUploaded] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  //빌드 에러용
  console.log(previewImage);

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
      if (openGraph) {
        setPreviewImage(openGraph.image);
      } else {
        setPreviewImage(URL.createObjectURL(selectedFiles[0]));
      }
      setImageUrl(URL.createObjectURL(selectedFiles[0]));
      setIsImageUploaded(!!selectedFiles?.[0]);
      // 초기화
      openGraph.image = '';
      console.log(isImageUploaded);

      const imageName = openGraph.image ? openGraph.image : files[0].name.trim();

      useParseFileName({ imageString: imageName, setFileName });
      console.log('페이지 안에서 fileName', fileName);

      console.log('fileName:', fileName);
    }
  };

  const postPresignedUrl = usePostMyPresignedUrl(roomId);
  const putPresignedUrl = usePutPresignedUrl();
  // const navigate = useNavigate();

  const fetchPresignedUrl = async (fileName: string) => {
    if (openGraph.image) {
      const openGraphFileName = useParseFileName({ imageString: openGraph.image, setFileName });

      const response = await postPresignedUrl.mutateAsync({ filename: openGraphFileName, url: '' });
      const presignedUrl = response.presignedUrl;
      const imageUrl = presignedUrl.split('?')[0];

      setImageUrl(imageUrl);
      return { imageUrl, presignedUrl };
    }
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

  const checkPriceNull = (price: number | null) => {
    if (price === null) {
      return 0;
    } else {
      return price;
    }
  };

  const itemInfo = {
    roomId: roomId,
  };

  useEffect(() => {
    setNameText(openGraph.title);
    setImageUrl(openGraph.image);
  }, [openGraph]);

  return (
    <S.AddGiftWithLinkLayoutWrapper>
      <LinkAddHeader targetDate={targetDate} setStep={setStep} step={step} />
      <GiftStatusBar registeredGiftNum={1} isMargin={true} />
      <AddGiftImg
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
        onClickEditBtn={handleImageUpload}
        // previewImage={previewImage}
        openGraph={openGraph}
        // setPreviewImage={setPreviewImage}
      />
      <ShowLink link={link} />
      <WriteItemInfo
        setIsActivated={setIsActivated}
        setName={setNameText}
        setCost={setPriceText}
        name={nameText}
        cost={priceText}
      />
      <AddGiftFooter
        openGraph={openGraph}
        targetDate={targetDate}
        name={nameText}
        cost={checkPriceNull(priceText)}
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
        link={link}
        setStep={setStep}
        isActivated={isActivated}
        itemInfo={itemInfo}
        saveImageUrl={saveImageUrl}
        fileName={fileName}
        fetchPresignedUrl={fetchPresignedUrl}
      />
    </S.AddGiftWithLinkLayoutWrapper>
  );
};

export default AddGiftWithLinkLayout;
