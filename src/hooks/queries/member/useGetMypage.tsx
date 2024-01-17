import { useSuspenseQuery } from '@tanstack/react-query';
import { get } from '../../../apis/client';
import { MyPageType } from '../../../types/member';

interface MyPageResponse extends Response {
  data: MyPageType;
}

export const MYPAGE_BY_ID_QUERY_KEY: string[] = ['myPageData'];

export const fetchMyPage = async (): Promise<MyPageResponse> => get(`/member/mypage`);

const useGetMyPage = () => {
  const { data } = useSuspenseQuery({
    queryKey: MYPAGE_BY_ID_QUERY_KEY,
    queryFn: () => fetchMyPage(),
  });
  return data;
};

export default useGetMyPage;
