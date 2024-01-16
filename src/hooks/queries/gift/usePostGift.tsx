import { useMutation, useQueryClient } from '@tanstack/react-query';
import { post } from '../../../apis/client';
import { GiftPostRequestType } from '../../../types/gift';
import { useNavigate } from 'react-router-dom';

export const POST_GIFT_QUERY_KEY: string[] = ['postGiftData'];

export const postNewGift = async (body: GiftPostRequestType) => {
  post(`gift/friend/${body.roomId}`, body);
};

export const usePostGift = ({ body }: { body: GiftPostRequestType }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postNewGift,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [POST_GIFT_QUERY_KEY[0], body] });
      navigate(`/addgift`);
    },
    // 요거 넣을까 말까? 넣을까 말까?!!
    onError: () => {
      console.log('에러!!');
    },
  });

  return { mutation };
};

export default usePostGift;
