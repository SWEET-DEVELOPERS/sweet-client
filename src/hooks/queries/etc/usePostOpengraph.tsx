import { useMutation } from '@tanstack/react-query';
import { post } from '../../../apis/client';
import { OpenGraphRequestType } from '../../../types/etc';
import { AxiosResponse } from 'axios';

export const postOpenGraph = async ({ BaseURL }: OpenGraphRequestType) => {
  try {
    const response: AxiosResponse = await post(`/opengraph`, { BaseURL });
    return response.data;
  } catch (error) {
    console.error('Error in postOpenGraph:', error);
    throw error; // Re-throw the error to propagate it to the caller
  }
};

export const usePostOpenGraph = () => {
  // const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postOpenGraph,
    onSuccess: (data) => {
      console.log('POST 성공, 오픈그래프 data 값', data);
      // queryClient.setQueryData(['openGraphResponse'], data);
      // const cachedData = queryClient.getQueryData(['openGraphResponse']);
      // console.log('캐시데이터', cachedData);
    },
    onError: () => {
      console.log('오픈그래프 정보를 가져오던 중 에러가 발생했습니다.');
    },
  });

  const { isError } = mutation;

  return { mutation, isError };
};

export default usePostOpenGraph;
