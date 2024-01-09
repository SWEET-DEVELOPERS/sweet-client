import { ButtonHTMLAttributes } from 'react';
import * as S from './BtnNext.style';
import { IcRight } from '../../../../assets/svg';

type BtnNextProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

const BtnNext = ({ disabled, children, onClick }: BtnNextProps) => {
  return (
    <S.Wrapper disabled={disabled} onClick={onClick}>
      {children}
      <IcRight style={{ width: '24px', height: '24px' }} />
    </S.Wrapper>
  );
};

export default BtnNext;
