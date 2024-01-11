import styled from 'styled-components';

export const AddGiftWithLinkLayoutWrapper = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AddGiftWithLinkHeader = styled.div`
  width: 100%;
  height: 5.6rem;
  ${({ theme }) => theme.mixin.flexBox({ align: 'center', justify: 'center' })};
`;

export const ThumbnailWrapper = styled.div`
  position: relative;
  ${({ theme }) => theme.mixin.flexCenter({})}

  width: 19.2rem;
  height: 19.2rem;

  margin: 0 auto;
  margin-top: 2.1rem;

  background-color: ${({ theme }) => theme.colors.G_01};
  border-radius: 1.2rem;
`;
