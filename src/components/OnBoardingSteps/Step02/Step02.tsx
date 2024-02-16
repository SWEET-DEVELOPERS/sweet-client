import Title from '../../common/title/Title';
import { IcEmptyThumbnail } from '../../../assets/svg';
import * as S from './Step02.style';
import OnBoardingBtn from '../onboardingBtn/OnBoardingBtn';
import usePreviewImage from '../../../hooks/common/usePreviewImage';
import usePostPresignedUrl from '../../../hooks/queries/etc/usePostPresignedUrl';
import usePutPresignedUrl from '../../../hooks/queries/onboarding/usePutPresignedUrl';
import useBinarizeAndPutImage from '../../../hooks/queries/etc/useBinarizeAndPutImage';

/** @TODO 추후 presigned URL 진행 */
interface ThumbnailInputProps {
  onNext: VoidFunction;
}

const ThumbnailInput = (props: ThumbnailInputProps) => {
  const { onNext } = props;
  const { isImageUploaded, previewImage, handleImageUpload, imageName, file } = usePreviewImage();

  const { binarizeAndPutImage } = useBinarizeAndPutImage();
  // const { presignedUrl, mutate } = usePostPresignedUrl();
  // const { presignedUrl, ...mutation } = usePostPresignedUrl();

  const postPresignedUrl = usePostPresignedUrl();
  const putPresignedUrlAndImageFile = usePutPresignedUrl();

  const fetchPresignedUrl = async (filename: string) => {
    try {
      postPresignedUrl.mutate(filename, {
        onSuccess: async (data) => {
          /** @todo 파일네임 파싱하는 함수 유틸로 처리 */
          const presignedUrl = data.presignedUrl.split('?')[0];
          console.log('data.presignedUrl', data.presignedUrl);
          console.log('parsingpresignedUrl', presignedUrl);

          if (file) {
            await binarizeAndPutImage({ presignedUrl, file });
          }

          // putPresignedUrlAndImageFile.mutate({ presignedUrl: parsingPresignedUrl, binaryData });

          // /** @see formData를 콘솔에 찍는 법 */
          // for (const [key, value] of formData?.entries()) {
          //   console.log(key, value);
          // }

          // onNext();
          // return data.presignedUrl;
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
        // setStep={onNext}>
        setStep={() => {
          fetchPresignedUrl(imageName);
          // fetchPresignedUrl();
        }}
      >
        다음
      </OnBoardingBtn>
    </>
  );
};
export default ThumbnailInput;
