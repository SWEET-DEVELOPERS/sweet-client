import { ButtonHTMLAttributes } from 'react';
import * as S from './BtnSmallStroke.style';

type BtnSmallStrokeProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  children: React.ReactNode;
  customStyle?: React.CSSProperties;
  onClick?: () => void;
};

const BtnSmallStroke = ({ disabled, children, customStyle, onClick }: BtnSmallStrokeProps) => {
  return (
    <S.Wrapper disabled={disabled} style={customStyle} onClick={onClick}>
      {children}
    </S.Wrapper>
  );
};

export default BtnSmallStroke;
