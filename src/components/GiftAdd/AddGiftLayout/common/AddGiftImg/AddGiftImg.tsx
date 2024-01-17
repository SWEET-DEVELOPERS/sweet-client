import * as S from './AddGiftImg.styled';
import { IcImgEditBtn, IcPlusImageFinal } from '../../../../../assets/svg';

// 들어오는 이미지 있으면 넣어주고 상품 이름 넣어주고, 아니면 그냥 빈 화면

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
