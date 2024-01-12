import * as S from './CountDownCard.styled';

interface CountDownCardProps {
  text?: string;
}

const CountDownCard = ({ text }: CountDownCardProps) => {
  return (
    <S.CountDownCardWrapper>
      <S.CardMiddleWrapper>
        <S.CardMiddle />
        <S.CardMiddle />
      </S.CardMiddleWrapper>
      <S.DigitText>{text}</S.DigitText>
    </S.CountDownCardWrapper>
  );
};

export default CountDownCard;
