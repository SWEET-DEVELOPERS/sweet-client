import { useState } from 'react';

const usePreviewImage = () => {
  const [isImageUploaded, setIsImageUploaded] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (files && files.length > 0) {
      const selectedFiles = files as FileList;
      setPreviewImage(URL.createObjectURL(selectedFiles[0]));
      setIsImageUploaded(!!selectedFiles?.[0]);
    }
  };

  return {
    isImageUploaded,
    previewImage,
    handleImageUpload,
  };
};

export default usePreviewImage;
