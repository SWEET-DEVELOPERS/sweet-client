import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  position: fixed;

  width: 283px;
  height: 195px;
  padding: 43px 35px 20px 35px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  gap: 28px;
  flex-shrink: 0;
  background-color: white;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  text-align: center;
  ${({ theme }) => theme.fonts.body_03};
`;
