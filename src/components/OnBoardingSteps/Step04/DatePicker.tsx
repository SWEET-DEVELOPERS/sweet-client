import * as S from './Step04.style';
import { IcUnselectedCalender } from '../../../assets/svg';

interface DatePickProps {
  onClick: () => void;
}

const DatePicker = ({ onClick }: DatePickProps) => {
  return (
    <S.IconField>
      <IcUnselectedCalender style={{ width: '2.4rem', height: '2.4rem' }} onClick={onClick} />
    </S.IconField>
  );
};

export default DatePicker;
