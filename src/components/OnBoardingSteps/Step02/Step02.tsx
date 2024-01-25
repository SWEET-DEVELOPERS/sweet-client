import Title from '../../common/title/Title';
import { IcEmptyThumbnail } from '../../../assets/svg';
import * as S from './Step02.style';
import { useState } from 'react';
import OnBoardingBtn from '../onboardingBtn/OnBoardingBtn';

interface ThumbnailInputProps {
  onNext: VoidFunction;
  imageUrl: string;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
  fileName: string;
  setFileName: React.Dispatch<React.SetStateAction<string>>;
  imageFile: File | null;
  setImageFile: React.Dispatch<React.SetStateAction<File | null>>;
}

const ThumbnailInput = (props: ThumbnailInputProps) => {
  // TODO 이미지 클릭 시 사진 업로드
  const { onNext, setFileName, setImageFile } = props;
  const [isImageUploaded, setIsImageUploaded] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files && files.length > 0) {
      const selectedFiles = files as FileList;
      setPreviewImage(URL.createObjectURL(selectedFiles[0]));
      setIsImageUploaded(!!selectedFiles?.[0]);
      const imageFile = selectedFiles[0];

      setImageFile(imageFile);
      // setFileName(imageFile);
      console.log('step02 내 지민이와 함께하는 ', imageFile);
      const imageName = files[0].name.trim();
      setFileName(imageName);
      console.log('step02 내 imageFile:', imageFile);
    }
  };

  return (
    <>
      <Title>썸네일을 등록해주세요</Title>
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
              style={{
                width: '24rem',
                height: '24rem',
                position: 'absolute',
                borderRadius: '1.2rem',
              }}
            />
          )}
        </S.IcEmptyThumbnailWrapper>
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
