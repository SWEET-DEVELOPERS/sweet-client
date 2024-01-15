import * as S from './Type1.style';

interface Type1TagProps {
  tag: string;
}

const Type1Tag = ({ tag }: Type1TagProps) => {
  return <S.Wrapper>{tag}</S.Wrapper>;
};

export default Type1Tag;
