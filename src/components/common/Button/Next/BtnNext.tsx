import { ButtonHTMLAttributes } from 'react';
import * as S from './BtnNext.style';
import { IcRight } from '../../../../assets/svg';

type BtnNextProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  children: React.ReactNode;
  customStyle?: React.CSSProperties;
  onClick?: () => void;
  isActivated: boolean;
};

const BtnNext = ({ disabled, children, onClick, isActivated }: BtnNextProps) => {
  console.log('disabled:', disabled);
  return (
    <S.Wrapper
      style={{
        backgroundColor: disabled ? '#FF2176' : '#EBE9EA',
        color: '#fff',
      }}
      onClick={onClick}
      disabled={!disabled}
    >
      <S.NextBtnText isActivated={isActivated}>{children}</S.NextBtnText>
      <IcRight style={{ width: '2.4rem', height: '2.4rem' }} />
    </S.Wrapper>
  );
};

export default BtnNext;
