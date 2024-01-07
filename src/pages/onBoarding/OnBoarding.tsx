import React from 'react';
import styled from 'styled-components';
import theme from '../../style/theme';

const OnBoarding = () => {
  return (
    <>
      <TitleWrapper>
        <Title>선물 받을 분의</Title>
        <Title>이름, 혹은 닉네임을 알려주세요</Title>
        <NameInputWrapper>
          <NameInput placeholder='이름을 입력해주세요' />
          <div>(0/10)</div>
        </NameInputWrapper>
      </TitleWrapper>
    </>
  );
};

export default OnBoarding;

const TitleWrapper = styled.div`
  /* background-color: pink; */
  margin-left: 2rem;
  margin-right: 2rem;
`;

const Title = styled.p`
  color: ${theme.colors.Basic.black};
  ${theme.fonts.Heading.heading_01};
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
  border-bottom: 0.1rem solid ${theme.colors.Grayscale.G_02};

  .input::placeholder {
    font-family: 'SUIT';
    ${theme.fonts.Body.body_06}
  }
`;
