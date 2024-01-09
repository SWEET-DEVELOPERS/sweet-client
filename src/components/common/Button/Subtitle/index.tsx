import { ButtonHTMLAttributes } from 'react';
import * as S from './BtnSubtitle.style';
import { IcRight } from '../../../../assets/svg';

type BtnSubtitleProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  state: boolean;
  onClick?: () => void;
};

const BtnSubtitle = ({ disabled, state, onClick }: BtnSubtitleProps) => {
  return (
    <S.Wrapper disabled={disabled} onClick={onClick}>
      <span>진행 중인 선물방</span>
      {state ? (
        <IcRight style={{ width: '2.4rem', color: 'black' }} />
      ) : (
        <S.EditText>수정하기</S.EditText>
      )}
    </S.Wrapper>
  );
};

export default BtnSubtitle;
