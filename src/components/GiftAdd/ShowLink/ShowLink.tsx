import { IcCheckContained } from '../../../assets/svg';
import * as S from './ShowLink.styled';

const ShowLink = () => {
  return (
    <S.ShowLinkWrapper>
      <S.LinkText>www.navershopping.com/12314151인ㄹ머;ㅑㅣㄴ러미댤댤</S.LinkText>
      <IcCheckContained style={{ width: '2.4rem', height: '2.4rem', color: '#4A72FF' }} />
    </S.ShowLinkWrapper>
  );
};

export default ShowLink;
