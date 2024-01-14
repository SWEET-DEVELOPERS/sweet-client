import { useState } from 'react';
import * as S from './InputUrl.styled';
import IcCancelCircleFinal from '../../../../../assets/svg/IcCancelCircleFinal';

interface InputUrlProps {
  setIsActivated: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputUrl = ({ setIsActivated }: InputUrlProps) => {
  const [text, setText] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    inputValue.length > 0 ? setIsActivated(true) : setIsActivated(false);
    setText(inputValue);
  };

  const handleBtnClick = () => {
    setText('');
    setIsActivated(false);
  };

  return (
    <S.InputUrlWrapper $hasContent={text.length > 0}>
      <S.TextField>
        <S.Input type='text' value={text} onChange={onChange} placeholder='링크를 입력해주세요' />
      </S.TextField>
      <S.IconField>
        {text.length > 0 && (
          <IcCancelCircleFinal
            style={{ width: '2.4rem', height: '2.4rem' }}
            onClick={handleBtnClick}
          />
        )}
      </S.IconField>
    </S.InputUrlWrapper>
  );
};

export default InputUrl;
