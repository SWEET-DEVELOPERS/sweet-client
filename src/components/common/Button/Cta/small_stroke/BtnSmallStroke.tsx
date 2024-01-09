import { ButtonHTMLAttributes } from 'react';
import * as S from './BtnSmallStroke.style';

type BtnSmallStrokeProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

const BtnSmallStroke = ({ disabled, children, onClick }: BtnSmallStrokeProps) => {
  return (
    <S.Wrapper disabled={disabled} onClick={onClick}>
      {children}
    </S.Wrapper>
  );
};

export default BtnSmallStroke;
