import usePutPresignedUrl from './onboarding/usePutPresignedUrl';

interface HandleImageUploadProps {
  file: File | null;
}

export const useHandleImageUpload = () => {
  const putPresignedUrl = usePutPresignedUrl();

  const putFormData = async (presignedUrl: string, file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      await putPresignedUrl.mutation.mutateAsync({
        presignedUrl,
        formData,
      });
    } catch (error) {
      console.error('폼데이터 put하다가 error 발생!', error);
    }
  };

  return { putFormData };
};
