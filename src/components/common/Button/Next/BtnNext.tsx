import { ButtonHTMLAttributes } from 'react';
import * as S from './BtnNext.style';
import { IcRight } from '../../../../assets/svg';

type BtnNextProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  children: React.ReactNode;
  customStyle?: React.CSSProperties;
  onClick?: () => void;
};

const BtnNext = ({ disabled, children, customStyle, onClick }: BtnNextProps) => {
  return (
    <S.Wrapper style={customStyle} onClick={onClick}>
      {children}
      <IcRight style={{ width: '2.4rem', height: '2.4rem' }} />
    </S.Wrapper>
  );
};

export default BtnNext;
