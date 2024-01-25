import { ButtonHTMLAttributes } from 'react';
import * as S from './BtnRadio.style';
import { IcCircle, IcCirclePink } from '../../../../assets/svg';
// import { Period } from '../../../OnBoardingSteps/Step05/Step05.style';
type BtnRadioProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  time: string;
  period: string;
  customStyle?: React.CSSProperties;
  // onClick?: () => void;
  isSelected?: boolean;
  onTimeSelect?: (time: string) => void;
  setSelectedTime?: (time: string) => VoidFunction;
  $isAfterDelivery: boolean;
};
const BtnRadio = ({
  disabled,
  time,
  period,
  customStyle,
  onClick,
  onTimeSelect,
  setSelectedTime,
  $isAfterDelivery,
  isSelected,
}: BtnRadioProps) => {
  return (
    <S.Wrapper
      disabled={disabled}
      style={customStyle}
      onClick={(e) => {
        if (onTimeSelect) {
          onTimeSelect(time);
        }
        if (setSelectedTime) {
          setSelectedTime(time);
        }
        if (onClick) {
          onClick(e);
        }
      }}
      isSelected={isSelected}
    >
      {isSelected ? (
        <IcCirclePink style={{ width: '4.8rem' }} />
      ) : (
        <IcCircle style={{ width: '4.8rem' }} />
      )}
      <S.Time>{time}</S.Time>
      <S.Period $isAfterDelivery={$isAfterDelivery}>{period}</S.Period>
    </S.Wrapper>
  );
};

export default BtnRadio;
