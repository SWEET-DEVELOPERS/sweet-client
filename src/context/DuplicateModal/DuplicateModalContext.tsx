import { PropsWithChildren, createContext, useContext, useState } from 'react';

interface DuplicateModalContextType {
  modalStatus: boolean;
  openModal: () => void;
  closeModal: () => void;
}
const initialContext: DuplicateModalContextType = {
  modalStatus: false,
  openModal: () => {},
  closeModal: () => {},
};

const DuplicateModalContext = createContext<DuplicateModalContextType>(initialContext);

export const useDuplicateModalContext = () => useContext(DuplicateModalContext);

export const DuplicateModalProvider = ({ children }: PropsWithChildren) => {
  const [modalStatus, setModalStatus] = useState(false);

  const openModal = () => {
    console.log('open modal');
    setModalStatus(true);
  };

  const closeModal = () => {
    console.log('close modal');
    setModalStatus(false);
  };

  return (
    <DuplicateModalContext.Provider value={{ modalStatus, openModal, closeModal }}>
      {children}
    </DuplicateModalContext.Provider>
  );
};
