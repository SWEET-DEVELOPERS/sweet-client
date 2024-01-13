import styled from 'styled-components';

export const AddPageDownWrapper = styled.section`
  width: 100%;

  position: absolute;
  left: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
`;

export const GiftAddCompleteBtnWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;

  padding-right: 2rem;
`;

export const AdWrapper = styled.div`
  width: 100%;
  padding: 1.2rem 0 0 2rem;

  background-color: ${({ theme }) => theme.colors.G_01};
`;

export const AdHeaderWrapper = styled.article`
  position: relative;
  display: flex;
  column-gap: 0.7rem;
`;

export const AdTagWrapper = styled.article`
  width: fit-content;
  padding: 0.1rem 0.6rem;

  ${({ theme }) => theme.fonts.caption_03};
  color: ${({ theme }) => theme.colors.G_07};

  text-align: center;
  align-self: center;

  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Body07Text = styled.span`
  ${({ theme }) => theme.fonts.body_07};
`;

export const AdItemWrapper = styled.div`
  display: flex;
  margin-top: 1.6rem;
  margin-bottom: 2.9rem;

  column-gap: 1.6rem;
`;

export const AdItemImg = styled.img`
  width: 7.6rem;
  height: 7.6rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.G_01};
`;

export const AdItemDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;
`;

export const AdItemTitle = styled.p`
  display: -webkit-box;
  width: 17.4rem;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;

  ${({ theme }) => theme.fonts.body_09};
`;

export const AdItemPrice = styled.p`
  display: -webkit-box;
  width: 17.4rem;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;

  ${({ theme }) => theme.fonts.body_09};
  color: ${({ theme }) => theme.colors.G_10};
`;
