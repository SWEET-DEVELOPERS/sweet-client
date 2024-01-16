import { useMutation, useQueryClient } from '@tanstack/react-query';
import { post } from '../../../apis/client';
import { OpenGraphRequestType } from '../../../types/etc';

export const POST_OPEN_GRAPH_QUERY_KEY: string[] = ['postOpenGraph'];

export const postOpenGraph = async (body: OpenGraphRequestType) => {
  post(`/opengraph`, body);
};

export const usePostOpenGraph = ({ body }: { body: OpenGraphRequestType }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postOpenGraph,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [POST_OPEN_GRAPH_QUERY_KEY[0], body] });
    },
    onError: () => {
      console.log('오픈그래프 정보를 가져오던 중 에러가 발생했습니다.');
    },
  });

  return { mutation };
};

export default usePostOpenGraph;
