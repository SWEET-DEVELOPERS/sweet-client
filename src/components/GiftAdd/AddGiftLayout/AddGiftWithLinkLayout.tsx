import { useEffect, useState } from 'react';
import AddGiftFooter from '../AddGiftFooter/AddGiftFooter';
import GiftStatusBar from '../AddGiftLink/common/GiftStatusBar/GiftStatusBar';
import ShowLink from '../ShowLink/ShowLink';
import WriteItemInfo from './common/WriteItemInfo/WriteItemInfo';
import * as S from './common/AddGiftLayout.styled';
import AddGiftImg from './common/AddGiftImg/AddGiftImg';
import { OpenGraphResponseType } from '../../../types/etc';
import usePostMyPresignedUrl from '../../../hooks/queries/etc/usePostMyPresignedUrl';
import LinkAddHeader from '../AddGiftLink/common/LinkAddHeader/LinkAddHeader';
import useConvertURLtoFile from '../../../hooks/useConvertURLtoFile';
import { useHandleImageUpload } from '../../../hooks/queries/etc/useHandleImageUpload';

interface AddGiftWithLinkLayoutProps {
  link: string;
  roomId: number;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  openGraph: OpenGraphResponseType;
  targetDate: string;
}

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
  const [file, setFile] = useState<File | null>(null);
  const [isImageUploaded, setIsImageUploaded] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const setParsedFileName = (imageString: string) => {
    const uploadTime = new Date().toISOString();

    const uniqueName = `${uploadTime}${imageString}`;
    const finalImageName = uniqueName
      .replace(/\//g, '') // 폴더링 방지를 위해 '/' 제거
      .replace(/\s/g, ''); // 공백 제거

    setFileName(finalImageName);

    return finalImageName;
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (files && files.length > 0) {
      const selectedFiles = files as FileList;

      setFile(selectedFiles[0]);
      setPreviewImage(URL.createObjectURL(selectedFiles[0]));

      setImageUrl(URL.createObjectURL(selectedFiles[0]));
      setIsImageUploaded(!!selectedFiles?.[0]);
      openGraph.image = '';

      const imageName = selectedFiles[0].name.trim();
      setParsedFileName(imageName);
    }
  };

  const postPresignedUrl = usePostMyPresignedUrl(roomId);

  const getPresignedUrl = async (fileName: string) => {
    if (!fileName) {
      console.log('파일명이 없어서 fetchPresignedUrl을 실행하지 않습니다.');
      return { imageUrl: '', presignedUrl: '' };
    } else {
      const response = await postPresignedUrl.mutateAsync({ filename: fileName });
      const presignedUrl = response.presignedUrl;
      const imageUrl = presignedUrl.split('?')[0];
      setImageUrl(imageUrl);
      return { presignedUrl };
    }
  };

  const { putBinaryData } = useHandleImageUpload();

  const saveImageUrl = async (fileName: string) => {
    const { presignedUrl } = await getPresignedUrl(fileName);
    if (presignedUrl && presignedUrl !== '') {
      if (file) {
        putBinaryData({ presignedUrl, file });
      } else {
        console.error('파일이 없습니다');
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

  useEffect(() => {
    const fetchData = async () => {
      setNameText(openGraph.title);
      const convertedOgFile = await useConvertURLtoFile(openGraph.image);
      setFile(convertedOgFile);
      setImageUrl(openGraph.image);
    };

    fetchData();
  }, [openGraph]);

  return (
    <S.AddGiftWithLinkLayoutWrapper>
      <LinkAddHeader targetDate={targetDate} setStep={setStep} step={step} />
      <GiftStatusBar registeredGiftNum={1} isMargin={true} />
      <AddGiftImg imageUrl={imageUrl} onClickEditBtn={handleImageUpload} openGraph={openGraph} />
      <ShowLink link={link} />
      <WriteItemInfo
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
        imageUrl={imageUrl}
        link={link}
        setStep={setStep}
        isActivated={isActivated}
        roomId={roomId}
        saveImageUrl={saveImageUrl}
        fileName={fileName}
      />
    </S.AddGiftWithLinkLayoutWrapper>
  );
};

export default AddGiftWithLinkLayout;
