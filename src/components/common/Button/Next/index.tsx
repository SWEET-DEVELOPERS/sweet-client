import { ButtonHTMLAttributes } from 'react';
import * as S from './BtnNext.style';

type BtnNextProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

const BtnNext = ({ disabled, children, onClick }: BtnNextProps) => {
  return (
    <S.Wrapper disabled={disabled} onClick={onClick}>
      {children}
    </S.Wrapper>
  );
};

export default BtnNext;
