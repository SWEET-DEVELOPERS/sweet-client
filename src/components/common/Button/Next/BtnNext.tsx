import { ButtonHTMLAttributes } from 'react';
import * as S from './BtnNext.style';
import { IcRight } from '../../../../assets/svg';

type BtnNextProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  children: React.ReactNode;
  customStyle?: React.CSSProperties;
  onClick?: () => void;
};

const BtnNext = ({ disabled, children, onClick }: BtnNextProps) => {
  console.log('disabled:', disabled);
  return (
    <S.Wrapper
      style={{
        backgroundColor: disabled ? '#FF2176' : '#EBE9EA',
        color: disabled ? '#fff' : '#ACA7A9',
      }}
      onClick={onClick}
      disabled={!disabled}
    >
      {children}
      <IcRight style={{ width: '2.4rem', height: '2.4rem' }} />
    </S.Wrapper>
  );
};

export default BtnNext;
