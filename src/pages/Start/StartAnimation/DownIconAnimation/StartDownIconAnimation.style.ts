import styled, { keyframes } from 'styled-components';
import { IcDown } from '../../../../assets/svg';

export const DownIconWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  position: relative;
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

export const DownIcon = styled(IcDown)<{ $isVisible: boolean }>`
  position: absolute;
  top: 4rem;
  width: 4rem;
  color: ${({ theme: { colors } }) => colors.G_07};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)}; /* 스크롤에 따라 투명도 조절 */
  animation: ${({ $isVisible }) => ($isVisible ? 'none' : frameInAnimationUp)} 2s forwards; /* isVisible에 따라 애니메이션 적용 */
`;
