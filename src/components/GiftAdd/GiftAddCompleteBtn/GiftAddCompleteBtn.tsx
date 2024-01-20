import { useNavigate, useParams } from 'react-router-dom';
import { IcRight } from '../../../assets/svg';
import * as S from './GiftAddCompleteBtn.styled';

interface GiftAddCompleteBtnProps {
  isCompleted: boolean;
}

const GiftAddCompleteBtn = ({ isCompleted }: GiftAddCompleteBtnProps) => {
  const navigate = useNavigate();
  const params = useParams();

  const onClickComplete = (isCompleted: boolean) => {
    if (isCompleted) {
      navigate(`/gift-home/${params.roomId}`);
    }
  };

  return (
    <S.CompleteBtnWrapper $isCompleted={isCompleted} onClick={() => onClickComplete(isCompleted)}>
      <S.Body09Text $isCompleted={isCompleted}>선물 등록 끝내기</S.Body09Text>
      {isCompleted ? (
        <IcRight width='24' height='24' color='#FFFFFF' />
      ) : (
        <IcRight width='24' height='24' color='#ACA7A9' />
      )}
    </S.CompleteBtnWrapper>
  );
};

export default GiftAddCompleteBtn;
