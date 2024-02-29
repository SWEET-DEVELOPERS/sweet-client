import { ButtonHTMLAttributes } from 'react';
import * as S from './BtnDeleteMedium.style';

type BtnMediumProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  children: React.ReactNode;
  customStyle?: React.CSSProperties;
  onClick?: () => void;
};

const BtnMedium = ({ disabled, children, customStyle, onClick }: BtnMediumProps) => {
  return (
    <S.Wrapper disabled={disabled} style={customStyle} onClick={onClick}>
      {children}
    </S.Wrapper>
  );
};

export default BtnMedium;
