import * as S from './Type3.style';

interface Type3TagProps {
  tag: string;
}

const Type3Tag = ({ tag }: Type3TagProps) => {
  return <S.Wrapper>{tag}</S.Wrapper>;
};

export default Type3Tag;
