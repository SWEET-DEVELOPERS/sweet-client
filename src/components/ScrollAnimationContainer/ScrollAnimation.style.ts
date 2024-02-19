import styled, { keyframes } from 'styled-components';

const frameInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }

  100%{
    opacity: 1;
    transform: translateX(-5%);
  }
`;
const frameInAnimationLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100%);
  }

  100%{
    opacity: 1;
    transform: translate(25%);
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
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'column' })};
  max-width: 37.5rem;

  &.frame-in {
    animation: ${frameInAnimation} 2s forwards;
  }
`;

export const LeftContainer = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'column' })};
  max-width: 37.5rem;

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
