import * as S from './AddGiftImg.styled';
import { IcImgEditBtn, IcPlusImageFinal } from '../../../../../assets/svg';

const AddGiftImg = () => {
  return (
    <S.ThumbnailWrapper>
      <IcImgEditBtn
        style={{
          position: 'absolute',
          width: '2.8rem',
          height: '2.8rem',
          top: '0.8rem',
          right: '0.8rem',
        }}
      />
      <IcPlusImageFinal style={{ width: '5rem', height: '5rem' }} />
    </S.ThumbnailWrapper>
  );
};

export default AddGiftImg;
