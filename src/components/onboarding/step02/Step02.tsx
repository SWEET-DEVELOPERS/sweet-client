import Title from '../../common/title/Title';
import { IcEmptyThumbnail } from '../../../assets/svg';
import * as S from './Step02.style';
import { useState } from 'react';
import OnBoardingBtn from '../onboardingBtn/OnBoardingBtn';

interface ThumbnailInputProps {
  onNext: VoidFunction;
}

const ThumbnailInput = (props: ThumbnailInputProps) => {
  // TODO 이미지 클릭 시 사진 업로드
  const { onNext } = props;
  const [isImageUploaded, setIsImageUploaded] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const selectedFiles = files as FileList;
    setPreviewImage(URL.createObjectURL(selectedFiles[0]));
    setIsImageUploaded(!!selectedFiles?.[0]);
  };

  return (
    <>
      <Title title='썸네일을 등록해주세요' />
      <div>
        <S.IcEmptyThumbnailWrapper>
          <input
            type='file'
            accept='image/*'
            style={{ display: 'none' }}
            id='imgInput'
            onChange={handleImageUpload}
          />
          <label htmlFor='imgInput'>
            <IcEmptyThumbnail style={{ width: '24rem', height: '24rem', position: 'relative' }} />
          </label>
          {previewImage && (
            <img
              src={previewImage}
              alt='preview'
              style={{ width: '24rem', height: '24rem', position: 'absolute' }}
            />
          )}
        </S.IcEmptyThumbnailWrapper>
        {/* <S.ThumbnailWrapper>
          <input
            type='file'
            accept='image/*'
            style={{ display: 'none' }}
            id='imgInput'
            onChange={handleImageUpload}
          />
          <label htmlFor='imgInput'>
            <IcPlusImageFinal style={{ width: '5rem', height: '5rem' }} />
          </label>
          {previewImage && <img src={previewImage} alt='preview' style={{ zIndex: '1' }} />}
        </S.ThumbnailWrapper> */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <OnBoardingBtn isActivated={isImageUploaded} setStep={onNext}>
            다음
          </OnBoardingBtn>
        </div>
      </div>
    </>
  );
};

export default ThumbnailInput;
