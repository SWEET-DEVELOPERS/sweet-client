import { ButtonHTMLAttributes } from 'react';
import * as S from './BtnRegistration.style';

type BtnRegistrationProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

const BtnRegistration = ({ disabled, children, onClick }: BtnRegistrationProps) => {
  return (
    <S.Wrapper disabled={disabled} onClick={onClick}>
      {children}
    </S.Wrapper>
  );
};
export default BtnRegistration;
