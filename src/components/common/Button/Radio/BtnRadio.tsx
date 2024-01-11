import { ButtonHTMLAttributes, useState } from 'react';
import * as S from './BtnRadio.style';
import { IcCircle, IcCirclePink } from '../../../../assets/svg';
type BtnRadioProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  time: string;
  period: string;
  customStyle?: React.CSSProperties;
  onClick?: () => void;
};
const BtnRadio = ({ disabled, time, period, customStyle, onClick }: BtnRadioProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <S.Wrapper
      disabled={disabled}
      style={customStyle}
      onClick={onClick}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      {focused ? (
        <IcCirclePink style={{ width: '5.4rem' }} />
      ) : (
        <IcCircle style={{ width: '5.4rem' }} />
      )}
      <S.Time>{time}</S.Time>
      <S.Period>{period}</S.Period>
    </S.Wrapper>
  );
};

export default BtnRadio;
