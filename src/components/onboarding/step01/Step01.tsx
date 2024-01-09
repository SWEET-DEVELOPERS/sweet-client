import styled, { css } from 'styled-components';
import theme from '../../../style/theme';
import { useState } from 'react';
import Title from '../../common/title/Title';

const NameInput = () => {
  const [text, setText] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const unicodeChars = [...inputValue].filter((char) => /[\ud800-\udfff]/.test(char)).length;

    inputValue.length + unicodeChars <= 10 ? setText(inputValue) : e.preventDefault();
  };

  return (
    <>
      <Title title='선물 받을 분의' />
      <Title title='이름, 혹은 닉네임을 알려주세요' />
      <Input
        type='text'
        onChange={onChange}
        maxLength={10}
        placeholder='이름을 입력해주세요'
        hasContent={text.length > 0}
        maxLengthReached={text.length === 10}
      />
      <LetterLength>({text.length}/10)</LetterLength>
    </>
  );
};

export default NameInput;

const Input = styled.input<{ hasContent: boolean; maxLengthReached: boolean }>`
  width: 100%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 7.2rem;
  gap: 0.8rem;
  outline: none;
  border-bottom: 0.1rem solid ${theme.colors.G_02};

  ${(props) =>
    props.hasContent &&
    css`
      border-bottom: 0.1rem solid ${theme.colors.P_06};
    `}

  ${(props) =>
    props.maxLengthReached &&
    css`
      border-bottom: 0.1rem solid ${theme.colors.G_02};
    `}

    input::placeholder {
    color: ${theme.colors.G_07};
    ${theme.fonts.body_06}
  }

  &::-webkit-input-placeholder {
    color: ${theme.colors.G_07};
    ${theme.fonts.body_06}
  }

  &:-ms-input-placeholder {
    color: ${theme.colors.G_07};
    ${theme.fonts.body_06}
  }
`;

const LetterLength = styled.p`
  color: ${theme.colors.G_07};
  ${theme.fonts.body_10}
`;
