import SubTitle from '../../common/title/SubTitle';
import Title from '../../common/title/Title';
import OnBoardingBtn from '../onboardingBtn/OnBoardingBtn';
import * as S from './Step05.style';
import usePostOnboardingInfo from '../../../hooks/queries/onboarding/usePostOnboardingInfo';
import { useOnboardingContext } from '../../../context/Onboarding/OnboardingContext';
import useSetTournamentDuration from '../../../hooks/onboarding/useSetTournamentDuration';
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
        선물 토너먼트를 <br /> 몇 시간 동안 진행할까요?
      </Title>
      <S.SubTitleWrapper>
        <SubTitle subTitle='토너먼트가 아래 시간 동안 진행돼요.' />
      </S.SubTitleWrapper>
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

      <S.OnBoardingBtnWrapper>
        <OnBoardingBtn
          isActivated={!!selectedOption}
          setStep={() => {
            postOnboarding();
          }}
        >
          다음
        </OnBoardingBtn>
      </S.OnBoardingBtnWrapper>
    </>
  );
};

export default SetTournamentDuration;
