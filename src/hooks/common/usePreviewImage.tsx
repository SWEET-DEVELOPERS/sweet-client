import { toast } from 'react-toastify';
import { usePreviewImageContext } from '../../context/Onboarding/PreviewImageContext';
import { IMAGE_HEIGHT, MESSAGE } from '../../core/toast-messages';

const usePreviewImage = () => {
  const { previewImageInfo, updatePreviewImageInfo } = usePreviewImageContext();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    const uploadFalse = () => {
      updatePreviewImageInfo({
        isImageUploaded: false,
        file: null,
        previewImage: null,
        imageName: '',
      });
    };

    if (files && files.length > 0) {
      const selectedFiles = files as FileList;
      const imageName = files[0].name.trim();

      /**@todo 파싱 유틸 함수 공용으로 따로 작성 */
      const uploadTime = new Date().toISOString();

      const uniqueName = `${uploadTime}${imageName}`;
      const finalImageName = uniqueName
        .replace(/\//g, '') // 폴더링 방지를 위해 '/' 제거
        .replace(/\s/g, ''); // 공백 제거

      const img = new Image();
      img.onload = function () {
        if (img.height <= IMAGE_HEIGHT.MIN) {
          //  이미지 너비가  어느 수준  이하일 때 업로드 x
          toast(MESSAGE.HEIGHT_SMALL);
          uploadFalse();
        } else if (img.height > IMAGE_HEIGHT.MAX) {
          toast(MESSAGE.HEIGHT_BIG);
          uploadFalse();
        } else {
          //  이미지 너비가 허용된 범위 내에 있을 때
          updatePreviewImageInfo({
            isImageUploaded: true,
            file: selectedFiles[0],
            previewImage: URL.createObjectURL(selectedFiles[0]),
            imageName: finalImageName,
          });
          console.log('imageName', imageName);
          console.log('finalImageName', finalImageName);
        }
      };
      img.src = URL.createObjectURL(selectedFiles[0]);
    }
  };

  return {
    handleImageUpload,
    previewImageInfo,
  };
};

export default usePreviewImage;
