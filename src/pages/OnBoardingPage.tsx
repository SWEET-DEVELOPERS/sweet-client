//온보딩 모든 컴포넌트를 funnel로 관리하는 최상위 페이지

import styled from 'styled-components';
import NameInput from '../components/onboarding/step01/Step01';

const OnBoardingPage = () => {
  return (
    <OnBoardingPageWrapper>
      <NameInput />
    </OnBoardingPageWrapper>
  );
};

export default OnBoardingPage;

const OnBoardingPageWrapper = styled.div`
  margin: 2rem;
`;
