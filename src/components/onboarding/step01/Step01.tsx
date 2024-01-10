import { useState } from 'react';
import Title from '../../common/title/Title';
import * as S from './Step01.style';

const NameInput = () => {
  const [text, setText] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const unicodeChars = [...inputValue].filter((char) => /[\ud800-\udfff]/.test(char)).length;

    inputValue.length + unicodeChars <= 10 ? setText(inputValue) : e.preventDefault();
  };

  // TODO 인풋창에 x 버튼 추가 및 클릭 시 값 삭제
  return (
    <>
      <Title title='선물 받을 분의' />
      <Title title='이름, 혹은 닉네임을 알려주세요' />
      <S.Input
        type='text'
        onChange={onChange}
        maxLength={10}
        placeholder='이름을 입력해주세요'
        hasContent={text.length > 0}
        maxLengthReached={text.length === 10}
      />
      <S.LetterLength>({text.length}/10)</S.LetterLength>
    </>
  );
};

export default NameInput;
