import usePutPresignedUrl from '../onboarding/usePutPresignedUrl';

interface putBinaryDataProps {
  presignedUrl: string;
  file: File;
}

const useBinarizeAndPutImage = () => {
  const putPresignedUrl = usePutPresignedUrl();

  const binarizeAndPutImage = async ({ presignedUrl, file }: putBinaryDataProps) => {
    const arrayBuffer = await file.arrayBuffer();
    const binaryData = new Uint8Array(arrayBuffer);

    try {
      await putPresignedUrl.mutateAsync({
        presignedUrl,
        binaryData,
      });
    } catch (error) {
      console.error('바이너리 put하다가 error 발생!', error);
    }
  };

  return { binarizeAndPutImage };
};

export default useBinarizeAndPutImage;
