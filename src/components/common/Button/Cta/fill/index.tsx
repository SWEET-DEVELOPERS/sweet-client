import { ButtonHTMLAttributes } from 'react';
import * as S from './BtnFill.style';

type BtnFillProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

const BtnFill = ({ disabled, children, onClick }: BtnFillProps) => {
  return (
    <S.Wrapper disabled={disabled} onClick={onClick}>
      {children}
    </S.Wrapper>
  );
};
export default BtnFill;
