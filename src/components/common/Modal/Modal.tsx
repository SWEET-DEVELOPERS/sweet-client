import React from 'react';
import * as S from './Modal.style';
import BtnMedium from '../Button/Cta/medium/BtnMedium';
import { IcCancel } from '../../../assets/svg';

interface ModalProps {
  children: React.ReactNode;
  onConfirmClick?: () => void; // 클릭 이벤트 함수를 받을 수 있는 프롭 추가
}

const Modal = ({ children, onConfirmClick }: ModalProps) => {
  return (
    <>
      <S.Overlay />
      <S.ModalWrapper>
        <IcCancel
          style={{ width: '2.4rem', position: 'absolute', top: '1.6rem', right: '1.6rem' }}
          onClick={onConfirmClick}
        />
        <S.ModalContent>{children}</S.ModalContent>
        <BtnMedium customStyle={{ width: '21.3rem' }} onClick={onConfirmClick}>
          확인
        </BtnMedium>
      </S.ModalWrapper>
    </>
  );
};

export default Modal;
