import { ButtonHTMLAttributes } from 'react';
import * as S from './BtnLogout.style';

type BtnLogoutProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  children: React.ReactNode;
  customStyle?: React.CSSProperties;
  handleButtonClick: VoidFunction;
};

const BtnLogout = ({ disabled, children, customStyle, handleButtonClick }: BtnLogoutProps) => {
  return (
    <S.Wrapper disabled={disabled} style={customStyle} onClick={handleButtonClick}>
      {children}
    </S.Wrapper>
  );
};

export default BtnLogout;
