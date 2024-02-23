import styled from 'styled-components';

export const OnboardingFinalWrapper = styled.div`
  ${({ theme }) => theme.mixin.flexCenter({})}
  width: 100%;
`;

export const IconWrapper = styled.div`
  ${({ theme }) => theme.mixin.flexCenter({})}
`;

export const TitleWrapper = styled.div`
  ${({ theme }) => theme.mixin.flexCenter({})}
  margin-top: 1.6rem;
`;

export const ParticipantsTitleWrapper = styled.div`
  ${({ theme }) => theme.mixin.flexCenter({})}
  margin-top: 0.4rem;
`;

export const DetailWrapper = styled.div`
  ${({ theme }) => theme.mixin.flexCenter({})}
  margin-top: 3.2rem;
  gap: 1.2rem;
`;

export const SecondTitleWrapper = styled.div`
  ${({ theme }) => theme.mixin.flexBox({ align: 'center', justify: 'center' })}
`;

export const GifterNumberWrapper = styled.div`
  ${({ theme }) => theme.mixin.flexCenter({})}
  margin-top: 0.9rem;
`;

export const GifterNumberText = styled.p`
  color: ${({ theme }) => theme.colors.G_08};
  ${({ theme }) => theme.fonts.body_09};
`;

export const ProgressLineAndDetailContainer = styled.div`
  ${({ theme }) => theme.mixin.flexCenter({ direction: 'row' })};
  gap: 1.2rem;
`;

export const InfoContainer = styled.div`
  ${({ theme }) => theme.mixin.flexBox({ align: 'center' })}
  width: 27.9rem;
  height: 6.1rem;
  flex-shrink: 0;
  border-radius: 1.2rem;
  border: 1px solid ${({ theme }) => theme.colors.G_02};
  background: #fff;
  gap: 2.3rem;
`;

export const TournamentProceedWrapper = styled.div`
  ${({ theme }) => theme.mixin.flexBox({ align: 'center' })}
  width: 27.9rem;
  height: 6.1rem;
  flex-shrink: 0;
  border-radius: 1.2rem;
  border: 1px dashed ${({ theme }) => theme.colors.G_02};
  background: #fff;
  gap: 2.3rem;
`;

export const InfoContainerPresent = styled.div`
  ${({ theme }) => theme.mixin.flexBox({ align: 'center' })}
  width: 27.9rem;
  height: 6.1rem;
  flex-shrink: 0;
  border-radius: 1.2rem;
  border: 1px solid ${({ theme }) => theme.colors.G_02};
  background: #fff;
  gap: 4.6rem;
`;

export const InfoContainerTitle = styled.p`
  color: ${({ theme }) => theme.colors.G_07};
  ${({ theme }) => theme.fonts.body_10};
  margin-left: 2.4rem;
`;

export const InfoContainerTitleWrapper = styled.div`
  ${({ theme }) => theme.mixin.flexCenter({ direction: 'row' })}
  gap: 2.3rem
`;

export const InfoContainerDetail = styled.p`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body_09};
`;

export const BtnWrapper = styled.div`
  margin-top: 3.2rem;
`;

export const ImageUrlWrapper = styled.img`
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 5.3rem;
  background-color: pink;
`;
