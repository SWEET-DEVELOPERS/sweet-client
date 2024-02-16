import { AxiosError, AxiosResponse } from 'axios';
import { post } from '../../../apis/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MY_GIFT_QUERY_KEY } from '../gift/useGetMyGift';

interface PostPresignedUrlArgs {
  filename: string;
}

const postPresignedUrl = async ({ filename }: PostPresignedUrlArgs) => {
  try {
    const queryString = filename ? `presigned-url?fileName=${filename}` : '';
    if (queryString) {
      const response: AxiosResponse = await post(queryString, filename);
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

const usePostMyPresignedUrl = (roomId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postPresignedUrl,
    onSuccess: (data) => {
      console.log('usePostPresignedUrl onSuccess 내꺼로 포스트 성공~', data);
      queryClient.setQueryData([MY_GIFT_QUERY_KEY[0], roomId], data);
    },
    onError: (error) => {
      console.log('내 선물 PU 받아오던 중 에러가 발생했습니다.', error.message);
    },
  });
};

export default usePostMyPresignedUrl;
