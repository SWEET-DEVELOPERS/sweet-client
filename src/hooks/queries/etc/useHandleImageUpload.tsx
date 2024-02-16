import usePutMyPresignedUrl from './usePutMyPresignedUrl';

interface putBinaryDataProps {
  presignedUrl: string;
  file: File;
}

export const useHandleImageUpload = () => {
  const putPresignedUrl = usePutMyPresignedUrl();

  const putBinaryData = async ({ presignedUrl, file }: putBinaryDataProps) => {
    const arrayBuffer = await file.arrayBuffer();
    const binaryData = new Uint8Array(arrayBuffer);

    try {
      await putPresignedUrl.mutation.mutateAsync({
        presignedUrl,
        binaryData,
      });
    } catch (error) {
      console.error('바이너리 put하다가 error 발생!', error);
    }
  };

  return { putBinaryData };
};
