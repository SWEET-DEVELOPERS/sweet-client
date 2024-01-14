import { IcRight } from '../../../assets/svg';
import * as S from './GiftAddCompleteBtn.styled';

const GiftAddCompleteBtn = () => {
  const isCompleted = false;

  return (
    <S.CompleteBtnWrapper isCompleted={isCompleted}>
      <S.Body09Text isCompleted={isCompleted}>선물 등록 끝내기</S.Body09Text>
      {isCompleted ? (
        <IcRight width='24' height='24' color='#FFFFFF' />
      ) : (
        <IcRight width='24' height='24' color='#ACA7A9' />
      )}
    </S.CompleteBtnWrapper>
  );
};

export default GiftAddCompleteBtn;
