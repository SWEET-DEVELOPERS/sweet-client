import SubTitle from '../../common/title/SubTitle';
import Title from '../../common/title/Title';
import OnBoardingBtn from '../onboardingBtn/OnBoardingBtn';
import * as S from './Step05.style';
import { getAccessTokenLocalStorage, instance } from '../../../apis/client';
import usePostOnboardingInfo from '../../../hooks/queries/onboarding/usePostOnboardingInfo';
import { useOnboardingContext } from '../../../context/Onboarding/OnboardingContext';
import useSetTournamentDuration from '../../../hooks/onboarding/useSetTournamentDuration';
import { useEffect } from 'react';
import { TimeOptionHelper } from '../../../utils/TimeOptionHelper';
import SelectTimeOptions from './SelectTimeOptions';

interface SetTournamentDurationProps {
  onNext: VoidFunction;
  setInvitationCode: React.Dispatch<React.SetStateAction<string>>;
  setRoomId: React.Dispatch<React.SetStateAction<number>>;
}

const timeOptions = [
  { time: 6, textEnglish: 'SIX_HOURS' },
  { time: 12, textEnglish: 'TWELVE_HOURS' },
  { time: 18, textEnglish: 'EIGHTEEN_HOURS' },
  { time: 24, textEnglish: 'TWENTY_FOUR_HOURS' },
];

const SetTournamentDuration = (props: SetTournamentDurationProps) => {
  const { onNext, setInvitationCode, setRoomId } = props;
  const { onboardingInfo, updateOnboardingInfo } = useOnboardingContext();
  const { handleTimeSelect, selectedOption } = useSetTournamentDuration();
  const { mutation } = usePostOnboardingInfo();

  useEffect(() => {
    // 컴포넌트가 마운트될 때마다 최신 토큰을 가져와서 설정
    instance.defaults.headers.Authorization = getAccessTokenLocalStorage();
  }, [onboardingInfo.tournamentDuration]);

  const postOnboarding = async () => {
    try {
      const response = mutation.mutate(onboardingInfo, {
        onSuccess: (data) => {
          setInvitationCode(data.invitationCode);
          console.log('step05 postOnboarding response', response);
          const roomId = data.roomId;
          setRoomId(roomId);
          onNext();
          return roomId;
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Title>
        선물 토너먼트 <br /> 진행 시간을 설정해주세요
      </Title>
      <div style={{ marginTop: '0.8rem' }}>
        <SubTitle subTitle='토너먼트가 아래 시간 동안 진행돼요.' />
      </div>
      <S.SetTournamentDurationWrapper>
        {timeOptions.map((hours) => {
          const { dateType, isAfterDelivery } = TimeOptionHelper(
            hours.time,
            onboardingInfo.tournamentStartDate,
            onboardingInfo.deliveryDate,
          );

          return (
            <SelectTimeOptions
              key={`${hours.time}시간`}
              optionText={`${hours.time}시간`}
              dateType={dateType}
              isSelected={selectedOption === `${hours.time}시간`}
              onClick={() => updateOnboardingInfo({ tournamentDuration: hours.textEnglish })}
              onTimeSelect={handleTimeSelect}
              isAfterDelivery={isAfterDelivery}
            />
          );
        })}
      </S.SetTournamentDurationWrapper>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <OnBoardingBtn
          isActivated={!!selectedOption}
          setStep={() => {
            postOnboarding();
          }}
        >
          다음
        </OnBoardingBtn>
      </div>
    </>
  );
};

export default SetTournamentDuration;
