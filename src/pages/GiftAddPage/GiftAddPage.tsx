import GiftAddButtonsWrapper from '../../components/GiftAdd/GiftAddButtons/GiftAddButtonsWrapper';
import GiftAddPageBottom from '../../components/GiftAdd/GiftAddPageBottomSection/GiftAddPageBottom';
import MiniTimer from '../../components/common/MiniTimer/MiniTimer';
import * as S from './GiftAddPage.styled';

const GiftAddPage = () => {
  const isExist = false;
  const isExist2 = true;
  const price = 42000;
  const adPrice = 39000;

  return (
    <S.GiftAddPageWrapper>
      {/* 헤더 추가 예정 */}
      <MiniTimer time={'00:00:00'} />
      <S.AddButtonsWrapper>
        <GiftAddButtonsWrapper isExist={isExist} price={price} />
        <GiftAddButtonsWrapper isExist={isExist2} price={price} />
      </S.AddButtonsWrapper>
      <GiftAddPageBottom adPrice={adPrice} />
    </S.GiftAddPageWrapper>
  );
};

export default GiftAddPage;
