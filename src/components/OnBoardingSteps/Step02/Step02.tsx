import Title from '../../common/title/Title';
import { IcEmptyThumbnail } from '../../../assets/svg';
import * as S from './Step02.style';
import OnBoardingBtn from '../onboardingBtn/OnBoardingBtn';
import usePreviewImage from '../../../hooks/common/usePreviewImage';
import usePostPresignedUrl from '../../../hooks/queries/etc/usePostPresignedUrl';
import useBinarizeAndPutImage from '../../../hooks/queries/etc/useBinarizeAndPutImage';
import { useOnboardingContext } from '../../../context/Onboarding/OnboardingContext';

/** @TODO 추후 presigned URL 진행 */
interface ThumbnailInputProps {
  onNext: VoidFunction;
}

const ThumbnailInput = (props: ThumbnailInputProps) => {
  const { onNext } = props;
  const { isImageUploaded, previewImage, handleImageUpload, imageName, file } = usePreviewImage();
  const { updateOnboardingInfo } = useOnboardingContext();
  const { binarizeAndPutImage } = useBinarizeAndPutImage();

  const postPresignedUrl = usePostPresignedUrl();

  const fetchPresignedUrl = async (filename: string) => {
    try {
      postPresignedUrl.mutate(filename, {
        onSuccess: async (data) => {
          /** @todo 파일네임 파싱하는 함수 유틸로 처리 */
          const presignedUrl = data.presignedUrl.split('?')[0];
          console.log('data.presignedUrl', data.presignedUrl);
          console.log('parsingpresignedUrl', presignedUrl);
          updateOnboardingInfo({ imageUrl: presignedUrl });

          if (file) {
            await binarizeAndPutImage({ presignedUrl, file });
          }

          onNext();
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

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
      <OnBoardingBtn
        isActivated={isImageUploaded}
        setStep={() => {
          fetchPresignedUrl(imageName);
        }}
      >
        다음
      </OnBoardingBtn>
    </>
  );
};
export default ThumbnailInput;
