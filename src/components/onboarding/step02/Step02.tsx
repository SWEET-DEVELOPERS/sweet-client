import Title from '../../common/title/Title';
import { IcPlusImageFinal } from '../../../assets/svg';
import * as S from './Step02.style';
import BtnNext from '../../common/Button/Next/BtnNext';

interface ThumbnailInputProps {
  onNext: VoidFunction;
}

const ThumbnailInput = (props: ThumbnailInputProps) => {
  // TODO 이미지 클릭 시 사진 업로드
  const { onNext } = props;

  return (
    <>
      <Title title='썸네일을 등록해주세요' />
      <div style={{ width: '100%', marginTop: '11rem' }}>
        <S.ThumbnailWrapper>
          <IcPlusImageFinal style={{ width: '5rem', height: '5rem' }} />
        </S.ThumbnailWrapper>
      </div>
      <BtnNext type='button' onClick={onNext}>
        다음
      </BtnNext>
    </>
  );
};

export default ThumbnailInput;
