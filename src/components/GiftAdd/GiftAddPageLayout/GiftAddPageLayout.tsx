import MiniTimer from '../../common/MiniTimer/MiniTimer';
import * as S from './GiftAddPageLayout.style';
import GiftAddButtonsWrapper from '../GiftAddButtons/GiftAddButtonsWrapper';
import GiftAddPageBottom from '../GiftAddPageBottomSection/GiftAddPageBottom';
import GiftAddPageLayoutHeader from './GiftAddPageLayoutHeader';

interface GiftAddPageLayoutProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const GiftAddPageLayout = ({ setStep }: GiftAddPageLayoutProps) => {
  const isExist = false;
  const isExist2 = true;
  const price = 42000;
  const adPrice = 39000;

  const handleClickAddBtn = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <S.GiftAddPageWrapper>
      <GiftAddPageLayoutHeader title={'내가 등록한 선물'} />
      <MiniTimer time={'00:00:00'} />
      <S.AddButtonsWrapper>
        <GiftAddButtonsWrapper isExist={isExist} price={price} onClick={handleClickAddBtn} />
        <GiftAddButtonsWrapper isExist={isExist2} price={price} onClick={handleClickAddBtn} />
      </S.AddButtonsWrapper>
      <GiftAddPageBottom adPrice={adPrice} />
    </S.GiftAddPageWrapper>
  );
};

export default GiftAddPageLayout;
