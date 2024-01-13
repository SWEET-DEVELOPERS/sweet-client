import TournamentCard from './TournamentCard/TournamentCard';
import { TournamentCardWrapper } from './TournamentFlowContainer.style';
import TournamentFooter from './TournamentFooter/TournamentFooter';
import TournamentTitle from './TournamentTitle/TournamentTitle';

interface GiftData {
  giftId: number;
  imageUrl: string;
  name: string;
  cost: number;
  url: string;
}

interface TournamentFlowContainerProps {
  randomItems: GiftData[];
}



const TournamentFlowContainer: React.FC<{ randomItems: GiftData[] }> = ({ randomItems }) => {
  return (
    <>
      <TournamentTitle />
      <TournamentCardWrapper>
        {randomItems.map((item) => (
          <TournamentCard key={item.giftId} item={item} />
        ))}
      </TournamentCardWrapper>
      <TournamentFooter />
    </>
  );
};

export default TournamentFlowContainer;
