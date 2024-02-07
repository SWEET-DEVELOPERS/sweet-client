import styled from 'styled-components';

export const OnboardingFinalWrapper = styled.div`
  ${({ theme }) => theme.mixin.flexBox({ align: 'center', justify: 'center' })}
  width: 100%;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.G_02};
  position: relative;
  overflow: hidden;
`;

export const GradientImg = styled.div`
  background-size: cover;
  background-blend-mode: overlay;
  /* opacity: 0.7; */
  /* 이렇게 height를 의도적으로 주는 방법밖에 없나... 하 */
  height: 36.5rem;
  width: 100%;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 100%);
    z-index: 1;
  }
`;

export const TitleContainer = styled.div`
  ${({ theme }) => theme.mixin.flexBox({ direction: 'column', align: 'flex-start' })}
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  color: white;
  z-index: 1;
  gap: 1.6rem;
  margin-left: 2rem;
`;

export const InfoWrapper = styled.div`
  ${({ theme }) =>
    theme.mixin.inlineFlexBox({ direction: 'column', align: 'center', justify: 'center' })};
  gap: 1.2rem;
  width: 100%;
  height: 12.8rem;
  margin-top: 2.8rem;
`;

export const InfoDetailWrapper = styled.div`
  ${({ theme }) =>
    theme.mixin.flexBox({ direction: 'row', align: 'center', justify: 'space-between' })};
  gap: 5rem;
  width: 31.5rem;
`;

export const InfoTitle = styled.p`
  color: ${({ theme }) => theme.colors.G_07};
  ${({ theme }) => theme.fonts.body_10};
`;

export const InfoDetail = styled.p`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body_07};
`;

export const KakaoLinkCopyBtn = styled.button`
  ${({ theme }) =>
    theme.mixin.flexCenter({ direction: 'row', align: 'center', justify: 'center' })};
  width: 16.3rem;
  padding: 1.5rem 2.2rem 1.6rem 2.2rem;
  gap: 1rem;
  border-radius: 10rem;
  border: none;
  background: #fee500;
  color: ${({ theme }) => theme.colors.black};

  ${({ theme }) => theme.fonts.body_09};
`;

export const BtnWrapper = styled.div`
  ${({ theme }) =>
    theme.mixin.flexCenter({ direction: 'row', align: 'center', justify: 'center' })};
  gap: 1.2rem;
  width: 100%;
  margin-top: 1.7rem;
  color: ${({ theme }) => theme.colors.black};
`;

export const LinkCopyBtn = styled.button`
  ${({ theme }) =>
    theme.mixin.flexCenter({ direction: 'row', align: 'center', justify: 'center' })};
  width: 16.3rem;
  padding: 1.5rem 2.2rem 1.6rem 2.2rem;
  gap: 1rem;
  border-radius: 10rem;
  border: none;
  background: ${({ theme }) => theme.colors.G_02};
  color: ${({ theme }) => theme.colors.black};

  ${({ theme }) => theme.fonts.body_09};
`;
