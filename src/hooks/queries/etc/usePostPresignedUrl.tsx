import { AxiosError, AxiosResponse } from 'axios';
import { post } from '../../../apis/client';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

// interface PostPresignedUrlArgs {
//   // url: string;
//   filename: string;
// }

const usePostPresignedUrl = () => {
  const [presignedUrl, setPresignedUrl] = useState<string>(''); // 상태 추가

  const postPresignedUrl = async (filename: string) => {
    try {
      const queryString = filename ? `presigned-url?fileName=${filename}` : '';
      if (queryString) {
        const response: AxiosResponse = await post(queryString);
        const data = response.data;
        setPresignedUrl(data.presignedUrl); // 상태 업데이트
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
      // console.log('usePostPresignedUrl onSuccess', data);
      // console.log('data.presignedUrl', data.presignedUrl);
      setPresignedUrl(data.presignedUrl);
    },
  });

  return { ...mutation, presignedUrl };
};

export default usePostPresignedUrl;
