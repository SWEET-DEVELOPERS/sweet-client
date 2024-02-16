import { useState } from 'react';

const usePreviewImage = () => {
  const [isImageUploaded, setIsImageUploaded] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [imageName, setImageName] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (files && files.length > 0) {
      const selectedFiles = files as FileList;
      const imageName = files[0].name.trim();
      // const selectedFile = files[0];
      // const newFormData = new FormData();

      // newFormData.append('file', selectedFile);

      setFile(selectedFiles[0]);

      setPreviewImage(URL.createObjectURL(selectedFiles[0]));
      setIsImageUploaded(!!selectedFiles?.[0]);

      setImageName(imageName);
      // console.log('handleImageUpload newformData', newFormData);
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
