import { useQuery } from '@tanstack/react-query';
import { get } from '../../../apis/client';

export const TOURNAMENT_BY_ID_QUERY_KEY: string[] = ['tournamentData'];
//return 오류 나는 이유는 axiosResponse 이니 any 타입 문제 해결해보자~!
export const fetchTournamentItem = async (roomId: number): Promise<any> => {
  try {
    const response = await get(`/gift/tournament/${roomId}`);
    return response;
  } catch (error) {
    return '중복입니다';
  }
};

const useGetItem = ({ roomId }: { roomId: number }) => {
  const { data } = useQuery({
    queryKey: [TOURNAMENT_BY_ID_QUERY_KEY, roomId],
    queryFn: () => fetchTournamentItem(roomId),
  });

  console.log(data);
  return data;
};

export default useGetItem;
