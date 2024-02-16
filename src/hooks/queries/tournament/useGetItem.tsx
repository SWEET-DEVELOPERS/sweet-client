import { useQuery } from '@tanstack/react-query';
import { get } from '../../../apis/client';
import { GiftData } from '../../../types/tournament';

interface TournamentResponse extends Response {
  data: GiftData[];
}

export const TOURNAMENT_BY_ID_QUERY_KEY: string[] = ['tournamentData'];

export const fetchTournamentItem = async (roomId: number): Promise<TournamentResponse> =>
  get(`/gift/tournament/${roomId}`);

const useGetItem = ({ roomId }: { roomId: number }) => {
  const { data } = useQuery({
    queryKey: [TOURNAMENT_BY_ID_QUERY_KEY, roomId],
    queryFn: () => fetchTournamentItem(roomId),
  });

  if (Error && (Error as any).response?.data?.message === '이미 참가한 토너먼트입니다.') {
    return 400;
    console.log('400 중복 참여입니다');
  }

  console.log(data);
  return data;
};

export default useGetItem;
