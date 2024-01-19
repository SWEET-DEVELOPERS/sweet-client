//온보딩 모든 컴포넌트를 funnel로 관리하는 최상위 페이지

import styled from 'styled-components';
import { ONBOARDING_FORM_STEP } from '../core/onboarding';
import { useFunnel } from '../hooks/useFunnel';
import NameInput from '../components/OnBoardingSteps/Step01/Step01';
import ThumbnailInput from '../components/OnBoardingSteps/Step02/Step02';
import GiftDelivery from '../components/OnBoardingSteps/Step03/Step03';
import SetTournamentDuration from '../components/OnBoardingSteps/Step05/Step05';
// import OnboardingFinal from '../components/OnBoardingSteps/Step06/Step06';
import { useEffect, useState } from 'react';
import SetTournamentSchedule from '../components/OnBoardingSteps/Step04/Step04';
import { useNavigate } from 'react-router-dom';
import OnBoardingHeader from '../components/OnBoardingSteps/onboardingHeader/OnBoardingHeader';
import OnboardingFinal from '../components/OnBoardingSteps/Step06/Step06';

const OnBoardingPage = () => {
  const { Funnel, setStep } = useFunnel(ONBOARDING_FORM_STEP, ONBOARDING_FORM_STEP[0]);
  const [gifteeName, setGifteeName] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [deliveryDate, setDeliveryDate] = useState<string>('');
  const [tournamentStartDate, setTournamentStartDate] = useState<string>('');
  const [tournamentDuration, setTournamentDuration] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');
  const [invitationCode, setInvitationCode] = useState<string>('');
  const [presignedUrl, setPresignedUrl] = useState<string>('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [roomId, setRoomId] = useState<number>(0);

  const navigate = useNavigate();
  const onboardingInfo = {
    gifteeName: gifteeName,
    // imageUrl: imageUrl,
    deliveryDate: deliveryDate,
    tournamentStartDate: tournamentStartDate,
    tournamentDuration: tournamentDuration,
  };

  const handleFirstHistoryClick = () => {
    navigate('/');
  };
  //전체 값 확인용
  useEffect(() => {
    console.log('전체 값 정리', onboardingInfo);
    console.log('roomid', roomId);
  }, [onboardingInfo]);

  return (
    <Funnel>
      <Funnel.Step name='NAME'>
        <OnBoardingPageWrapper>
          <OnBoardingHeader step={1} onClick={handleFirstHistoryClick} />
          {/* step01 */}
          <NameInput
            onNext={() => setStep(() => 'THUMBNAIL')}
            gifteeName={gifteeName}
            setGifteeName={setGifteeName}
          />
        </OnBoardingPageWrapper>
      </Funnel.Step>
      <Funnel.Step name='THUMBNAIL'>
        <OnBoardingPageWrapper>
          <OnBoardingHeader step={2} />

          {/* step02 */}
          <ThumbnailInput
            onNext={() => setStep(() => 'PRESENT')}
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            fileName={fileName}
            setFileName={setFileName}
            imageFile={imageFile}
            setImageFile={setImageFile}
          />
        </OnBoardingPageWrapper>
      </Funnel.Step>
      <Funnel.Step name='PRESENT'>
        <OnBoardingHeader step={3} />
        <OnBoardingPageWrapper>
          {/* step03 */}
          <GiftDelivery
            onNext={() => setStep(() => 'TOURNAMENT_SCHEDULE_REGISTRATION')}
            deliveryDate={deliveryDate}
            setDeliveryDate={setDeliveryDate}
            onboardingInfo={onboardingInfo}
          />
        </OnBoardingPageWrapper>
      </Funnel.Step>
      <Funnel.Step name='TOURNAMENT_SCHEDULE_REGISTRATION'>
        <OnBoardingPageWrapper>
          <OnBoardingHeader step={4} />

          {/* step04 */}
          <SetTournamentSchedule
            onNext={() => setStep(() => 'TOURNAMENT_PROCEEDING')}
            tournamentStartDate={tournamentStartDate}
            setTournamentStartDate={setTournamentStartDate}
          />
        </OnBoardingPageWrapper>
      </Funnel.Step>
      <Funnel.Step name='TOURNAMENT_PROCEEDING'>
        <OnBoardingPageWrapper>
          <OnBoardingHeader step={5} />

          {/* step05 여기서 post (이미지 url먼저 post 후 전체 값 post*/}
          <SetTournamentDuration
            // onNext={() => navigate('/result')}
            onNext={() => setStep(() => 'GIFT_ROOM_FIX')}
            tournamentDuration={tournamentDuration}
            setTournamentDuration={setTournamentDuration}
            tournamentStartDate={tournamentStartDate}
            fileName={fileName}
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            onboardingInfo={onboardingInfo}
            invitationCode={invitationCode}
            setInvitationCode={setInvitationCode}
            presignedUrl={presignedUrl}
            setPresignedUrl={setPresignedUrl}
            imageFile={imageFile}
            setRoomId={setRoomId}
          />
        </OnBoardingPageWrapper>
      </Funnel.Step>
      <Funnel.Step name='GIFT_ROOM_FIX'>
        {/* step06 */}
        <OnboardingFinal
          onboardingInfo={onboardingInfo}
          imageUrl={imageUrl}
          invitationCode={invitationCode}
          roomId={roomId}
          // presignedUrl={presignedUrl}
        />
      </Funnel.Step>
    </Funnel>
  );
};

export default OnBoardingPage;

const OnBoardingPageWrapper = styled.div`
  margin: 2rem;
`;
