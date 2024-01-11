import * as S from './Title.style';

interface TitleProps {
  title: string;
  userName?: string;
}

const Title = ({ title, userName }: TitleProps) => {
  return (
    <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
      {userName && <S.Username>{userName}</S.Username>}
      <S.Title>{title}</S.Title>
    </div>
  );
};

export default Title;
