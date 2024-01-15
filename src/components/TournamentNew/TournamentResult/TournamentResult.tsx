// TournamentResult.tsx
import React from 'react';
import TournamentTitle from './TournamentTitle/TournamentTitle';
import TournamentResultCard from './TournamentResultCard/TournamentResultCard';
import TournamentResultUser from './TournamentResultUser/TournamentResultUser';
import TournamentResultFooter from './TournamentResultFooter/TournamentResultFooter';
import { GiftData } from '../../../core/mockupData';

interface TournamentResultProps {
  winners: GiftData[];
}

const TournamentResult: React.FC<TournamentResultProps> = ({ winners }) => {
  return (
    <>
      <TournamentTitle />
      <TournamentResultCard  />
      <TournamentResultUser />
      <TournamentResultFooter />
    </>
  );
};

export default TournamentResult;
