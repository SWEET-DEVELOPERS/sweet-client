import * as S from './AddGiftImg.styled';
import { IcImgEditBtn, IcPlusImageFinal } from '../../../../../assets/svg';

// 들어오는 이미지 있으면 넣어주고 상품 이름 넣어주고, 아니면 그냥 빈 화면
interface AddGiftImgProps {
  imageUrl: string;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
}

const AddGiftImg = ({ imageUrl, setImageUrl }: AddGiftImgProps) => {
  // 빌드 에러 해결 위해 임의로 추가
  // 나중에 이미지 첨부 기능 presignedUrl이랑 같이 구현 예정
  setImageUrl('');
  return (
    <S.ThumbnailWrapper>
      {imageUrl !== '' ? (
        <>
          <IcImgEditBtn
            style={{
              position: 'absolute',
              width: '2.8rem',
              height: '2.8rem',
              top: '0.8rem',
              right: '0.8rem',
            }}
          />
          <S.ImgPreview src='' />
        </>
      ) : (
        <IcPlusImageFinal style={{ width: '5rem', height: '5rem' }} />
      )}
    </S.ThumbnailWrapper>
  );
};

export default AddGiftImg;
