import * as S from './Title.style';

interface SubTitleProps {
  subTitle: string;
}

const SubTitle = (subTitleProps: SubTitleProps) => {
  return <S.SubTitle>{subTitleProps.subTitle}</S.SubTitle>;
};

export default SubTitle;
