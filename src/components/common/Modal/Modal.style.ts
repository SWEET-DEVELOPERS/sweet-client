import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* 어두운 색상으로 설정 */
  z-index: 999; /* 모달보다 낮은 z-index */
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  width: 283px;
  height: 195px;
  padding: 43px 35px 20px 35px;
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
