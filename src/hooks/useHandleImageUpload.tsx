import { OpenGraphResponseType } from '../types/etc';
import useParseFileName from './useParseFileName';
import Resizer from 'react-image-file-resizer';
import heic2any from 'heic2any';

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
      const selectedFile = files[0];

      setPreviewImage(URL.createObjectURL(selectedFile));

      try {
        let convertedFile = selectedFile;

        if (selectedFile.type === 'image/heic' || selectedFile.type === 'image/HEIC') {
          let blob = selectedFile;
          const resultBlob = await heic2any({ blob, toType: 'image/webp' });
          convertedFile = new File(
            [resultBlob as Blob],
            selectedFile.name.split('.')[0] + '.webp',
            { type: 'image/webp', lastModified: new Date().getTime() },
          );
        }

        Resizer.imageFileResizer(
          convertedFile,
          384,
          384,
          'WEBP',
          75,
          0,
          (uri) => {
            if (uri instanceof File) {
              setFileName((uri as File).name);
              setFile(uri as File);
              console.log('FILE', uri);
              setImageUrl(URL.createObjectURL(uri as File));
              setIsImageUploaded(true);

              if (openGraph) {
                openGraph.image = '';
              }

              const imageName = uri.name.trim();
              useParseFileName({ setFileName, imageString: imageName });
            }
          },
          'file',
        );
      } catch (err) {
        console.log('Error processing image:', err);
      }
    }
  };
  return { handleImageUpload };
};

export default useHandleImageUpload;
