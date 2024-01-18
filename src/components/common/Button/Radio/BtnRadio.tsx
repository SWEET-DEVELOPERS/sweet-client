import { ButtonHTMLAttributes, useState } from 'react';
import * as S from './BtnRadio.style';
import { IcCircle, IcCirclePink } from '../../../../assets/svg';
import { Period } from '../../../OnBoardingSteps/Step05/Step05.style';
type BtnRadioProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  time: string;
  period: string;
  customStyle?: React.CSSProperties;
  onClick?: () => void;
  isSelected?: () => void;
  onTimeSelect?: (time: string) => void;
  setSelectedTime?: (time: string) => VoidFunction;
  isAfterDelivery: boolean;
};
const BtnRadio = ({
  disabled,
  time,
  period,
  customStyle,
  onClick,
  onTimeSelect,
  setSelectedTime,
  isAfterDelivery,
}: BtnRadioProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <S.Wrapper
      disabled={disabled}
      style={customStyle}
      onClick={() => {
        if (onTimeSelect) {
          onTimeSelect(time);
        }
        if (setSelectedTime) {
          setSelectedTime(time);
        }
        if (onClick) {
          onClick();
        }
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      {focused ? (
        <IcCirclePink style={{ width: '2.4rem' }} />
      ) : (
        <IcCircle style={{ width: '2.4rem' }} />
      )}
      <S.Time>{time}</S.Time>
      <Period isAfterDelivery={isAfterDelivery}>{period}</Period>
    </S.Wrapper>
  );
};

export default BtnRadio;
