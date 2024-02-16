import { useEffect, useState } from 'react';
import AddGiftFooter from '../AddGiftFooter/AddGiftFooter';
import GiftStatusBar from '../AddGiftLink/common/GiftStatusBar/GiftStatusBar';
import ShowLink from '../ShowLink/ShowLink';
import WriteItemInfo from './common/WriteItemInfo/WriteItemInfo';
import * as S from './common/AddGiftLayout.styled';
import AddGiftImg from './common/AddGiftImg/AddGiftImg';
import { OpenGraphResponseType } from '../../../types/etc';
import LinkAddHeader from '../AddGiftLink/common/LinkAddHeader/LinkAddHeader';
import useConvertURLtoFile from '../../../hooks/useConvertURLtoFile';
import useParseFileName from '../../../hooks/useParseFileName';

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
  const [, setIsImageUploaded] = useState<boolean>(false);
  const [, setPreviewImage] = useState<string | null>(null);

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
      setFileName(openGraph.image);
      setImageUrl(openGraph.image);
    };

    fetchData();
  }, [openGraph]);

  return (
    <S.AddGiftWithLinkLayoutWrapper>
      <LinkAddHeader targetDate={targetDate} setStep={setStep} step={step} />
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
        fileName={fileName}
        file={file}
        setImageUrl={setImageUrl}
      />
    </S.AddGiftWithLinkLayoutWrapper>
  );
};

export default AddGiftWithLinkLayout;
