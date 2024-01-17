import { useMutation } from '@tanstack/react-query';
import { post } from '../../../apis/client';
import { GiftPostRequestType } from '../../../types/gift';
import { useNavigate } from 'react-router-dom';

export const postNewGift = async (body: GiftPostRequestType) => {
  post(`/gift/friend/${body.roomId}`, body);
};

export const usePostGift = ({ body }: { body: GiftPostRequestType }) => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: postNewGift,
    onSuccess: () => {
      console.log('선물 등록 완료 body값', body);
      navigate(`/add-gift`);
    },

    onError: () => {
      console.log('선물 등록 에러!!');
    },
  });

  return { mutation };
};

export default usePostGift;
