import * as S from './Title.style';

interface SubTitleProps {
  subTitle: string;
}

const SubTitle = ({ subTitle }: SubTitleProps) => {
  return <S.SubTitle>{subTitle}</S.SubTitle>;
};

export default SubTitle;
