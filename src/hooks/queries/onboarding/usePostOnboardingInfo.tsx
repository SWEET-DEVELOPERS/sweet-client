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
  const mutation = useMutation({
    mutationFn: postOnboardingInfo,
    onSuccess: (res) => {
      console.log('포스트 성공?', res);
      const invitationCode = (res as any).invitationCode;
      console.log('커스텀 훅 안 초대코드', invitationCode);
    },
  });

  const postOnboardingInfoWithInvitationCode = async (onboardingInfo: OnboardingInfo) => {
    const response = await mutation.mutateAsync(onboardingInfo);
    const invitationCode = (response as any).invitationCode;
    return { response, invitationCode };
  };

  return {
    ...mutation,
    mutate: postOnboardingInfoWithInvitationCode,
  };
};

export default usePostOnboardingInfo;
