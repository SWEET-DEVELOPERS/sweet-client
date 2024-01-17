import { useMutation, useQueryClient } from '@tanstack/react-query';
import { post } from '../../../apis/client';
import { TournamentScore } from '../../../types/tournament';

export const POST_TOURNAMENT_QUERY_KEY: string[] = ['tournamentScoreData'];

export const postTournamentScore = async (body: TournamentScore) => {
  post(`/gift/tournament-score`, body);
};

export const usePostScore = ({ body }: { body: TournamentScore }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postTournamentScore,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [POST_TOURNAMENT_QUERY_KEY, body] });
    },

    onError: () => {
      console.log('에러!!');
    },
  });

  return { mutation };
};

export default usePostScore;
