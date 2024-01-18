import { IcMenu } from '../../../assets/svg';
import * as S from './MyPageHeader.style';

const MyPageHeader = () => {
  return (
    <S.MyPageHeaderWrapper>
      <S.IconWrapper>
        <IcMenu style={{ width: '2.8rem' }} />
      </S.IconWrapper>
    </S.MyPageHeaderWrapper>
  );
};

export default MyPageHeader;
