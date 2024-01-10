import { ButtonHTMLAttributes } from 'react';
import * as S from './BtnRegistration.style';

type BtnRegistrationProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  children: React.ReactNode;
  customStyle?: React.CSSProperties;
  onClick?: () => void;
};

const BtnRegistration = ({ disabled, children, customStyle, onClick }: BtnRegistrationProps) => {
  return (
    <S.Wrapper disabled={disabled} style={customStyle} onClick={onClick}>
      {children}
    </S.Wrapper>
  );
};
export default BtnRegistration;
