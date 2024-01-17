import { AxiosError, AxiosResponse } from 'axios';
import { post } from '../../../apis/client';
import { useMutation } from '@tanstack/react-query';

interface PostPresignedUrlArgs {
  url: string;
  filename: string;
}

const postPresignedUrl = async ({ filename, url }: PostPresignedUrlArgs) => {
  try {
    const queryString = filename ? `presigned-url?fileName=${filename}` : '';
    if (queryString) {
      const response: AxiosResponse = await post(queryString, url);
      return response.data;
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message ?? error.message);
    } else {
      throw error;
    }
  }
};

const usePostPresignedUrl = () => {
  return useMutation({
    mutationFn: postPresignedUrl,
    onSuccess: (data) => {
      console.log('usePostPresignedUrl onSuccess', data);
    },
  });
};

export default usePostPresignedUrl;
