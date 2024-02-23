import React from 'react';
import * as S from './DuplicateModal.style';
import BtnMedium from '../Button/Cta/medium/BtnMedium';

interface DuplicateModalProps {
  children: React.ReactNode;
  onConfirmClick?: () => void;
}

const DuplicateModal = ({ children, onConfirmClick }: DuplicateModalProps) => {
  return (
    <>
      <S.Overlay />
      <S.DuplicateModalWrapper>
        <S.DuplicateModalContent>{children}</S.DuplicateModalContent>
        <BtnMedium customStyle={{ width: '21.3rem' }} onClick={onConfirmClick}>
          다시 등록하기
        </BtnMedium>
      </S.DuplicateModalWrapper>
    </>
  );
};

export default DuplicateModal;
