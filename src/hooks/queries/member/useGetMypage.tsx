import { useQuery } from '@tanstack/react-query';
import { get } from '../../../apis/client';
import { MyPageType } from '../../../types/user';

interface MyPageResponse extends Response {
  data: MyPageType;
}

export const MYPAGE_BY_ID_QUERY_KEY: string[] = ['myPageData'];

export const fetchMyPage = async (): Promise<MyPageResponse> => get(`/member/mypage`);

const useGetMyPage = () => {
  const shouldFetch = !!localStorage.getItem('EXIT_LOGIN_TOKEN');

  const { data } = useQuery({
    queryKey: MYPAGE_BY_ID_QUERY_KEY,
    queryFn: () => fetchMyPage(),
    enabled: shouldFetch,
  });
  return data;
};

export default useGetMyPage;
