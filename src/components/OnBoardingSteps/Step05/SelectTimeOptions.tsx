import BtnRadio from '../../common/Button/Radio/BtnRadio';
import * as S from './Step05.style';

interface SelectTimeOptionsProps {
  optionText: string;
  dateType: string;
  isSelected: boolean;
  onClick: () => void;
  onTimeSelect: (time: string) => void;
  isAfterDelivery: boolean;
}

const SelectTimeOptions = (props: SelectTimeOptionsProps) => {
  const { optionText, dateType, isSelected, onClick, onTimeSelect, isAfterDelivery } = props;

  return (
    <S.TimeOptionsWrapper>
      <BtnRadio
        time={optionText}
        period={dateType}
        $isSelected={isSelected}
        onClick={onClick}
        onTimeSelect={onTimeSelect}
        $isAfterDelivery={isAfterDelivery}
      />
    </S.TimeOptionsWrapper>
  );
};

export default SelectTimeOptions;
