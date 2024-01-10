import Title from '../../common/title/Title';
import { IcPlusImageFinal } from '../../../assets/svg';
import * as S from './Step02.style';

const ThumbnailInput = () => {
  // TODO 이미지 클릭 시 사진 업로드
  return (
    <>
      <Title title='썸네일을 등록해주세요' />
      <div style={{ width: '100%', marginTop: '11rem' }}>
        <S.ThumbnailWrapper>
          <IcPlusImageFinal style={{ width: '5rem', height: '5rem' }} />
        </S.ThumbnailWrapper>
      </div>
    </>
  );
};

export default ThumbnailInput;
