import { IcMypage, SweetLogoPink } from '../../../assets/svg';
import { useNavigate } from 'react-router';
import * as S from './LogoHeader.style';

const LogoHeader = () => {
  const navigate = useNavigate();

  const handleMyPageIcon = () => {
    navigate(`/mypage`);
  };

  return (
    <S.LogoHeaderWrapper>
      <SweetLogoPink style={{ width: '9.9rem' }} />

      <IcMypage style={{ width: '4.8rem' }} onClick={handleMyPageIcon} />
    </S.LogoHeaderWrapper>
  );
};

export default LogoHeader;