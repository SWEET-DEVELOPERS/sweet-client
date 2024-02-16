import useBinarizeAndPutImage from './queries/etc/useBinarizeAndPutImage';
import useGetPresignedUrl from './useGetPresignedUrl';

interface PutImageUrlToS3Props {
  fileName: string;
  file: File | null;
  roomId: number;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
}

const usePutImageUrlToS3 = (roomId: number) => {
  const { getPresignedUrl } = useGetPresignedUrl(roomId);
  const { binarizeAndPutImage } = useBinarizeAndPutImage();

  const putImageUrlToS3 = async ({ fileName, file, roomId, setImageUrl }: PutImageUrlToS3Props) => {
    const presignedUrl = await getPresignedUrl({ roomId, fileName, setImageUrl });
    if (presignedUrl && presignedUrl !== '') {
      if (file) {
        await binarizeAndPutImage({ presignedUrl, file });
      } else {
        console.error('파일이 없습니다');
      }
    } else {
      console.log('preSignedUrl이 비어있어서 putPresignedUrl을 실행하지 않습니다.');
    }
  };

  return { putImageUrlToS3 };
};

export default usePutImageUrlToS3;
