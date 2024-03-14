import Title from '../../common/title/Title';
import { IcEmptyThumbnailFinal, IcImgEditBtn } from '../../../assets/svg';
import * as S from './Step02.style';
import OnBoardingBtn from '../onboardingBtn/OnBoardingBtn';
import usePreviewImage from '../../../hooks/common/usePreviewImage';
import usePostPresignedUrl from '../../../hooks/queries/etc/usePostPresignedUrl';
import { useOnboardingContext } from '../../../context/Onboarding/OnboardingContext';
import useBinarizeAndPutImage from '../../../hooks/queries/onboarding/useBinarizeAndPutImage';
import React, { useState } from 'react';
import OnboardingSkeleton from '../Skeleton/Skeleton';

/** @TODO 추후 presigned URL 진행 */
interface ThumbnailInputProps {
  onNext: VoidFunction;
}

const ThumbnailInput = React.memo((props: ThumbnailInputProps) => {
  const { onNext } = props;
  const { handleImageUpload, previewImageInfo } = usePreviewImage();
  const { updateOnboardingInfo } = useOnboardingContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { binarizeAndPutImage } = useBinarizeAndPutImage();

  const postPresignedUrl = usePostPresignedUrl();

  /**@todo 추후 분리 */
  const fetchPresignedUrl = async (filename: string) => {
    try {
      postPresignedUrl.mutate(filename, {
        onSuccess: async (data) => {
          /** @todo 파일네임 파싱하는 함수 유틸로 처리 */
          setIsLoading(true);
          const presignedUrl = data.presignedUrl.split('?')[0];
          console.log('data.presignedUrl', data.presignedUrl);
          console.log('parsingpresignedUrl', presignedUrl);
          updateOnboardingInfo({ imageUrl: presignedUrl });
          if (previewImageInfo.file) {
            await binarizeAndPutImage({ presignedUrl, file: previewImageInfo.file });
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
      {isLoading ? (
        <OnboardingSkeleton />
      ) : (
        <>
          <Title>썸네일을 등록해주세요</Title>
          <S.IcEmptyThumbnailWrapper>
            <input
              type='file'
              accept='image/jpeg, image/png, image/gif, image/heic, image/webp'
              style={{ display: 'none' }}
              id='imgInput'
              onChange={handleImageUpload}
            />
            <label htmlFor='imgInput'>
              {previewImageInfo.previewImage ? (
                <S.ThumbnailWrapper>
                  <S.PreviewImage src={previewImageInfo.previewImage} alt='preview' />
                  <IcImgEditBtn
                    style={{
                      position: 'absolute',
                      width: '2.8rem',
                      height: '2.8rem',
                      bottom: '1.2rem',
                      right: '0.8rem',
                      cursor: 'pointer',
                    }}
                  />
                </S.ThumbnailWrapper>
              ) : (
                <IcEmptyThumbnailFinal
                  style={{
                    position: 'relative',
                    width: '24rem',
                    height: '24rem',
                    cursor: 'pointer',
                  }}
                />
              )}
            </label>
          </S.IcEmptyThumbnailWrapper>

          <OnBoardingBtn
            isActivated={previewImageInfo.previewImage !== null}
            setStep={() => {
              fetchPresignedUrl(previewImageInfo.imageName);
            }}
          >
            다음
          </OnBoardingBtn>
        </>
      )}
    </>
  );
});
export default ThumbnailInput;
