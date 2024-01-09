import { ButtonHTMLAttributes } from 'react';
import * as S from './BtnLogout.style';

type BtnLogoutProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

const BtnLogout = ({ disabled, children, onClick }: BtnLogoutProps) => {
  return (
    <S.Wrapper disabled={disabled} onClick={onClick}>
      {children}
    </S.Wrapper>
  );
};

export default BtnLogout;
