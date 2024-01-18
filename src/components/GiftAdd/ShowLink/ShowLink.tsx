import { IcCheckContained } from '../../../assets/svg';
import * as S from './ShowLink.styled';

interface ShowLinkProps {
  link: string;
}

const ShowLink = ({ link }: ShowLinkProps) => {
  console.log('link', link);
  return (
    <S.ShowLinkWrapper>
      <S.LinkText>{link}</S.LinkText>
      <IcCheckContained style={{ width: '2.4rem', height: '2.4rem', color: '#4A72FF' }} />
    </S.ShowLinkWrapper>
  );
};

export default ShowLink;
