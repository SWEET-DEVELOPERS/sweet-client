import { useEffect, useState } from 'react';
import MiniTimer from '../../common/MiniTimer/MiniTimer';
import AddGiftFooter from '../AddGiftFooter/AddGiftFooter';
import GiftStatusBar from '../AddGiftLink/common/GiftStatusBar/GiftStatusBar';
import ShowLink from '../ShowLink/ShowLink';
import WriteItemInfo from './common/WriteItemInfo/WriteItemInfo';
import * as S from './common/AddGiftLayout.styled';
import AddGiftImg from './common/AddGiftImg/AddGiftImg';
import { OpenGraphResponseType } from '../../../types/etc';

interface AddGiftWithLinkLayoutProps {
  link: string;
  roomId: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  openGraph: OpenGraphResponseType;
}
// 링크가 유효할 때 넘어가는 곳
const AddGiftWithLinkLayout = ({
  link,
  roomId,
  setStep,
  openGraph,
}: AddGiftWithLinkLayoutProps) => {
  const [isActivated, setIsActivated] = useState(false);
  const [nameText, setNameText] = useState<string>(openGraph.title);
  const [priceText, setPriceText] = useState<number>(0);
  const [imageUrl, setImageUrl] = useState<string>(openGraph.image);

  const itemInfo = {
    roomId: roomId,
  };

  const now = new Date();
  useEffect(() => {
    setNameText(openGraph.title);
    setImageUrl(openGraph.image);
  }, [openGraph]);
  
  return (
    <S.AddGiftWithLinkLayoutWrapper>
      <S.AddGiftWithLinkHeader>
        <MiniTimer time={now} />
      </S.AddGiftWithLinkHeader>
      <GiftStatusBar registeredGiftNum={1} isMargin={false} />
      <AddGiftImg imageUrl={imageUrl} setImageUrl={setImageUrl} />
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
        link={link}
        setStep={setStep}
        isActivated={isActivated}
        itemInfo={itemInfo}
      />
    </S.AddGiftWithLinkLayoutWrapper>
  );
};

export default AddGiftWithLinkLayout;
