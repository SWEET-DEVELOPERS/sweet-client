import styled from 'styled-components';

export const ImgWrapper = styled.div`
  animation: ani 1.5s infinite alternate;

  @keyframes ani {
    0% {
      transform: translate(0, 3rem);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;
export const TextWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  position: absolutes;
  margin-top: -11rem;

  z-index: 1;
`;

export const TitleText = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter};
  text-align: center;
  font-family: 'SUIT';
  font-size: 42px;
  font-style: normal;
  font-weight: 800;
  line-height: 130%;
  background: linear-gradient(180deg, #ff2176 0%, #ff4d8f 47.69%, #ffa1c1 140.68%);
  -webkit-background-clip: text;
  color: transparent;
`;

export const SubTitleText = styled.div`
  color: ${({ theme: { colors } }) => colors.G_07};
  text-align: center;
  font-family: 'SUIT';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;

  margin-top: 2.7rem;
`;
