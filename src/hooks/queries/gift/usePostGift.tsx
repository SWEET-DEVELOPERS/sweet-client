import { useMutation } from '@tanstack/react-query';
import { post } from '../../../apis/client';
import { GiftPostRequestType } from '../../../types/gift';
import { useNavigate } from 'react-router-dom';

export const postNewGift = async (body: GiftPostRequestType) => {
  post(`/gift`, body);
};

export const usePostGift = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: postNewGift,
    onSuccess: (data) => {
      navigate(`/add-gift`);
      console.log('POST로 선물 등록 성공!', data);
    },

    onError: () => {
      console.log('선물 등록 에러!!');
    },
  });

  return { mutation };
};

export default usePostGift;
