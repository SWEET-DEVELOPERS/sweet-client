import { useEffect, useState } from 'react';
import MiniTimer from '../../common/MiniTimer/MiniTimer';
import AddGiftFooter from '../AddGiftFooter/AddGiftFooter';
import GiftStatusBar from '../AddGiftLink/common/GiftStatusBar/GiftStatusBar';
import ShowLink from '../ShowLink/ShowLink';
import WriteItemInfo from './common/WriteItemInfo/WriteItemInfo';
import * as S from './common/AddGiftLayout.styled';
import AddGiftImg from './common/AddGiftImg/AddGiftImg';
import { OpenGraphResponseType } from '../../../types/etc';
import { useNavigate } from 'react-router-dom';
import usePostPresignedUrl from '../../../hooks/queries/etc/usePostPresignedUrl';
import usePutPresignedUrl from '../../../hooks/queries/onboarding/usePutPresignedUrl';

interface AddGiftWithLinkLayoutProps {
  link: string;
  roomId: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  openGraph: OpenGraphResponseType;
  targetDate: string;
}
// 링크가 유효할 때 넘어가는 곳
const AddGiftWithLinkLayout = ({
  link,
  roomId,
  setStep,
  openGraph,
  targetDate,
}: AddGiftWithLinkLayoutProps) => {
  const [isActivated, setIsActivated] = useState(false);
  const [nameText, setNameText] = useState<string>(openGraph.title);
  const [priceText, setPriceText] = useState<number>(0);
  const [imageUrl, setImageUrl] = useState<string>(openGraph.image);
  const [fileName, setFileName] = useState<string>('');
  const [isImageUploaded, setIsImageUploaded] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files && files.length > 0) {
      const selectedFiles = files as FileList;
      setPreviewImage(URL.createObjectURL(selectedFiles[0]));
      setImageUrl(URL.createObjectURL(selectedFiles[0]));
      setIsImageUploaded(!!selectedFiles?.[0]);

      const imageName = openGraph.image ? openGraph.image : files[0].name.trim();
      console.log('페이지 안에서 fileName', fileName);
      // 확장자 제거
      const imageNameWithoutExtension = imageName.replace(/\.[^/.]+$/, '');

      // 띄워쓰기 제거
      const formattedImageName = imageNameWithoutExtension.replace(/\s/g, '');

      // 앞 3글자 가져오기
      const firstThreeLetters = formattedImageName.substring(0, 3);

      // 이미지 업로드 시간
      const uploadTime = new Date().toISOString();

      // 최종 이미지 이름
      const finalImageName = `${firstThreeLetters}${uploadTime}`;
      setFileName(finalImageName);

      console.log('fileName:', finalImageName);
    }
  };

  const postPresignedUrl = usePostPresignedUrl();
  const putPresignedUrl = usePutPresignedUrl();
  const navigate = useNavigate();

  const fetchPresignedUrl = async (fileName: string) => {
    if (!fileName) {
      console.log('파일명이 없어서 fetchPresignedUrl을 실행하지 않습니다.');
      return { imageUrl: '', presignedUrl: '' };
    }
    const response = await postPresignedUrl.mutateAsync({ filename: fileName, url: '' });

    const presignedUrl = response.presignedUrl;
    const imageUrl = presignedUrl.split('?')[0];
    console.log('imageUrl', imageUrl);
    console.log('presignedUrl', presignedUrl);
    setImageUrl(imageUrl);
    return { imageUrl, presignedUrl };
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

  useEffect(() => {
    setNameText(openGraph.title);
    setImageUrl(openGraph.image);
  }, [openGraph]);

  return (
    <S.AddGiftWithLinkLayoutWrapper>
      <S.AddGiftWithLinkHeader>
        <MiniTimer targetDate={targetDate} />
      </S.AddGiftWithLinkHeader>
      <GiftStatusBar registeredGiftNum={1} isMargin={false} />
      <AddGiftImg
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
        onClickEditBtn={handleImageUpload}
        previewImage={previewImage}
        openGraph={openGraph}
        setPreviewImage={setPreviewImage}
      />
      <ShowLink />
      <WriteItemInfo
        setIsActivated={setIsActivated}
        setName={setNameText}
        setCost={setPriceText}
        name={nameText}
        cost={priceText}
      />
      <AddGiftFooter
        name={nameText}
        cost={priceText}
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
