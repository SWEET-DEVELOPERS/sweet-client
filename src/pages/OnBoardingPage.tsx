//온보딩 모든 컴포넌트를 funnel로 관리하는 최상위 페이지

import styled from 'styled-components';
import { ONBOARDING_FORM_STEP } from '../core/onboarding';
import { useFunnel } from '../hooks/common/useFunnel';
import NameInput from '../components/OnBoardingSteps/Step01/Step01';
import ThumbnailInput from '../components/OnBoardingSteps/Step02/Step02';
import GiftDelivery from '../components/OnBoardingSteps/Step03/Step03';
import SetTournamentDuration from '../components/OnBoardingSteps/Step05/Step05';
import { useState } from 'react';
import SetTournamentSchedule from '../components/OnBoardingSteps/Step04/Step04';
import OnBoardingHeader from '../components/OnBoardingSteps/onboardingHeader/OnBoardingHeader';
import OnboardingFinal from '../components/OnBoardingSteps/Step06/Step06';
import { useNavigate } from 'react-router-dom';
import { useOnboardingContext } from '../context/Onboarding/OnboardingContext';

const OnBoardingPage = () => {
  const { Funnel, setStep } = useFunnel(ONBOARDING_FORM_STEP, ONBOARDING_FORM_STEP[0]);
  const [invitationCode, setInvitationCode] = useState<string>('');
  const [roomId, setRoomId] = useState<number>(0);
  const navigate = useNavigate();
  const { onboardingInfo, updateOnboardingInfo } = useOnboardingContext();

  const onClickBackBtn = (stepNum: number) => {
    const stepIndex = stepNum - 1;

    if (stepIndex === 0) {
      navigate('/');
    } else {
      setStep((prev) => ONBOARDING_FORM_STEP[stepIndex - 1]);
      updateOnboardingInfo({
        gifteeName: onboardingInfo.gifteeName,
        imageUrl: onboardingInfo.imageUrl,
        deliveryDate: onboardingInfo.deliveryDate,
        tournamentStartDate: onboardingInfo.tournamentStartDate,
        tournamentDuration: onboardingInfo.tournamentDuration,
      });
    }
  };

  return (
    <Funnel>
      {/* step01 */}
      <Funnel.Step name='NAME'>
        <OnBoardingHeader step={1} onClickBackBtn={() => onClickBackBtn(1)} />
        <OnBoardingPageWrapper>
          <NameInput onNext={() => setStep(() => 'THUMBNAIL')} />
        </OnBoardingPageWrapper>
      </Funnel.Step>

      {/* step02 */}
      <Funnel.Step name='THUMBNAIL'>
        <OnBoardingHeader step={2} onClickBackBtn={() => onClickBackBtn(2)} />
        <OnBoardingPageWrapper>
          <ThumbnailInput onNext={() => setStep(() => 'PRESENT')} />
        </OnBoardingPageWrapper>
      </Funnel.Step>

      {/* step03 */}
      <Funnel.Step name='PRESENT'>
        <OnBoardingHeader step={3} onClickBackBtn={() => onClickBackBtn(3)} />
        <OnBoardingPageWrapper>
          <GiftDelivery onNext={() => setStep(() => 'TOURNAMENT_SCHEDULE_REGISTRATION')} />
        </OnBoardingPageWrapper>
      </Funnel.Step>

      {/* step04 */}
      <Funnel.Step name='TOURNAMENT_SCHEDULE_REGISTRATION'>
        <OnBoardingHeader step={4} onClickBackBtn={() => onClickBackBtn(4)} />
        <OnBoardingPageWrapper>
          <SetTournamentSchedule onNext={() => setStep(() => 'TOURNAMENT_PROCEEDING')} />
        </OnBoardingPageWrapper>
      </Funnel.Step>

      {/* step05 */}
      <Funnel.Step name='TOURNAMENT_PROCEEDING'>
        <OnBoardingHeader step={5} onClickBackBtn={() => onClickBackBtn(5)} />
        <OnBoardingPageWrapper>
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
