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
  const { onNext, setFileName, imageFile, setImageFile } = props;
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

      // 확장자 제거
      const imageNameWithoutExtension = imageName.replace(/\.[^/.]+$/, '');

      // 띄워쓰기 제거
      const formattedImageName = imageNameWithoutExtension.replace(/\s/g, '');

      // 앞 3글자 가져오기
      const firstThreeLetters = formattedImageName.substring(0, 3);

      // 이미지 업로드 시간
      // const uploadTime = new Date().toISOString();
      // const uploadTime = new Date().toISOString().split('.')[0].repl(':', '-');
      const uploadTime = Math.random();

      // 최종 이미지 이름
      const finalImageName = `${firstThreeLetters}${uploadTime}`;

      // TODO 그냥 imageUrl에는 presignedUrl을 값에 넣어줘야함
      // setImageUrl(finalImageName);

      setFileName(finalImageName);

      console.log('step02 내 fileName:', finalImageName);
      console.log('step02 내 imageFile:', imageFile);
    }
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
