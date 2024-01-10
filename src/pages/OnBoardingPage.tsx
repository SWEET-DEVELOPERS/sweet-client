//온보딩 모든 컴포넌트를 funnel로 관리하는 최상위 페이지

import styled from 'styled-components';
import { ONBOARDING_FORM_STEP } from '../core/onboarding';
import { useFunnel } from '../hooks/useFunnel';
import NameInput from '../components/onboarding/step01/Step01';
import ThumbnailInput from '../components/onboarding/step02/Step02';
import GiftDelivery from '../components/onboarding/step03/Step03';
import SetTournamentSchedule from '../components/onboarding/step04/Step04';
import SetTournamentDuration from '../components/onboarding/step05/Step05';

const OnBoardingPage = () => {
  const { Funnel, step, setStep } = useFunnel(ONBOARDING_FORM_STEP, ONBOARDING_FORM_STEP[0]);

  return (
    <OnBoardingPageWrapper>
      <Funnel>
        <Funnel.Step name='NAME'>
          <NameInput onNext={() => setStep((prev) => 'THUMBNAIL')} />
        </Funnel.Step>
        <Funnel.Step name='THUMBNAIL'>
          <ThumbnailInput onNext={() => setStep((prev) => 'PRESENT')} />
        </Funnel.Step>
        <Funnel.Step name='PRESENT'>
          <GiftDelivery onNext={() => setStep((prev) => 'TOURNAMENT_SCHEDULE_REGISTRATION')} />
        </Funnel.Step>
        <Funnel.Step name='TOURNAMENT_SCHEDULE_REGISTRATION'>
          <SetTournamentSchedule onNext={() => setStep((prev) => 'TOURNAMENT_PROCEEDING')} />
        </Funnel.Step>
        <Funnel.Step name='TOURNAMENT_PROCEEDING'>
          <SetTournamentDuration onNext={() => setStep((prev) => 'GIFT_ROOM_FIX')} />
        </Funnel.Step>
      </Funnel>
    </OnBoardingPageWrapper>
  );
};

export default OnBoardingPage;

const OnBoardingPageWrapper = styled.div`
  margin: 2rem;
`;
