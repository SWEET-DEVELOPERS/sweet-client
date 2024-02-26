import { toast } from 'react-toastify';
import { usePreviewImageContext } from '../../context/Onboarding/PreviewImageContext';

const usePreviewImage = () => {
  const { previewImageInfo, updatePreviewImageInfo } = usePreviewImageContext();

  /**@todo 이미지 최소,최대 height 상의 필요*/
  const MIN_IMAGE_HEIGHT = 300;
  const MAX_IMAGE_HEIGHT = 1800;

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
      // const parseImageName = useParseFileName({
      //   setFileName: setImageName,
      //   imageString: previewImageInfo.imageName,
      // });

      const img = new Image();
      img.onload = function () {
        if (img.height <= MIN_IMAGE_HEIGHT) {
          //  이미지 너비가  어느 수준  이하일 때 업로드 x
          toast(
            `이미지 세로길이가 너무 작습니다. ${MIN_IMAGE_HEIGHT}px 이상 이미지를 선택해주세요.`,
          );
          uploadFalse();
        } else if (img.height > MAX_IMAGE_HEIGHT) {
          toast(
            `이미지 세로길이가 너무 큽니다. ${MAX_IMAGE_HEIGHT}px 이하 이미지를 선택해주세요. `,
          );
          uploadFalse();
        } else {
          //  이미지 너비가 허용된 범위 내에 있을 때
          updatePreviewImageInfo({
            isImageUploaded: true,
            file: selectedFiles[0],
            previewImage: URL.createObjectURL(selectedFiles[0]),
            imageName: imageName,
          });
          console.log('imageName', imageName);
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
