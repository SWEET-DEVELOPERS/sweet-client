import { ButtonHTMLAttributes } from 'react';
import * as S from './BtnLogout.style';

type BtnLogoutProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  children: React.ReactNode;
  customStyle?: React.CSSProperties;
  onClick?: () => void;
};

const BtnLogout = ({ disabled, children, customStyle, onClick }: BtnLogoutProps) => {
  return (
    <S.Wrapper disabled={disabled} style={customStyle} onClick={onClick}>
      {children}
    </S.Wrapper>
  );
};

export default BtnLogout;
