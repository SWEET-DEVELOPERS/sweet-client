import React from 'react';
import * as S from './Modal.style';
import BtnMedium from '../Button/Cta/medium/BtnMedium';

interface ModalProps {
  children: React.ReactNode;
  onConfirmClick?: () => void; // 클릭 이벤트 함수를 받을 수 있는 프롭 추가
}

const Modal: React.FC<ModalProps> = ({ children, onConfirmClick }) => {
  return (
    <>
      <S.Overlay />
      <S.ModalWrapper>
        <S.ModalContent>{children}</S.ModalContent>
        <BtnMedium customStyle={{ width: '21.3rem' }} onClick={onConfirmClick}>
          확인
        </BtnMedium>
      </S.ModalWrapper>
    </>
  );
};

export default Modal;
