import * as S from './AddGiftImg.styled';
import { IcEmptyThumbnail, IcImgEditBtn, IcPlusImageFinal } from '../../../../../assets/svg';
import { OpenGraphResponseType } from '../../../../../types/etc';

// 들어오는 이미지 있으면 넣어주고 상품 이름 넣어주고, 아니면 그냥 빈 화면
interface AddGiftImgProps {
  imageUrl: string;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
  onClickEditBtn: (event: React.ChangeEvent<HTMLInputElement>) => void;
  previewImage: string | null;
  setPreviewImage: React.Dispatch<React.SetStateAction<string | null>>;
  openGraph: OpenGraphResponseType;
}

const AddGiftImg = ({
  imageUrl,
  onClickEditBtn,
  // previewImage,
  // setPreviewImage,
  openGraph,
}: AddGiftImgProps) => {
  // 빌드 에러 해결 위해 임의로 추가
  // 나중에 이미지 첨부 기능 presignedUrl이랑 같이 구현 예정
if (openGraph.image !== ''){
  
}
  return (
    <>
      {openGraph.image !== '' || imageUrl !== '' ? (
        <>
          <S.IcEmptyThumbnailWrapper>
            <input
              type='file'
              accept='image/*'
              style={{ display: 'none' }}
              id='imgInput'
              onChange={onClickEditBtn}
            />
            <label htmlFor='imgInput'>
              {openGraph ? (
                <S.ThumbnailWrapper>
                  <img
                    src={openGraph.image}
                    alt='preview'
                    style={{
                      position: 'relative',
                      width: '19.2rem',
                      height: '19.2rem',
                      borderRadius: '1.2rem',
                    }}
                  />
                  <IcImgEditBtn
                    style={{
                      position: 'absolute',
                      width: '2.8rem',
                      height: '2.8rem',
                      top: '0.8rem',
                      right: '0.8rem',
                    }}
                  />
                </S.ThumbnailWrapper>
              ) : (
                <IcEmptyThumbnail
                  style={{
                    width: '19.2rem',
                    height: '19.2rem',
                    position: 'relative',
                    marginTop: '2.8rem',
                  }}
                />
              )}
            </label>
          </S.IcEmptyThumbnailWrapper>
        </>
      ) : (
        <IcEmptyThumbnail style={{ width: '19.2rem', height: '19.2rem', position: 'relative' }} />
      )}
    </>
  );
};

export default AddGiftImg;
