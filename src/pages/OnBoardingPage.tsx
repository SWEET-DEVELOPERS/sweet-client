//온보딩 모든 컴포넌트를 funnel로 관리하는 최상위 페이지

import styled from 'styled-components';
import { ONBOARDING_FORM_STEP } from '../core/onboarding';
import { useFunnel } from '../hooks/useFunnel';
import NameInput from '../components/Onboarding/Step01/Step01';
import ThumbnailInput from '../components/Onboarding/Step02/Step02';
import GiftDelivery from '../components/Onboarding/Step03/Step03';
import SetTournamentSchedule from '../components/Onboarding/Step04/Step04';
import SetTournamentDuration from '../components/Onboarding/Step05/Step05';

const OnBoardingPage = () => {
  const { Funnel, setStep } = useFunnel(ONBOARDING_FORM_STEP, ONBOARDING_FORM_STEP[0]);

  return (
    <OnBoardingPageWrapper>
      <Funnel>
        <Funnel.Step name='NAME'>
          <NameInput onNext={() => setStep(() => 'THUMBNAIL')} />
        </Funnel.Step>
        <Funnel.Step name='THUMBNAIL'>
          <ThumbnailInput onNext={() => setStep(() => 'PRESENT')} />
        </Funnel.Step>
        <Funnel.Step name='PRESENT'>
          <GiftDelivery onNext={() => setStep(() => 'TOURNAMENT_SCHEDULE_REGISTRATION')} />
        </Funnel.Step>
        <Funnel.Step name='TOURNAMENT_SCHEDULE_REGISTRATION'>
          <SetTournamentSchedule onNext={() => setStep(() => 'TOURNAMENT_PROCEEDING')} />
        </Funnel.Step>
        <Funnel.Step name='TOURNAMENT_PROCEEDING'>
          <SetTournamentDuration onNext={() => setStep(() => 'GIFT_ROOM_FIX')} />
        </Funnel.Step>
      </Funnel>
    </OnBoardingPageWrapper>
  );
};

export default OnBoardingPage;

const OnBoardingPageWrapper = styled.div`
  margin: 2rem;
`;
