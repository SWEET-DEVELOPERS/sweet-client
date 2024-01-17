import { useQuery } from '@tanstack/react-query';
import { get } from '../../../apis/client';
import { GiftRankingData } from '../../../types/tournament';

interface TournamentRankingResponse extends Response {
  data: GiftRankingData[];
}

export const TOURNAMENT_RANKING_BY_ID_QUERY_KEY: string[] = ['tournamentRankingData'];

export const fetchTournamentItem = async (roomId: number): Promise<TournamentRankingResponse> =>
  get(`/gift/ranking/${roomId}`);

const useGetRanking = ({ roomId }: { roomId: number }) => {
  const { data } = useQuery({
    queryKey: [TOURNAMENT_RANKING_BY_ID_QUERY_KEY, roomId],
    queryFn: () => fetchTournamentItem(roomId),
  });

  console.log(data);
  return data;
};

export default useGetRanking;
