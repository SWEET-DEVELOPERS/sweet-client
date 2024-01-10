import styled from 'styled-components';

export const GiftAddPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 100%;
  ${({ theme }) =>
    theme.mixin.flexBox({ direction: 'column', align: 'center', justify: 'center' })};
`;

export const GiftAddCompleteBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 2rem;
`;

export const AddButtonsWrapper = styled.div`
  width: 100%;

  display: flex;
  ${({ theme }) => theme.mixin.flexBox({ justify: 'center' })};
  column-gap: 1.2rem;
`;

export const IcEmptyBoxWrapper = styled.div`
  width: 15.8rem;
  margin-top: 9.3rem;
`;

export const GiftsItemWrapper = styled.div`
  width: 15.8rem;
  padding: 0;
  margin-top: 2.8rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const GiftsItemImage = styled.img`
  width: 15.8rem;
  height: 15.8rem;

  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.G_03};
`;

export const GiftsItemTitle = styled.p`
  width: 12.8rem;
  margin-top: 1.2rem;
  margin-bottom: 1rem;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  ${({ theme }) => theme.fonts.body_09};
  overflow: hidden;

  color: ${({ theme }) => theme.colors.black};
  text-overflow: ellipsis;
  text-align: left;
`;

export const GiftsItemPrice = styled.span`
  ${({ theme }) => theme.fonts.body_07};
  color: ${({ theme }) => theme.colors.black};
`;

export const AdWrapper = styled.article`
  position: absolute;
  left: 0;
  bottom: 0;

  width: 100%;
  padding: 1.2rem 0 0 2rem;

  background-color: ${({ theme }) => theme.colors.G_01};
`;

export const AdHeaderWrapper = styled.article`
  position: relative;
  display: flex;
  column-gap: 0.7rem;

  margin-bottom: 1.6rem;
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
