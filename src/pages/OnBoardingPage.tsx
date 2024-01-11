//온보딩 모든 컴포넌트를 funnel로 관리하는 최상위 페이지

import styled from 'styled-components';
import { ONBOARDING_FORM_STEP } from '../core/onboarding';
import { useFunnel } from '../hooks/useFunnel';
import NameInput from '../components/onboarding/step01/Step01';
import ThumbnailInput from '../components/onboarding/step02/Step02';
import GiftDelivery from '../components/onboarding/step03/Step03';
import SetTournamentSchedule from '../components/onboarding/step04/Step04';
import SetTournamentDuration from '../components/onboarding/step05/Step05';
import OnboardingFinal from '../components/onboarding/step06/Step06';

const OnBoardingPage = () => {
  const { Funnel, setStep } = useFunnel(ONBOARDING_FORM_STEP, ONBOARDING_FORM_STEP[0]);

  return (
    <OnBoardingPageWrapper>
      <Funnel>
        <Funnel.Step name='NAME'>
          <div style={{ margin: '2rem' }}>
            <NameInput onNext={() => setStep(() => 'THUMBNAIL')} />
          </div>
        </Funnel.Step>

        <Funnel.Step name='THUMBNAIL'>
          <div style={{ margin: '2rem' }}>
            <ThumbnailInput onNext={() => setStep(() => 'PRESENT')} />
          </div>
        </Funnel.Step>
        <Funnel.Step name='PRESENT'>
          <div style={{ margin: '2rem' }}>
            <GiftDelivery onNext={() => setStep(() => 'TOURNAMENT_SCHEDULE_REGISTRATION')} />
          </div>
        </Funnel.Step>
        <Funnel.Step name='TOURNAMENT_SCHEDULE_REGISTRATION'>
          <div style={{ margin: '2rem' }}>
            <SetTournamentSchedule onNext={() => setStep(() => 'TOURNAMENT_PROCEEDING')} />
          </div>
        </Funnel.Step>
        <Funnel.Step name='TOURNAMENT_PROCEEDING'>
          <div style={{ margin: '2rem' }}>
            <SetTournamentDuration onNext={() => setStep(() => 'GIFT_ROOM_FIX')} />
          </div>
        </Funnel.Step>
        <Funnel.Step name='GIFT_ROOM_FIX'>
          <OnboardingFinal />
        </Funnel.Step>
      </Funnel>
    </OnBoardingPageWrapper>
  );
};

export default OnBoardingPage;

const OnBoardingPageWrapper = styled.div`
  /* margin: 2rem; */
`;
