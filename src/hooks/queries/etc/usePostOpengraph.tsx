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
    // 요거 넣을까 말까? 넣을까 말까?!!
    onError: () => {
      console.log('에러!!');
    },
  });

  return { mutation };
};

export default usePostOpenGraph;
