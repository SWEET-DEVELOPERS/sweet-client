import * as S from './Title.style';

interface TitleProps {
  title: string;
}

const Title = (titleProps: TitleProps) => {
  return <S.Title>{titleProps.title}</S.Title>;
};

export default Title;
