import { useOnboardingContext } from '../../context/Onboarding/OnboardingContext';

const useFormatDate = () => {
  const { onboardingInfo } = useOnboardingContext();

  const formatDate = (dateString: string, includeTime: boolean = true) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    if (includeTime) {
      return `${year}.${month}.${day} (${getDayOfWeek(date)}) ${hours}시 ${minutes}분`;
    } else {
      return `${year}.${month}.${day} (${getDayOfWeek(date)})`;
    }
  };

  const getDayOfWeek = (date: Date) => {
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
    const dayOfWeekIndex = date.getDay();
    return daysOfWeek[dayOfWeekIndex];
  };

  const formatDuration = (durationType: string) => {
    switch (durationType) {
      case 'SIX_HOURS':
        return '6시간';
      case 'TWELVE_HOURS':
        return '12시간';
      case 'EIGHTEEN_HOURS':
        return '18시간';
      case 'TWENTY_FOUR_HOURS':
        return '24시간';
      default:
        return '';
    }
  };

  const infoDetails = onboardingInfo.gifteeName
    ? [
        { title: '선물 받을 사람', detail: onboardingInfo.gifteeName },
        {
          title: '선물 등록 마감',
          detail: formatDate(onboardingInfo.tournamentStartDate, true),
        },
        {
          title: '토너먼트 진행 시간',
          detail: formatDuration(onboardingInfo.tournamentDuration),
        },
        { title: '선물 전달일', detail: formatDate(onboardingInfo.deliveryDate, false) },
      ]
    : [];

  return {
    infoDetails,
  };
};

export default useFormatDate;
