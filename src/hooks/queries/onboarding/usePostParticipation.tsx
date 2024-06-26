import { useMutation } from '@tanstack/react-query';
import { post } from '../../../apis/client';
import { AxiosResponse } from 'axios';

const postParticipation = async (invitationCode: string) => {
  const response: AxiosResponse = await post(
    `/room/participation?invitationCode=${invitationCode}`,
    invitationCode,
  );
  return response.data;
};

const usePostParticipation = () => {
  const mutation = useMutation({
    mutationFn: postParticipation,
    onSuccess: (data) => {
      console.log('파이널페이지에서 포스트 성공', data);
    },
  });
  return { mutation };
};

export default usePostParticipation;
