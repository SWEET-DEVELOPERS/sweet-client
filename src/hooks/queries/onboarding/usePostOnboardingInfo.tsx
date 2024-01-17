import { useMutation } from '@tanstack/react-query';
import { post } from '../../../apis/client';
import { OnboardingInfo } from '../../../types/Onboarding';
import { AxiosResponse } from 'axios';
import { useState } from 'react';

const postOnboardingInfo = async (onboardingInfo: OnboardingInfo) => {
  const response: AxiosResponse = await post(`/room`, onboardingInfo);
  return response.data;
};

const usePostOnboardingInfo = () => {
  // const [invitationCode, setInvitationCode] = useState<string>('');
  //   const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: postOnboardingInfo,
    onSuccess: (data) => {
      console.log('포스트 성공?', data);
      const code = (data as any).invitationCode;
      console.log('커스텀 훅 내 초대코드', code);

      // setInvitationCode(code);
      // queryClient.invalidateQueries('rooms');
    },
  });

  return { mutation };
};
export default usePostOnboardingInfo;
