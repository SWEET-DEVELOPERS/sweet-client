import React from 'react';
import * as S from './Modal.style';
import BtnMedium from '../Button/Cta/medium/BtnMedium';

interface ModalProps {
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <>
      <S.Overlay />
      <S.ModalWrapper>
        <S.ModalContent>{children}</S.ModalContent>
        <BtnMedium customStyle={{ width: '21.3rem' }}>확인</BtnMedium>
      </S.ModalWrapper>
    </>
  );
};

export default Modal;
