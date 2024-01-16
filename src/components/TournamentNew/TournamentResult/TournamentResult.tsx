import React from 'react';
import TournamentTitle from './TournamentTitle/TournamentTitle';
import TournamentResultCard from './TournamentResultCard/TournamentResultCard';
import TournamentResultUser from './TournamentResultUser/TournamentResultUser';
import TournamentResultFooter from './TournamentResultFooter/TournamentResultFooter';
import * as S from './TournamentResult.sytle';
import { GiftData } from '../../../core/mockupData';

interface TournamentResultProps {
  winners: GiftData | null;
}

const TournamentResult: React.FC<TournamentResultProps> = ({ winners }) => {
  return (
    <S.TournamentResult>
      <TournamentTitle />
      <TournamentResultCard item={winners} />
      <TournamentResultUser />
      <TournamentResultFooter />
    </S.TournamentResult>
  );
};

export default TournamentResult;
