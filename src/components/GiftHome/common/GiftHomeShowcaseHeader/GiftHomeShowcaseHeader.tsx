import { useNavigate } from 'react-router-dom';
import { IcRight } from '../../../../assets/svg';
import * as S from './GiftHoeShowcaseHeader.style';

interface GiftHomeShowcaseHeaderProps {
  title: string;
  category: string;
  length: number;
}

const GiftHomeShowcaseHeader = ({ title, category, length }: GiftHomeShowcaseHeaderProps) => {
  const navigate = useNavigate();
  return (
    <S.GiftHomeShowcaseHeaderWrapper>
      <S.ShowcaseTitle>{title}</S.ShowcaseTitle>
      {length > 0 ? (
        <IcRight
          style={{ width: '2.4rem', height: '2.4rem', cursor: 'pointer' }}
          onClick={() =>
            navigate(category === 'friends' ? '/gift-detail-friends' : '/gift-detail-2030')
          }
        />
      ) : (
        <></>
      )}
    </S.GiftHomeShowcaseHeaderWrapper>
  );
};

export default GiftHomeShowcaseHeader;
