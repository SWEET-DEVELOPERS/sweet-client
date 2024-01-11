import { useState } from 'react';
import Title from '../../common/title/Title';
import * as S from './Step01.style';
import { IcCancelCircleFinal } from '../../../assets/svg';
import BtnNext from '../../common/Button/Next/BtnNext';

interface NameInputProps {
  onNext: VoidFunction;
}

const NameInput = (props: NameInputProps) => {
  const { onNext } = props;
  const [text, setText] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const unicodeChars = [...inputValue].filter((char) => /[\ud800-\udfff]/.test(char)).length;

    inputValue.length + unicodeChars <= 10 ? setText(inputValue) : e.preventDefault();
  };

  const handleBtnClick = () => {
    setText('');
  };

  return (
    <>
      <Title title='선물 받을 분의' />
      <Title title='이름, 혹은 닉네임을 알려주세요' />
      <S.Wrapper hasContent={text.length > 0} maxLengthReached={text.length === 10}>
        <S.TextField>
          <S.Input
            type='text'
            value={text}
            onChange={onChange}
            maxLength={10}
            placeholder='이름을 입력해주세요'
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
      </S.Wrapper>
      <S.LetterLength>({text.length}/10)</S.LetterLength>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <BtnNext
          type='button'
          onClick={onNext}
          customStyle={{
            position: 'absolute',
            bottom: '0',
          }}
        >
          다음
        </BtnNext>
      </div>
    </>
  );
};

export default NameInput;