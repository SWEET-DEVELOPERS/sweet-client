import { OpenGraphResponseType } from '../types/etc';
import useParseFileName from './useParseFileName';
import Resizer from 'react-image-file-resizer';

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

    const resizeFile = (file: File) =>
      new Promise((resolve) => {
        Resizer.imageFileResizer(
          file,
          384,
          384,
          'WEBP',
          100,
          0,
          (uri) => {
            setFileName((uri as File).name);
            setFile(uri as File);
            console.log('FILE', uri);
            resolve(uri);
          },
          'file',
        );
      });

    if (files && files.length > 0) {
      const selectedFiles = files as FileList;

      if (files) {
        try {
          resizeFile(selectedFiles[0]);
        } catch (err) {
          console.log('이미지 용량 압축 중 에러 발생', err);
        }
      }

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
