import { useNavigate } from 'react-router-dom';
import { IcLeft } from '../../../../assets/svg';
import * as S from './EditRoomHeader.style';

const EditRoomHeader = () => {
  const navigate = useNavigate();
  const handleIcon = () => {
    navigate(-1);
  };

  return (
    <S.EditRoomHeaderWrapper>
      <IcLeft
        style={{ width: '3.6rem', zIndex: '999', marginLeft: '0.7rem' }}
        onClick={handleIcon}
      />
    </S.EditRoomHeaderWrapper>
  );
};

export default EditRoomHeader;
