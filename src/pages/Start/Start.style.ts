import styled, { keyframes } from 'styled-components';
import Main2 from '../../assets/img/Main02.png';

export const Wrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter};
`;

export const Animation = styled.div`
  width: 100%;
`;

const frameInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }

  100%{
    opacity: 1;
    transform: translateX(0%);
  }
`;

export const MainSecond = styled.div`
  background-image: url(${Main2});
`;

export const PersonWrapper = styled.div`
  margin: 0 2rem;
  gap: 2.4rem;
  margin-top: 25.3rem;
  margin-bottom: 8rem;
`;

export const Me = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 2.5rem;
  margin-left: 11rem;

  &.frame-in {
    animation: ${frameInAnimation} 2s forwards;
  }
`;
