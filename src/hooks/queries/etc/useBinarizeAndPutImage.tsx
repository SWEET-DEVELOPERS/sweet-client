import { usePutMyPresignedUrl } from './usePutMyPresignedUrl'; // Import the hook correctly

interface putBinaryDataProps {
  presignedUrl: string;
  file: File;
}

const useBinarizeAndPutImage = () => {
  // Change to a custom hook
  const putPresignedUrl = usePutMyPresignedUrl(); // Use the hook inside the custom hook

  const binarizeAndPutImage = async ({ presignedUrl, file }: putBinaryDataProps) => {
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

  return { binarizeAndPutImage };
};

export default useBinarizeAndPutImage;
