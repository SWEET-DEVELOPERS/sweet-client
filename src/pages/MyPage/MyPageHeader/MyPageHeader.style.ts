import styled from 'styled-components';
import { IcCancel } from '../../../assets/svg';

export const StartHeaderWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({})};
  position: fixed;

  padding: 0 2rem;
  height: 5.6rem;
  width: 100%;
  gap: 21.2rem;
  left: 31rem;
  background-color: white;
  z-index: 5;
`;

export const ImgWrapper = styled.header`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'flex-end' })};
  height: 5.6rem;
`;

export const SidebarWrapper = styled.div<{ isOpen: boolean }>`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'column' })};
  position: fixed;

  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;

  width: 100%;
  height: 100vh;
  bottom: 0;
  left: 0;

  padding: 0 1.5rem;
  background-color: white;
  z-index: 9;
`;

export const Sidebar = styled.div`
  padding: 4.5rem 1.6rem 1.6rem 1.6rem;
  p {
    ${({ theme }) => theme.fonts.heading_01};
    margin-bottom: 2.3rem;
  }
`;
export const ButtonWrapper = styled(IcCancel)`
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);

  font-size: 20px;
  cursor: pointer;
  z-index: 2;
`;
