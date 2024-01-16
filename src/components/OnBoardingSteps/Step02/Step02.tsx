import Title from '../../common/title/Title';
import { IcEmptyThumbnail } from '../../../assets/svg';
import * as S from './Step02.style';
import { useState } from 'react';
import OnBoardingBtn from '../onboardingBtn/OnBoardingBtn';
import OnBoardingHeader from '../onboardingHeader/OnBoardingHeader';

interface ThumbnailInputProps {
  onNext: VoidFunction;
  imageUrl: string;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
}

const ThumbnailInput = (props: ThumbnailInputProps) => {
  // TODO 이미지 클릭 시 사진 업로드
  const { onNext, imageUrl, setImageUrl } = props;
  const [isImageUploaded, setIsImageUploaded] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const selectedFiles = files as FileList;
    setPreviewImage(URL.createObjectURL(selectedFiles[0]));
    setIsImageUploaded(!!selectedFiles?.[0]);

    const imageName = files[0].name.trim();

    // 확장자 제거
    const imageNameWithoutExtension = imageName.replace(/\.[^/.]+$/, '');

    // 띄워쓰기 제거
    const formattedImageName = imageNameWithoutExtension.replace(/\s/g, '');

    // 앞 3글자 가져오기
    const firstThreeLetters = formattedImageName.substring(0, 3);

    // 이미지 업로드 시간
    const uploadTime = new Date().toISOString();

    // 최종 이미지 이름
    const finalImageName = `${firstThreeLetters}${uploadTime}`;
    setImageUrl(finalImageName);
    console.log('imageUrl', imageUrl);
  };

  return (
    <>
      <OnBoardingHeader step={2} />
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
