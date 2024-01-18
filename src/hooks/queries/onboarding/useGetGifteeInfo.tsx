import { useQuery } from '@tanstack/react-query';
import { get } from '../../../apis/client';
import { AxiosResponse } from 'axios';

export const ONBOARDING_INFO_QUERY_KEY: string[] = ['onboardingData'];

export const fetchOnboarding = async (invitationCode: string) => {
  console.log('get 커스텀 훅 안에 초대코드', invitationCode);
  const response: AxiosResponse = await get(`/room/invitations/${invitationCode}`);
  return response.data;
};

const useGetGifteeInfo = (invitationCode: string | null) => {
  if (invitationCode === null) {
    // ... null에 대한 처리 로직
    return { data: null, isLoading: false, isError: false };
  }
  const { data, isLoading, isError } = useQuery<any, Error>({
    queryKey: ONBOARDING_INFO_QUERY_KEY,
    queryFn: () => fetchOnboarding(invitationCode),
  });

  return { data, isLoading, isError };
};

export default useGetGifteeInfo;
