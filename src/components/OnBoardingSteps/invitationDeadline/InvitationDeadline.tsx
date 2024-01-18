import styled from 'styled-components';
import { IcLogotypeFinal } from '../../../assets/svg';
import OnboardingFinalHeader from '../Step06/OnboardingFinalHeader';

const InvitationDeadline = () => {
  return (
    <>
      <OnboardingFinalHeader />
      <InvitationDeadlineWrapper>
        <IcLogotypeFinal style={{ width: '16.4rem', height: '4.2rem' }} />
        <Text>초대가 마감 되었어요</Text>
        <GoHomeBtnWrapper>
          <GoHomeBtnText>홈으로 가기</GoHomeBtnText>
        </GoHomeBtnWrapper>
      </InvitationDeadlineWrapper>
    </>
  );
};

export default InvitationDeadline;

const InvitationDeadlineWrapper = styled.div`
  ${({ theme }) => theme.mixin.flexCenter({ align: 'center', justify: 'center' })};
  margin-top: 16.9rem;
  gap: 1.7rem;
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.body_05};
  color: ${({ theme }) => theme.colors.G_07};
`;

const GoHomeBtnWrapper = styled.div`
  ${({ theme }) => theme.mixin.inlineFlexBox({ align: 'center', justify: 'center' })};
  padding: 1.1rem 2rem 1.2rem 2rem;
  border-radius: 9.9rem;
  border: 1px solid ${({ theme }) => theme.colors.P_06};
  background: #fff;
  margin-top: 1.5rem;
`;

const GoHomeBtnText = styled.p`
  ${({ theme }) => theme.fonts.body_09};
  color: ${({ theme }) => theme.colors.P_06};
`;
