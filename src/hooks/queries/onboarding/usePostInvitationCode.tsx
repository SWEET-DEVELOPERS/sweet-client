import { AxiosError, AxiosResponse } from 'axios';
import { post } from '../../../apis/client';
import { useMutation } from '@tanstack/react-query';

const postInvitationCode = async (invitationCode: string) => {
  try {
    const response: AxiosResponse = await post('/room/participation', invitationCode);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message ?? error.message);
    } else {
      throw error;
    }
  }
};

const usePostInvitationCode = () => {
  return useMutation({
    mutationFn: postInvitationCode,
    onSuccess: (data) => {
      console.log('초대코드 post 성공', data);
    },
  });
};

export default usePostInvitationCode;
