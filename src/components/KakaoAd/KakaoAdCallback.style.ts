import styled from 'styled-components';

export const KakaoAdCallbackWrapper = styled.div`
  ${({ theme }) => theme.mixin.flexCenter({})};
  background-color: white;
  width: 100%;
  color: black;
  ${({ theme: { fonts } }) => fonts.body_03};
`;
