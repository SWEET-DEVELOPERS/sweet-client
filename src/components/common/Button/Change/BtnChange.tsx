import { ButtonHTMLAttributes } from 'react';
import { IcRefresh } from '../../../../assets/svg';
import * as S from './BtnChange.style';

type BtnChangeProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  children: React.ReactNode;
  customStyle?: React.CSSProperties;
  onClick?: () => void;
};

const BtnChange = ({ disabled, children, customStyle, onClick }: BtnChangeProps) => {
  return (
    <S.Wrapper disabled={disabled} style={customStyle} onClick={onClick}>
      <IcRefresh style={{ width: '2rem' }} />
      <S.Text>{children}</S.Text>
    </S.Wrapper>
  );
};
export default BtnChange;
