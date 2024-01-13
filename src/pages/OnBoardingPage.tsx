//온보딩 모든 컴포넌트를 funnel로 관리하는 최상위 페이지

import styled from 'styled-components';
import { ONBOARDING_FORM_STEP } from '../core/onboarding';
import { useFunnel } from '../hooks/useFunnel';
import NameInput from '../components/OnBoardingSteps/Step01/Step01';
import ThumbnailInput from '../components/OnBoardingSteps/Step02/Step02';
import GiftDelivery from '../components/OnBoardingSteps/Step03/Step03';
import SetTournamentSchedule from '../components/OnBoardingSteps/Step04/Step04';
import SetTournamentDuration from '../components/OnBoardingSteps/Step05/Step05';
import OnboardingFinal from '../components/OnBoardingSteps/Step06/Step06';
import { useState } from 'react';

const OnBoardingPage = () => {
  const { Funnel, setStep } = useFunnel(ONBOARDING_FORM_STEP, ONBOARDING_FORM_STEP[0]);
  const [gifteeName, setGifteeName] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [deliveryDate, setDeliveryDate] = useState<string>('');
  const [tournamentStartDate, SetTournamentStartDate] = useState<string>('');
  const [tournamentDurantion, setTournamentDurantion] = useState<string>('');

  return (
    <OnBoardingPageWrapper>
      <Funnel>
        <Funnel.Step name='NAME'>
          <div style={{ margin: '2rem' }}>
            <NameInput
              onNext={() => setStep(() => 'THUMBNAIL')}
              gifteeName={gifteeName}
              setGifteeName={setGifteeName}
            />
          </div>
        </Funnel.Step>
        <Funnel.Step name='THUMBNAIL'>
          <div style={{ margin: '2rem' }}>
            <ThumbnailInput
              onNext={() => setStep(() => 'PRESENT')}
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
            />
          </div>
        </Funnel.Step>
        <Funnel.Step name='PRESENT'>
          <div style={{ margin: '2rem' }}>
            <GiftDelivery
              onNext={() => setStep(() => 'TOURNAMENT_SCHEDULE_REGISTRATION')}
              deliveryDate={deliveryDate}
              setDeliveryDate={setDeliveryDate}
            />
          </div>
        </Funnel.Step>

        <Funnel.Step name='TOURNAMENT_SCHEDULE_REGISTRATION'>
          <div style={{ margin: '2rem' }}>
            <SetTournamentSchedule onNext={() => setStep(() => 'TOURNAMENT_PROCEEDING')} />/
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
