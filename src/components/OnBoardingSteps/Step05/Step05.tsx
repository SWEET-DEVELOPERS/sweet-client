import { useEffect, useState } from 'react';
import BtnRadio from '../../common/Button/Radio/BtnRadio';
import SubTitle from '../../common/title/SubTitle';
import Title from '../../common/title/Title';
import OnBoardingBtn from '../onboardingBtn/OnBoardingBtn';
import * as S from './Step05.style';
import { getAccessTokenLocalStorage, instance } from '../../../apis/client';
import usePostOnboardingInfo from '../../../hooks/queries/onboarding/usePostOnboardingInfo';
import usePostPresignedUrl from '../../../hooks/queries/etc/usePostPresignedUrl';
import usePutPresignedUrl from '../../../hooks/queries/onboarding/usePutPresignedUrl';
import { useNavigate } from 'react-router-dom';

interface SetTournamentDurationProps {
  onNext: VoidFunction;
  tournamentDuration: string;
  setTournamentDuration: React.Dispatch<React.SetStateAction<string>>;
  tournamentStartDate: string;
  fileName: string;
  imageUrl: string;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
  onboardingInfo: {
    gifteeName: string;
    // imageUrl: string;
    deliveryDate: string;
    tournamentStartDate: string;
    tournamentDuration: string;
  };
  invitationCode: string;
  setInvitationCode: React.Dispatch<React.SetStateAction<string>>;
  presignedUrl: string;
  setPresignedUrl: React.Dispatch<React.SetStateAction<string>>;
}

const SetTournamentDuration = (props: SetTournamentDurationProps) => {
  // TODO 오늘 기준 날짜로 수정 & map함수로 수정
  const timeOptions = [
    { text: '6시간', dateType: 'today', textEnglish: 'SIX_HOURS' },
    { text: '12시간', dateType: 'today', textEnglish: 'TWELVE_HOURS' },
    { text: '18시간', dateType: 'nottoday', textEnglish: 'EIGHTEEN_HOURS' },
    { text: '24시간', dateType: 'nottoday', textEnglish: 'TWENTY_FOUR_HOURS' },
  ];

  const {
    onNext,
    tournamentDuration,
    setTournamentDuration,
    tournamentStartDate,
    fileName,
    // imageUrl,
    setImageUrl,
    onboardingInfo,
    invitationCode,
    presignedUrl,
  } = props;

  const [selectedOption, setSelectedOption] = useState<string>('');
  const postPresignedUrl = usePostPresignedUrl();
  const putPresignedUrl = usePutPresignedUrl();
  const navigate = useNavigate();
  const { mutation } = usePostOnboardingInfo();
  // const postOnboardingInfoMutation = usePostOnboardingInfo();
  // const { mutate } = usePostOnboardingInfo();

  useEffect(() => {
    // 컴포넌트가 마운트될 때마다 최신 토큰을 가져와서 설정
    instance.defaults.headers.Authorization = getAccessTokenLocalStorage();
    console.log('selectedOption', tournamentDuration);
    console.log('step05 fileName', fileName);
    console.log('확인용 프리사인 유알엘', presignedUrl);
  }, [tournamentDuration]);

  useEffect(() => {
    console.log('step05 내 유즈이펙트로 초대코드 확인', mutation);
  }, [mutation]);

  const handleTimeSelect = (time: string) => {
    const updatedTime = new Date(tournamentStartDate);
    updatedTime.setHours(updatedTime.getHours() + parseInt(time.split('시간')[0]));

    updatedTime.setMinutes(updatedTime.getMinutes() - updatedTime.getTimezoneOffset());
    setSelectedOption(time);
    // const formattedTime = updatedTime.toISOString();
  };

  const fetchPresignedUrl = async (fileName: string) => {
    if (!fileName) {
      console.log('파일명이 없어서 fetchPresignedUrl을 실행하지 않습니다.');
      return { imageUrl: '', presignedUrl: '' };
    }
    const response = await postPresignedUrl.mutateAsync({ filename: fileName, url: '' });

    const presignedUrl = response.presignedUrl;
    const imageUrl = presignedUrl.split('?')[0];
    console.log('imageUrl', imageUrl);
    console.log('presignedUrl', presignedUrl);
    setImageUrl(imageUrl);
    return { imageUrl, presignedUrl };
  };

  const saveImageUrl = async (fileName: string) => {
    const { presignedUrl, imageUrl } = await fetchPresignedUrl(fileName);
    console.log(' save ImageUrl 안 presignedUrl', presignedUrl);
    console.log('step05 내 invitationCode3', mutation);

    if (presignedUrl && presignedUrl !== '') {
      try {
        await putPresignedUrl.mutateAsync(presignedUrl);
        console.log('saveImageUrl 안 imageUrl 값 확인', imageUrl);
      } catch (error) {
        console.log('putPresignedUrl 실행 중 에러 발생:', error);
        return;
      }
    } else {
      console.log('preSignedUrl이 비어있어서 putPresignedUrl을 실행하지 않습니다.');
    }

    // putPresignedUrl이 성공하거나 빈 값일 때 실행됨
    console.log('step05 내 invitationCode1', mutation);
    try {
      const updatedOnboardingInfo = { ...onboardingInfo, imageUrl: imageUrl };
      const response = mutation.mutate(updatedOnboardingInfo, {
        onSuccess: (data) => {
          navigate(`/result?invitationCode=${data.invitationCode}`);
          console.log('step05 내 response:', data.invitationCode);
        },
      });
      const code = response.invitationCode;

      // setInvitationCode(code);
      // console.log('code', code);
      console.log('code', code);

      onNext();
    } catch (error) {
      console.log('postOnboardingInfoMutation 실행 중 에러 발생:', error);
    }
  };

  return (
    <>
      <div>
        <Title title='선물 토너먼트' />
        <Title title='진행 시간을 설정해주세요' />
      </div>
      <div style={{ marginTop: '0.8rem' }}>
        <SubTitle subTitle='토너먼트가 아래 시간 동안 진행돼요.' />
      </div>
      <S.SetTournamentDurationWrapper>
        {timeOptions.map((option, index) => (
          <S.TimeOptionsWrapper>
            <BtnRadio
              key={index}
              time={option.text}
              period={option.dateType}
              isSelected={() => selectedOption === option.text}
              onClick={() => setTournamentDuration(option.textEnglish)}
              onTimeSelect={handleTimeSelect}
            />
          </S.TimeOptionsWrapper>
        ))}
      </S.SetTournamentDurationWrapper>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <OnBoardingBtn
          isActivated={!!selectedOption}
          setStep={async () => {
            const { presignedUrl } = await fetchPresignedUrl(fileName);
            await saveImageUrl(presignedUrl);
            // await navigate(`/result?invitationCode=${invitationCode}`, {
            //   state: { value: invitationCode },
            // });
          }}
        >
          다음
        </OnBoardingBtn>
      </div>
    </>
  );
};

export default SetTournamentDuration;
