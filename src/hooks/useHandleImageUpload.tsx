import { useAddGiftContext } from '../context/AddGift/AddGiftContext';
import { OpenGraphResponseType } from '../types/etc';
import useParseFileName from './useParseFileName';

interface HandleImageUploadProps {
  openGraph: OpenGraphResponseType | null;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  setFileName: React.Dispatch<React.SetStateAction<string>>;
  setPreviewImage: React.Dispatch<React.SetStateAction<string | null>>;
  setIsImageUploaded: React.Dispatch<React.SetStateAction<boolean>>;
}

const useHandleImageUpload = ({
  openGraph,
  setImageUrl,
  setFile,
  setFileName,
  setPreviewImage,
  setIsImageUploaded,
}: HandleImageUploadProps) => {
  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (files && files.length > 0) {
      const selectedFiles = files as FileList;

      setFile(selectedFiles[0]);
      setPreviewImage(URL.createObjectURL(selectedFiles[0]));

      setImageUrl(URL.createObjectURL(selectedFiles[0]));
      setIsImageUploaded(!!selectedFiles?.[0]);

      if (openGraph) {
        openGraph.image = '';
      }

      const imageName = selectedFiles[0].name.trim();
      useParseFileName({ setFileName, imageString: imageName });
    }
  };
  return { handleImageUpload };
};

export default useHandleImageUpload;
