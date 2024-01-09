import * as S from './Title.style';

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return <S.Title>{title}</S.Title>;
};

export default Title;
