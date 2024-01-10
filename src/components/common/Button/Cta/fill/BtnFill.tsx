import { ButtonHTMLAttributes } from 'react';
import * as S from './BtnFill.style';

type BtnFillProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  children: React.ReactNode;
  customStyle?: React.CSSProperties;
  onClick?: () => void;
};

const BtnFill = ({ disabled, children, customStyle, onClick }: BtnFillProps) => {
  return (
    <S.Wrapper disabled={disabled} style={customStyle} onClick={onClick}>
      {children}
    </S.Wrapper>
  );
};
export default BtnFill;
