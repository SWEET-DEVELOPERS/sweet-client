import styled, { css } from 'styled-components';
import theme from '../../style/theme';
import { useState } from 'react';

const OnBoardingName = () => {
  const [text, setText] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <>
      <TitleWrapper>
        <Title>선물 받을 분의</Title>
        <Title>이름, 혹은 닉네임을 알려주세요</Title>
        <NameInputWrapper>
          <NameInput
            type='text'
            onChange={onChange}
            maxLength={10}
            placeholder='이름을 입력해주세요'
            hasContent={text.length > 0}
            maxLengthReached={text.length === 10}
          />
          {/* 여기 입력되는 input text의 색상과 폰트 어떻게 설정하지... */}
          <LetterLength>({text.length}/10)</LetterLength>
        </NameInputWrapper>
        {/* <NextBtn type='button'>
          <BtnLetter>다음</BtnLetter>
        </NextBtn> */}
      </TitleWrapper>
    </>
  );
};

export default OnBoardingName;

const TitleWrapper = styled.div`
  /* background-color: pink; */
  margin-left: 2rem;
  margin-right: 2rem;
`;

const Title = styled.p`
  color: ${theme.colors.B_01};
  ${theme.fonts.heading_01};
`;

const NameInputWrapper = styled.div`
  /* background-color: skyblue; */
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  margin-top: 7.2rem;
`;

const NameInput = styled.input<{ hasContent: boolean; maxLengthReached: boolean }>`
  width: 100%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: flex-start;
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

    &::focus {
    color: ${theme.colors.P_05};
    ${theme.fonts.body_05}
  }

  &::placeholder {
    font-family: 'SUIT';
    color: ${theme.colors.G_07};
    ${theme.fonts.body_06}
  }
`;

const LetterLength = styled.p`
  color: ${theme.colors.G_07};
  ${theme.fonts.body_10}
`;

// const NextBtn = styled.button`
//   display: inline-flex;
//   height: 4.4rem;
//   padding: 1rem 1.1rem 1rem 2rem;
//   align-items: center;
//   flex-shrink: 0;
//   border-radius: 9.9rem;
//   margin-right: 2rem;
//   background-color: ${theme.colors.Grayscale.G_02};
// `;

// const BtnLetter = styled.p`
//   color: ${theme.colors.Grayscale.G_07};
// `;
