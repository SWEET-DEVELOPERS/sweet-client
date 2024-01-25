import Title from '../../common/title/Title';
import { IcEmptyThumbnail } from '../../../assets/svg';
import * as S from './Step02.style';
import { useState } from 'react';
import OnBoardingBtn from '../onboardingBtn/OnBoardingBtn';

/** @TODO 추후 presigned URL 진행 */
interface ThumbnailInputProps {
  onNext: VoidFunction;
  setFileName: React.Dispatch<React.SetStateAction<string>>;
  setImageFile: React.Dispatch<React.SetStateAction<File | null>>;
}

const ThumbnailInput = (props: ThumbnailInputProps) => {
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

      const imageName = files[0].name.trim();
      setFileName(imageName);
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
          {previewImage && <S.PreviewImg previewImage={previewImage} />}
        </S.IcEmptyThumbnailWrapper>
        <OnBoardingBtn isActivated={isImageUploaded} setStep={onNext}>
          다음
        </OnBoardingBtn>
      </div>
    </>
  );
};
export default ThumbnailInput;
