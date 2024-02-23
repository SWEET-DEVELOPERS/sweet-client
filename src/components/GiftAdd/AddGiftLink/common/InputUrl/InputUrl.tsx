import * as S from './InputUrl.styled';
import IcCancelCircleFinal from '../../../../../assets/svg/IcCancelCircleFinal';
import { useState } from 'react';

interface InputUrlProps {
  setIsActivated: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const InputUrl = ({ setIsActivated, text, setText }: InputUrlProps) => {
  const [isInputFocused, setInputFocused] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setText(inputValue);
    inputValue.length > 0 ? setIsActivated(true) : setIsActivated(false);
  };

  const handleBtnClick = () => {
    setText('');
    setIsActivated(false);
  };

  return (
    <S.InputUrlWrapper $isInputFocused={isInputFocused}>
      <S.TextField>
        <S.Input
          type='text'
          value={text}
          onChange={onChange}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          placeholder='링크를 입력해주세요'
        />
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
