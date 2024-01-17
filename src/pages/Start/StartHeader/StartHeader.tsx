import { useState } from 'react';
import { IcMenu, SweetLogoPink } from '../../../assets/svg';
import * as S from './StartHeader.style';

const StartHeader = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggleSide = () => {
  //   setIsOpen(true);
  // };

  return (
    <S.StartHeaderWrapper>
      <SweetLogoPink style={{ width: '9.9rem' }} />
      <IcMenu style={{ width: '2.8rem' }} />
    </S.StartHeaderWrapper>
  );
};

export default StartHeader;
