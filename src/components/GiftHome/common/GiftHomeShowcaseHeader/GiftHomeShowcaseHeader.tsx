import { IcRight } from '../../../../assets/svg';
import * as S from './GiftHoeShowcaseHeader.style';

interface GiftHomeShowcaseHeaderProps {
  title: string;
}

const GiftHomeShowcaseHeader = ({ title }: GiftHomeShowcaseHeaderProps) => {
  return (
    <S.GiftHomeShowcaseHeaderWrapper>
      <S.ShowcaseTitle>{title}</S.ShowcaseTitle>
      <IcRight style={{ width: '2.4rem', height: '2.4rem', cursor: 'pointer' }} />
    </S.GiftHomeShowcaseHeaderWrapper>
  );
};

export default GiftHomeShowcaseHeader;
