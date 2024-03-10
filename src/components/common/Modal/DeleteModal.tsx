import React from 'react';
import * as S from './DeleteModal.style';
import BtnMedium from '../Button/Cta/medium/BtnMedium';
import { IcCancel } from '../../../assets/svg';
import BtnDeleteMedium from '../Button/Cta/medium/BtnDeleteMedium';

interface DeleteModalProps {
  children: React.ReactNode;
  onClickDelete: (giftId?: number) => void;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  clickedItem?: number | undefined;
}

const DeleteModal = ({
  children,
  onClickDelete,
  setIsModalOpen,
  clickedItem,
}: DeleteModalProps) => {
  const onClickCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <S.Overlay />
      <S.DeleteModalWrapper>
        <IcCancel
          style={{ width: '2.4rem', position: 'absolute', top: '1.6rem', right: '1.6rem' }}
          onClick={onClickCancel}
        />
        <S.DeleteModalContent>{children}</S.DeleteModalContent>
        <S.BtnWrapper>
          <BtnDeleteMedium
            customStyle={{
              width: '12rem',
              outline: 'none',
              border: 'none',
              backgroundColor: 'white',
              color: 'black',
            }}
            onClick={() => (clickedItem ? onClickDelete(clickedItem) : onClickDelete())}
          >
            네, 삭제할게요
          </BtnDeleteMedium>
          <BtnMedium customStyle={{ width: '12rem' }} onClick={onClickCancel}>
            아니오
          </BtnMedium>
        </S.BtnWrapper>
      </S.DeleteModalWrapper>
    </>
  );
};

export default DeleteModal;
