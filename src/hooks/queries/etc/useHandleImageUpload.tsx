import usePutMyPresignedUrl from './usePutMyPresignedUrl';

interface putFormDataProps {
  presignedUrl: string;
  file: File;
}

export const useHandleImageUpload = () => {
  const putPresignedUrl = usePutMyPresignedUrl();

  const putFormData = async ({ presignedUrl, file }: putFormDataProps) => {
    // const formData = new FormData();
    // formData.append('file', file);

    try {
      await putPresignedUrl.mutation.mutateAsync({
        presignedUrl,
        file,
      });
    } catch (error) {
      console.error('바이너리 put하다가 error 발생!', error);
    }
  };

  return { putFormData };
};
