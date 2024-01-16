import { useNavigate } from 'react-router-dom';
import { IcRight } from '../../../../assets/svg';
import * as S from './GiftHoeShowcaseHeader.style';

interface GiftHomeShowcaseHeaderProps {
  title: string;
  category: string;
}

const GiftHomeShowcaseHeader = ({ title, category }: GiftHomeShowcaseHeaderProps) => {
  const navigate = useNavigate();
  return (
    <S.GiftHomeShowcaseHeaderWrapper>
      <S.ShowcaseTitle>{title}</S.ShowcaseTitle>
      <IcRight
        style={{ width: '2.4rem', height: '2.4rem', cursor: 'pointer' }}
        onClick={() =>
          navigate(category === 'friends' ? '/gift-detail-friends' : '/gift-detail-2030')
        }
      />
    </S.GiftHomeShowcaseHeaderWrapper>
  );
};

export default GiftHomeShowcaseHeader;
