import { ButtonHTMLAttributes } from 'react';
import * as S from './BtnMedium.style';

type BtnFillProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

const BtnMedium = ({ disabled, children, onClick }: BtnFillProps) => {
  return (
    <S.Wrapper disabled={disabled} onClick={onClick}>
      {children}
    </S.Wrapper>
  );
};

export default BtnMedium;
