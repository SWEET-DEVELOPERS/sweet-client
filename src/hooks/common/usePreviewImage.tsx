import { useState } from 'react';

const usePreviewImage = () => {
  const [isImageUploaded, setIsImageUploaded] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [imageName, setImageName] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);

  /**@todo 이미지 최소 height 상의 필요*/
  const MIN_IMAGE_HEIGHT = 300;

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (files && files.length > 0) {
      const selectedFiles = files as FileList;
      const imageName = files[0].name.trim();

      const img = new Image();
      img.onload = function () {
        if (img.height <= MIN_IMAGE_HEIGHT) {
          //  이미지 너비가  어느 수준  이하일 때 업로드 x
          alert(
            `이미지 세로길이가 너무 작습니다. ${MIN_IMAGE_HEIGHT}px 이상인 이미지를 선택해주세요.`,
          );
          setIsImageUploaded(false);
          setFile(null);
          setPreviewImage(null);
          setImageName('');
        } else {
          //  이미지 너비가 허용된 범위  내에 있을 때
          setFile(selectedFiles[0]);
          setPreviewImage(URL.createObjectURL(selectedFiles[0]));
          setIsImageUploaded(true);
          setImageName(imageName);
        }
      };
      img.src = URL.createObjectURL(selectedFiles[0]);
    }
  };

  return {
    isImageUploaded,
    previewImage,
    handleImageUpload,
    imageName,
    file,
  };
};

export default usePreviewImage;
