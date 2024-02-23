import styled, { keyframes } from 'styled-components';

const frameInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-1rem);
  }
`;
const frameInAnimationLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(1.5rem);
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
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'flex-end' })};
  max-width: 37.5rem;

  &.frame-in {
    animation: ${frameInAnimationLeft} 2s forwards;
  }
`;

export const UpContainer = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};

  &.frame-in {
    animation: ${frameInAnimationUp} 2s forwards;
  }
`;
