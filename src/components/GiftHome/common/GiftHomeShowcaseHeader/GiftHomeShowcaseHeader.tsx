import { useNavigate } from 'react-router-dom';
import { IcRight } from '../../../../assets/svg';
import * as S from './GiftHoeShowcaseHeader.style';

interface GiftHomeShowcaseHeaderProps {
  targetDate: Date;
  roomId: number;
  title: string;
  category: string;
  length: number;
}

const GiftHomeShowcaseHeader = ({
  targetDate,
  roomId,
  title,
  category,
  length,
}: GiftHomeShowcaseHeaderProps) => {
  const navigate = useNavigate();

  const onClickEditBtn = () => {
    navigate(`/add-gift/${roomId}/${targetDate}`);
  };

  return (
    <S.GiftHomeShowcaseHeaderWrapper>
      <S.ShowcaseTitle>{title}</S.ShowcaseTitle>
      {category === 'my' && length > 0 ? (
        <S.EditText onClick={onClickEditBtn}>수정하기</S.EditText>
      ) : null}
      {category !== 'my' && length > 0 ? (
        <IcRight
          style={{ width: '2.4rem', height: '2.4rem', cursor: 'pointer' }}
          onClick={() =>
            navigate(
              category === 'friends'
                ? `/gift-detail-friends/${roomId}/${targetDate}`
                : category === 'my'
                  ? `/add-gift/${roomId}/${targetDate}`
                  : `/gift-detail-2030/${roomId}/${targetDate}`,
            )
          }
        />
      ) : (
        <></>
      )}
    </S.GiftHomeShowcaseHeaderWrapper>
  );
};

export default GiftHomeShowcaseHeader;
