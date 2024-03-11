import { AxiosError, AxiosResponse } from 'axios';
import { post } from '../../../apis/client';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

const usePostPresignedUrl = () => {
  const [presignedUrl, setPresignedUrl] = useState<string>('');

  const postPresignedUrl = async (filename: string) => {
    try {
      const queryString = filename ? `presigned-url?fileName=${filename}` : '';
      if (queryString) {
        const response: AxiosResponse = await post(queryString);
        const data = response.data;
        setPresignedUrl(data.presignedUrl);
        return data;
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data?.message ?? error.message);
      } else {
        throw error;
      }
    }
  };

  const mutation = useMutation({
    mutationFn: postPresignedUrl,
    onSuccess: (data) => {
      setPresignedUrl(data.presignedUrl);
    },
  });

  return { ...mutation, presignedUrl };
};

export default usePostPresignedUrl;
