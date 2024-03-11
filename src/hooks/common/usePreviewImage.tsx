import { toast } from 'react-toastify';
import { usePreviewImageContext } from '../../context/Onboarding/PreviewImageContext';
import { IMAGE_HEIGHT, MESSAGE } from '../../core/toast-messages';
import Resizer from 'react-image-file-resizer';

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

    const resizedFile = (file: File, previewImage: string) => {
      new Promise((resolve) => {
        Resizer.imageFileResizer(
          file,
          384,
          384,
          'WEBP',
          100,
          0,
          (uri) => {
            updatePreviewImageInfo({
              isImageUploaded: true,
              imageName: (uri as File).name,
              file: uri as File,
              previewImage: previewImage,
            });
            resolve(uri);
            console.log('됐다?');
          },
          'file',
        );
      });
    };

    if (files && files.length > 0) {
      const selectedFiles = files as FileList;
      /**@see 추후 유니크한 이미지 네임 필요할 수 있으니 일단 주석처리 */
      // const imageName = files[0].name.trim();

      /**@todo 파싱 유틸 함수 공용으로 따로 작성 */
      // const uploadTime = new Date().toISOString();

      // const uniqueName = `${uploadTime}${imageName}`;
      // const finalImageName = uniqueName
      //   .replace(/\//g, '') // 폴더링 방지를 위해 '/' 제거
      //   .replace(/\s/g, ''); // 공백 제거
      resizedFile(selectedFiles[0], URL.createObjectURL(selectedFiles[0]));

      const img = new Image();
      img.onload = function () {
        if (img.height <= IMAGE_HEIGHT.MIN) {
          //  이미지 너비가  어느 수준  이하일 때 업로드 x
          toast(MESSAGE.HEIGHT_SMALL);
          uploadFalse();
        } else if (img.height > IMAGE_HEIGHT.MAX) {
          toast(MESSAGE.HEIGHT_BIG);
          uploadFalse();
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
