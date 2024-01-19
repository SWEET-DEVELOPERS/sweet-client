import styled, { keyframes } from 'styled-components';

const frameInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }

  100%{
    opacity: 1;
    transform: translateX(-3%);
  }
`;
const frameInAnimationLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100%);
  }

  100%{
    opacity: 1;
    transform: translate(30%);
  }
`;
const frameInAnimationUp = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0%);
  }

  100%{
    opacity: 0;
    transform: translateY(-100%);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 2.4rem;

  &.frame-in {
    animation: ${frameInAnimation} 2s forwards;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 4.9rem;

  &.frame-in {
    animation: ${frameInAnimationLeft} 2s forwards;
  }
`;

export const UpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &.frame-in {
    animation: ${frameInAnimationUp} 2s forwards;
  }
`;
