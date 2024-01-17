import { useMutation } from '@tanstack/react-query';
import { post } from '../../../apis/client';
import { OpenGraphRequestType } from '../../../types/etc';
import { AxiosResponse } from 'axios';

export const postOpenGraph = async (body: OpenGraphRequestType) => {
  const response: AxiosResponse = await post(`/opengraph`, body);
  return response.data;
};

export const usePostOpenGraph = ({ body }: { body: OpenGraphRequestType }) => {
  const mutation = useMutation({
    mutationFn: postOpenGraph,
    onSuccess: (data) => {
      console.log('POST 성공, 오픈그래프 data 값', data);
    },
    onError: () => {
      console.log('오픈그래프 정보를 가져오던 중 에러가 발생했습니다.');
    },
  });

  const { isError } = mutation;

  return { mutation, isError };
};

export default usePostOpenGraph;
