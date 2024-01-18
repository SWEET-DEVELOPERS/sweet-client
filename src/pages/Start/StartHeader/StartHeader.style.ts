import styled from 'styled-components';
import { IcCancel } from '../../../assets/svg';

export const StartHeaderWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({})};
  padding: 0 2rem;
  height: 5.6rem;
  gap: 21.2rem;
`;

export const SidebarWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  height: 100%;
  background-color: white;
  z-index: 1; /* 다른 요소 위로 표시되도록 설정 */
  transition: width 0.3s ease;
  overflow-x: hidden;
`;

export const Sidebar = styled.div`
  padding: 16px;
`;
export const ButtonWrapper = styled(IcCancel)`
  position: absolute; /* 추가 */
  right: 2rem; /* 추가 */
  top: 50%; /* 추가 */
  transform: translateY(-50%); /* 추가 */

  font-size: 20px;
  color: white;
  cursor: pointer;
  z-index: 2; /* 추가 */
`;
