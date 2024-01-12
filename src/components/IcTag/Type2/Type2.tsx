import * as S from './Type2.style';

interface Type2TagProps {
  tag: string;
}

const Type2Tag = ({ tag }: Type2TagProps) => {
  return <S.Wrapper>{tag}</S.Wrapper>;
};

export default Type2Tag;
