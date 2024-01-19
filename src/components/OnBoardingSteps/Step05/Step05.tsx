import { useEffect, useState } from 'react';
import BtnRadio from '../../common/Button/Radio/BtnRadio';
import SubTitle from '../../common/title/SubTitle';
import Title from '../../common/title/Title';
import OnBoardingBtn from '../onboardingBtn/OnBoardingBtn';
import * as S from './Step05.style';
import { getAccessTokenLocalStorage, instance } from '../../../apis/client';
import usePostOnboardingInfo from '../../../hooks/queries/onboarding/usePostOnboardingInfo';
import usePostPresignedUrl from '../../../hooks/queries/etc/usePostPresignedUrl';
import axios from 'axios';

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
  imageFile: File | null;
}

const SetTournamentDuration = (props: SetTournamentDurationProps) => {
  // TODO 오늘 기준 날짜로 수정 & map함수로 수정

  const {
    onNext,
    tournamentDuration,
    setTournamentDuration,
    tournamentStartDate,
    fileName,
    // imageUrl,
    setImageUrl,
    onboardingInfo,
    // presignedUrl,
    setInvitationCode,
    imageFile,
  } = props;

  const [selectedOption, setSelectedOption] = useState<string>('');
  const postPresignedUrl = usePostPresignedUrl();
  const { mutation } = usePostOnboardingInfo();

  const timeOptions = [
    { time: 6, textEnglish: 'SIX_HOURS' },
    { time: 12, textEnglish: 'TWELVE_HOURS' },
    { time: 18, textEnglish: 'EIGHTEEN_HOURS' },
    { time: 24, textEnglish: 'TWENTY_FOUR_HOURS' },
  ];

  useEffect(() => {
    // 컴포넌트가 마운트될 때마다 최신 토큰을 가져와서 설정
    instance.defaults.headers.Authorization = getAccessTokenLocalStorage();
    console.log('selectedOption', tournamentDuration);
    console.log('step05 fileName', fileName);
    console.log('step05 imageFile', imageFile);
  }, [tournamentDuration]);

  const handleTimeSelect = (time: string) => {
    const updatedTime = new Date(tournamentStartDate);
    updatedTime.setHours(updatedTime.getHours() + parseInt(time.split('시간')[0]));

    // updatedTime.setMinutes(updatedTime.getMinutes() - updatedTime.getTimezoneOffset());
    setSelectedOption(time);
    // const formattedTime = updatedTime.toISOString();
  };

  const fetchPresignedUrl = async (fileName: string) => {
    if (!fileName || !imageFile) {
      console.log('파일명이 없거나 이미지 파일이 없어서 fetchPresignedUrl을 실행하지 않습니다.');
      return { imageUrl: '', presignedUrl: '' };
    }
    console.log('첫 post 확인1');
    const response = await postPresignedUrl.mutateAsync({ filename: fileName });
    console.log('첫 post 확인2');

    const presignedUrl = response.presignedUrl;
    const finalPresigned = presignedUrl.replace(
      'https%3A/%2Fsweet-gift-bucket.s3.ap-northeast-2.amazonaws.com/roomImage/',
      '',
    );
    console.log('지민이랑 확인하는 파싱한 presignedurl', finalPresigned);

    console.log('지민이랑 확인하는 프리사인유알엘', typeof presignedUrl);
    const imageUrl = presignedUrl.split('?')[0];
    console.log('step05 내 fetchPresignedUrl 함수의 response:', response);
    console.log('step05에서 put하기 전 imageUrl', imageUrl);
    console.log('step05에서 put하기 전 presignedUrl', presignedUrl);

    const formData = new FormData();
    formData.append('file', imageFile);
    // formData.append()
    setImageUrl(imageUrl);
    console.log('step05 formData', formData);
    console.log('step05 formData 배열로??', Array.from(formData.entries()));
    return { imageUrl, finalPresigned, formData };
  };

  const saveImageUrl = async (fileName: string) => {
    const { finalPresigned, imageUrl, formData } = await fetchPresignedUrl(fileName);
    console.log(' save ImageUrl 안 presignedUrl', finalPresigned);
    console.log('step05 내 invitationCode3', mutation);
    console.log('step05 내formData', formData);

    if (finalPresigned && finalPresigned !== '') {
      try {
        await axios.put(finalPresigned, formData, {
          headers: {
            'Content-Type': 'image/*',
          },
        });
        console.log('saveImageUrl 안 finalPresigned 값 확인', finalPresigned);
      } catch (error) {
        console.log('putPresignedUrl 실행 중 에러 발생:', error);
        return;
      }
    } else {
      console.log('preSignedUrl이 비어있어서 putPresignedUrl을 실행하지 않습니다.');
    }

    try {
      const updatedOnboardingInfo = { ...onboardingInfo, imageUrl: imageUrl };
      const response = mutation.mutate(updatedOnboardingInfo, {
        onSuccess: (data) => {
          // console.log('step05 내 code:', code);
          console.log('step05 내 response:', response);
          console.log('step05 내 data:', data);
          setInvitationCode(data.invitationCode);
          onNext();
          // navigate(`/result?invitationCode=${data.invitationCode}`);
        },
      });

      // const code = mutation.data?.invitationCode;
      // console.log('code', code);
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
        {timeOptions.map((hours) => {
          const optionText = `${hours.time}시간`;
          // const textEnglish = hours.textEnglish;

          // tournamentStartDate에 timeOptions 숫자와 시간 형식을 더한 값
          const optionDateTime = new Date(tournamentStartDate);
          optionDateTime.setHours(optionDateTime.getHours() + hours.time);

          const deliveryDateStart = new Date(onboardingInfo.deliveryDate);
          deliveryDateStart.setHours(0, 0, 0, 0);

          const deliveryDateEnd = new Date(onboardingInfo.deliveryDate);
          deliveryDateEnd.setHours(23, 59, 59, 999);

          // 선물 전달일과의 비교를 통해 isAfterDelivery 계산
          const isAfterDelivery = optionDateTime.getTime() > deliveryDateEnd.getTime();
          const isBeforeDelivery = optionDateTime.getTime() < deliveryDateStart.getTime();

          const dateType = isAfterDelivery
            ? '선물 전달일 이후'
            : isBeforeDelivery
              ? ''
              : '선물 전달일 당일';

          return (
            <S.TimeOptionsWrapper key={optionText}>
              <BtnRadio
                time={optionText}
                period={dateType}
                isSelected={() => selectedOption === optionText}
                onClick={() => setTournamentDuration(hours.textEnglish)}
                onTimeSelect={handleTimeSelect}
                $isAfterDelivery={isAfterDelivery}
              />
            </S.TimeOptionsWrapper>
          );
        })}
      </S.SetTournamentDurationWrapper>

      {/* <S.SetTournamentDurationWrapper>
        {timeOptions.map((option, index) => (
          <S.TimeOptionsWrapper>
            <BtnRadio
              key={index}
              time={option.text}
              period={option.dateType}
              isSelected={() => selectedOption === option.text}
              onClick={() => setTournamentDuration(option.textEnglish)}
              onTimeSelect={handleTimeSelect}
              isAfterDelivery={isAfterDelivery(option.textEnglish)}
            />
          </S.TimeOptionsWrapper>
        ))}
      </S.SetTournamentDurationWrapper> */}

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <OnBoardingBtn
          isActivated={!!selectedOption}
          setStep={async () => {
            const { finalPresigned } = await fetchPresignedUrl(fileName);
            await saveImageUrl(finalPresigned);
          }}
        >
          다음
        </OnBoardingBtn>
      </div>
    </>
  );
};

export default SetTournamentDuration;
