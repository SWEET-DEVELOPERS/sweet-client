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
      console.log('body값', body);
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  const { isError } = mutation;

  return { mutation, isError };
};

export default usePostOpenGraph;
