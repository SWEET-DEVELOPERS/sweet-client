import usePostMyPresignedUrl from './queries/etc/usePostMyPresignedUrl';

interface GetPresignedUrlProps {
  roomId: number;
  fileName: string;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
}

const useGetPresignedUrl = (roomId: number) => {
  const postPresignedUrl = usePostMyPresignedUrl(roomId);

  const getPresignedUrl = async ({ fileName, setImageUrl }: GetPresignedUrlProps) => {
    if (!fileName) {
      console.log('파일명이 없어서 fetchPresignedUrl을 실행하지 않습니다.');
      return { imageUrl: '', presignedUrl: '' };
    } else {
      const response = await postPresignedUrl.mutateAsync({ filename: fileName });
      const presignedUrl = response.presignedUrl;
      const imageUrlS3 = presignedUrl.split('?')[0];
      setImageUrl(imageUrlS3);
      return { presignedUrl, imageUrlS3 };
    }
  };
  return { getPresignedUrl };
};
export default useGetPresignedUrl;
