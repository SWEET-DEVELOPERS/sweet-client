import { useMutation } from '@tanstack/react-query';
import { post } from '../../../apis/client';
import { OnboardingInfo } from '../../../types/Onboarding';
import { AxiosError, AxiosResponse } from 'axios';
const postOnboardingInfo = async (onboardingInfo: OnboardingInfo): Promise<AxiosResponse> => {
  try {
    const response: AxiosResponse = await post(`/room`, onboardingInfo);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message ?? error.message);
    } else {
      throw error;
    }
  }
};
const usePostOnboardingInfo = () => {
  //   const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postOnboardingInfo,
    onSuccess: (data) => {
      console.log('포스트 성공?', data);
      // const invitationCode = (data as any).invitationCode;
      // console.log('초대코드', invitationCode);

      // queryClient.invalidateQueries('rooms');
    },
  });
};
export default usePostOnboardingInfo;
