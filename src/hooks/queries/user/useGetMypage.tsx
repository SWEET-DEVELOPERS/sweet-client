import { useQuery } from '@tanstack/react-query';
import { instance } from '../../../apis/client';
import { MyPageType } from '../../../types/user';
import { useRecoilValue } from 'recoil';
import { memberIdState } from '../../../recoil/atoms';

interface MyPageResponse extends Response {
  data: MyPageType;
}

export const MYPAGE_BY_ID_QUERY_KEY: string[] = ['myPageById'];

export const fetchMyPage = (): Promise<MyPageResponse> =>
  instance.get(`/member/mypage/2`).then((res) => res.data);

const useGetMyPage = () => {
  const userId: number = useRecoilValue(memberIdState);

  if (localStorage.getItem('EXIT_LOGIN_TOKEN')) {
    const { data } = useQuery({
      queryKey: MYPAGE_BY_ID_QUERY_KEY,
      queryFn: () => fetchMyPage().then((res) => res.data),
    });
    return data;
  }
};

export default useGetMyPage;
