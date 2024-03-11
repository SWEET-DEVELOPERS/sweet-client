import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { DigitalClock } from '@mui/x-date-pickers/DigitalClock';
import styled from 'styled-components';

interface ClockPickerProps {
  onTimeSelect: (time: string) => void;
}

const ClockPicker = ({ onTimeSelect }: ClockPickerProps) => {
  const handleTimeSelect = (selectedTime: Date) => {
    const formattedTime = selectedTime.toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
    onTimeSelect(formattedTime);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DemoContainer components={['DigitalClock']}>
        <DemoItem>
          <StyledDigitalClock timeStep={60} onChange={handleTimeSelect} ampm={false} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default ClockPicker;

const StyledDigitalClock = styled(DigitalClock)`
  .MuiDigitalClock-root {
  }

  .MuiDigitalClock-list {
    /* 리스트 커스텀 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .MuiDigitalClock-item {
    /* 리스트 아이템 커스텀 */
    ${({ theme }) => theme.fonts.body_01}
    color: ${({ theme }) => theme.colors.black};
  }
`;
