import styled from 'styled-components';
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
          <NameInput onChange={onChange} maxLength={10} placeholder='이름을 입력해주세요' />
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

const NameInput = styled.input`
  width: 100%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0.8rem;
  border-bottom: 0.1rem solid ${theme.colors.G_02};

  .input::placeholder {
    font-family: 'SUIT';
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
