import { useSuspenseQuery } from '@tanstack/react-query';
import { get } from '../../../apis/client';
import { ClosedRoomType } from '../../../types/member';

interface MyPageResponse extends Response {
  data: ClosedRoomType;
}

export const DONE_ROOM_QUERY_KEY: string[] = ['doneRoomData'];

export const fetchMyPage = async (): Promise<MyPageResponse> => get(`/member/closed-room`);

const useGetDoneRoom = () => {
  const { data } = useSuspenseQuery({
    queryKey: DONE_ROOM_QUERY_KEY,
    queryFn: () => fetchMyPage(),
  });
  return data;
};

export default useGetDoneRoom;
