import Title from '../../common/title/Title';
import { IcEmptyThumbnail } from '../../../assets/svg';
import * as S from './Step02.style';
import OnBoardingBtn from '../onboardingBtn/OnBoardingBtn';
import usePreviewImage from '../../../hooks/common/usePreviewImage';

/** @TODO 추후 presigned URL 진행 */
interface ThumbnailInputProps {
  onNext: VoidFunction;
}

const ThumbnailInput = (props: ThumbnailInputProps) => {
  const { onNext } = props;

  const { isImageUploaded, previewImage, handleImageUpload } = usePreviewImage();

  return (
    <>
      <Title>썸네일을 등록해주세요</Title>
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
        {previewImage && <S.PreviewImg src={previewImage} />}
      </S.IcEmptyThumbnailWrapper>
      <OnBoardingBtn isActivated={isImageUploaded} setStep={onNext}>
        다음
      </OnBoardingBtn>
    </>
  );
};
export default ThumbnailInput;
