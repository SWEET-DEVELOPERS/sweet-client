import { useQuery } from '@tanstack/react-query';
import { get } from '../../../apis/client';
import { ActiveRoomType } from '../../../types/member';

interface MyPageResponse extends Response {
  data: ActiveRoomType;
}

export const ACTIVE_ROOM_QUERY_KEY: string[] = ['activeRoomData'];

export const fetchMyPage = async (): Promise<MyPageResponse> => get(`/member/active-room`);

const useGetActiveRoom = () => {
  const shouldFetch = !!localStorage.getItem('EXIT_LOGIN_TOKEN');

  const { data } = useQuery({
    queryKey: ACTIVE_ROOM_QUERY_KEY,
    queryFn: () => fetchMyPage(),
    enabled: shouldFetch,
  });
  return data;
};

export default useGetActiveRoom;
