//온보딩 모든 컴포넌트를 funnel로 관리하는 최상위 페이지

import styled from 'styled-components';
import { ONBOARDING_FORM_STEP } from '../core/onboarding';
import { useFunnel } from '../hooks/useFunnel';
import NameInput from '../components/OnBoardingSteps/Step01/Step01';
import ThumbnailInput from '../components/OnBoardingSteps/Step02/Step02';
import GiftDelivery from '../components/OnBoardingSteps/Step03/Step03';
import SetTournamentDuration from '../components/OnBoardingSteps/Step05/Step05';
import { useState } from 'react';
import SetTournamentSchedule from '../components/OnBoardingSteps/Step04/Step04';
import OnBoardingHeader from '../components/OnBoardingSteps/onboardingHeader/OnBoardingHeader';
import OnboardingFinal from '../components/OnBoardingSteps/Step06/Step06';

const OnBoardingPage = () => {
  const { Funnel, setStep } = useFunnel(ONBOARDING_FORM_STEP, ONBOARDING_FORM_STEP[0]);
  const [invitationCode, setInvitationCode] = useState<string>('');
  const [roomId, setRoomId] = useState<number>(0);

  return (
    <Funnel>
      {/* step01 */}
      <Funnel.Step name='NAME'>
        <OnBoardingPageWrapper>
          <OnBoardingHeader step={1} />
          <NameInput onNext={() => setStep(() => 'THUMBNAIL')} />
        </OnBoardingPageWrapper>
      </Funnel.Step>

      {/* step02 */}
      <Funnel.Step name='THUMBNAIL'>
        <OnBoardingPageWrapper>
          <OnBoardingHeader step={2} />
          <ThumbnailInput onNext={() => setStep(() => 'PRESENT')} />
        </OnBoardingPageWrapper>
      </Funnel.Step>

      {/* step03 */}
      <Funnel.Step name='PRESENT'>
        <OnBoardingPageWrapper>
          <OnBoardingHeader step={3} />
          <GiftDelivery onNext={() => setStep(() => 'TOURNAMENT_SCHEDULE_REGISTRATION')} />
        </OnBoardingPageWrapper>
      </Funnel.Step>

      {/* step04 */}
      <Funnel.Step name='TOURNAMENT_SCHEDULE_REGISTRATION'>
        <OnBoardingPageWrapper>
          <OnBoardingHeader step={4} />
          <SetTournamentSchedule onNext={() => setStep(() => 'TOURNAMENT_PROCEEDING')} />
        </OnBoardingPageWrapper>
      </Funnel.Step>

      {/* step05 */}
      <Funnel.Step name='TOURNAMENT_PROCEEDING'>
        <OnBoardingPageWrapper>
          <OnBoardingHeader step={5} />
          <SetTournamentDuration
            onNext={() => setStep(() => 'GIFT_ROOM_FIX')}
            setInvitationCode={setInvitationCode}
            setRoomId={setRoomId}
          />
        </OnBoardingPageWrapper>
      </Funnel.Step>

      {/* step06 */}
      <Funnel.Step name='GIFT_ROOM_FIX'>
        <OnboardingFinal invitationCode={invitationCode} roomId={roomId} />
      </Funnel.Step>
    </Funnel>
  );
};

export default OnBoardingPage;

const OnBoardingPageWrapper = styled.div`
  margin: 2rem;
`;
