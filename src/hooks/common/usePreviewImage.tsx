import { useState } from 'react';
import { useOnboardingContext } from '../../context/Onboarding/OnboardingContext';

const usePreviewImage = () => {
  const [isImageUploaded, setIsImageUploaded] = useState<boolean>(false);
  // const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [imageName, setImageName] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const { previewImage, setPreviewImage } = useOnboardingContext();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (files && files.length > 0) {
      const selectedFiles = files as FileList;

      /**@todo 이미지 파싱 추가 */
      const imageName = files[0].name.trim();

      setFile(selectedFiles[0]);

      setPreviewImage(URL.createObjectURL(selectedFiles[0]));
      setIsImageUploaded(!!selectedFiles?.[0]);

      setImageName(imageName);
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
