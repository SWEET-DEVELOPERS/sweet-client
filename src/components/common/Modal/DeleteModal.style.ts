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

export const DeleteModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;

  width: 28.3rem;
  height: 19.3rem;
  padding: 4.3rem 3.5rem 2rem 3.5rem;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  gap: 2.8rem;
  flex-shrink: 0;
  background-color: white;
  z-index: 1000;
`;

export const DeleteModalContent = styled.div`
  text-align: center;
  ${({ theme }) => theme.fonts.body_03};
`;

export const BtnWrapper = styled.div`
  display: flex;
`;
