import styled from 'styled-components';
// import Skeleton from 'react-loading-skeleton';

export const GiftAddPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 100%;
  ${({ theme }) =>
    theme.mixin.flexBox({ direction: 'column', align: 'center', justify: 'center' })};
`;

export const GiftAddPageSkeletonHeader = styled.article`
  ${({ theme }) => theme.mixin.flexBox({ align: 'center', justify: 'center' })};

  width: 100%;
  height: 5.6rem;
  padding-left: 0.7rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const HeaderText = styled.p`
  ${({ theme }) => theme.fonts.body_01};
`;

export const MiniTimerWrapper = styled.div`
  width: 10.3rem;
  height: 2.7rem;
  padding: 0 1rem;

  border-radius: 1.4rem;
  background: ${({ theme }) => theme.colors.G_01};
`;

export const AddButtonsWrapper = styled.div`
  width: 100%;

  display: flex;
  ${({ theme }) => theme.mixin.flexBox({ justify: 'center' })};
  column-gap: 1.2rem;
`;

export const GiftsItemWrapper = styled.div`
  position: relative;
  width: 15.8rem;
  padding: 0;
  margin-top: 2.8rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const GiftsItemImage = styled.div`
  width: 15.8rem;
  height: 15.8rem;

  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.G_02};
`;

export const GiftsItemTitle = styled.p`
  width: 14.6rem;
  height: 2rem;
  margin-top: 1.2rem;
  margin-bottom: 1rem;

  background-color: ${({ theme }) => theme.colors.G_02};
`;

export const GiftsItemTitle2 = styled.p`
  width: 9.4rem;
  height: 2rem;
  margin-top: 1.2rem;
  margin-bottom: 1rem;

  background-color: ${({ theme }) => theme.colors.G_02};
`;
