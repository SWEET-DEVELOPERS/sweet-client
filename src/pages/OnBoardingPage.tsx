//온보딩 모든 컴포넌트를 funnel로 관리하는 최상위 페이지

import styled from 'styled-components';
import { ONBOARDING_FORM_STEP } from '../core/onboarding';
import { useFunnel } from '../hooks/useFunnel';
import NameInput from '../components/OnBoardingSteps/Step01/Step01';
import ThumbnailInput from '../components/OnBoardingSteps/Step02/Step02';
import GiftDelivery from '../components/OnBoardingSteps/Step03/Step03';
import SetTournamentDuration from '../components/OnBoardingSteps/Step05/Step05';
import OnboardingFinal from '../components/OnBoardingSteps/Step06/Step06';
import { useEffect, useState } from 'react';
import SetTournamentSchedule from '../components/OnBoardingSteps/Step04/Step04';

const OnBoardingPage = () => {
  const { Funnel, setStep } = useFunnel(ONBOARDING_FORM_STEP, ONBOARDING_FORM_STEP[0]);
  const [gifteeName, setGifteeName] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [deliveryDate, setDeliveryDate] = useState<string>('');
  const [tournamentStartDate, setTournamentStartDate] = useState<string>('');
  const [tournamentDuration, setTournamentDuration] = useState<string>('');

  const onboardingInfo = {
    gifteeName: gifteeName,
    imageUrl: imageUrl,
    deliveryDate: deliveryDate,
    tournamentStartDate: tournamentStartDate,
    tournamentDuration: tournamentDuration,
  };
  useEffect(() => {
    console.log('전체 값 정리', onboardingInfo);
  }, [onboardingInfo]);

  return (
    <OnBoardingPageWrapper>
      <Funnel>
        <Funnel.Step name='NAME'>
          <div style={{ margin: '2rem' }}>
            {/* step01 */}
            <NameInput
              onNext={() => setStep(() => 'THUMBNAIL')}
              gifteeName={gifteeName}
              setGifteeName={setGifteeName}
            />
          </div>
        </Funnel.Step>
        <Funnel.Step name='THUMBNAIL'>
          <div style={{ margin: '2rem' }}>
            {/* step02 */}
            <ThumbnailInput
              onNext={() => setStep(() => 'PRESENT')}
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
            />
          </div>
        </Funnel.Step>
        <Funnel.Step name='PRESENT'>
          <div style={{ margin: '2rem' }}>
            {/* step03 */}
            <GiftDelivery
              onNext={() => setStep(() => 'TOURNAMENT_SCHEDULE_REGISTRATION')}
              deliveryDate={deliveryDate}
              setDeliveryDate={setDeliveryDate}
            />
          </div>
        </Funnel.Step>

        <Funnel.Step name='TOURNAMENT_SCHEDULE_REGISTRATION'>
          <div style={{ margin: '2rem' }}>
            {/* step04 */}
            <SetTournamentSchedule
              onNext={() => setStep(() => 'TOURNAMENT_PROCEEDING')}
              tournamentStartDate={tournamentStartDate}
              setTournamentStartDate={setTournamentStartDate}
            />
          </div>
        </Funnel.Step>
        <Funnel.Step name='TOURNAMENT_PROCEEDING'>
          <div style={{ margin: '2rem' }}>
            {/* step05 여기서 post (이미지 url먼저 post 후 전체 값 post*/}
            <SetTournamentDuration
              onNext={() => setStep(() => 'GIFT_ROOM_FIX')}
              tournamentDuration={tournamentDuration}
              setTournamentDuration={setTournamentDuration}
              tournamentStartDate={tournamentStartDate}
              onboardingInfo={onboardingInfo}
            />
          </div>
        </Funnel.Step>
        <Funnel.Step name='GIFT_ROOM_FIX'>
          {/* step06 */}
          <OnboardingFinal onboardingInfo={onboardingInfo} />
        </Funnel.Step>
      </Funnel>
    </OnBoardingPageWrapper>
  );
};

export default OnBoardingPage;

const OnBoardingPageWrapper = styled.div`
  /* margin: 2rem; */
`;
