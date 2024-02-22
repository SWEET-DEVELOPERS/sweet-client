import * as S from './AddGiftImg.styled';
import { IcEmptyThumbnail, IcImgEditBtn } from '../../../../../assets/svg';
import { OpenGraphResponseType } from '../../../../../types/etc';
import useHandleImageUpload from '../../../../../hooks/useHandleImageUpload';

interface AddGiftImgProps {
  imageUrl: string;
  openGraph: OpenGraphResponseType | null;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  setFileName: React.Dispatch<React.SetStateAction<string>>;
  setPreviewImage: React.Dispatch<React.SetStateAction<string | null>>;
  setIsImageUploaded: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddGiftImg = ({
  imageUrl,
  openGraph,
  setImageUrl,
  setFile,
  setFileName,
  setPreviewImage,
  setIsImageUploaded,
}: AddGiftImgProps) => {
  const { handleImageUpload } = useHandleImageUpload({
    openGraph,
    setImageUrl,
    setFile,
    setFileName,
    setPreviewImage,
    setIsImageUploaded,
  });
  return (
    <>
      {openGraph?.image !== '' || imageUrl !== '' ? (
        <>
          <S.IcEmptyThumbnailWrapper>
            <input
              type='file'
              accept='image/jpeg, image/png, image/gif, image/*'
              style={{ display: 'none' }}
              id='imgInput'
              onChange={handleImageUpload}
            />
            <label htmlFor='imgInput'>
              {imageUrl ? (
                <S.ThumbnailWrapper>
                  <img
                    src={openGraph?.image ? openGraph.image : imageUrl}
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
                      cursor: 'pointer',
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
                    cursor: 'pointer',
                  }}
                />
              )}
            </label>
          </S.IcEmptyThumbnailWrapper>
        </>
      ) : (
        <IcEmptyThumbnail
          style={{ width: '19.2rem', height: '19.2rem', position: 'relative', cursor: 'pointer' }}
        />
      )}
    </>
  );
};

export default AddGiftImg;
