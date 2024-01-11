import styled from 'styled-components';
export const ThumbnailWrapper = styled.div`
  ${({ theme }) => theme.mixin.flexCenter({})}
  background-color: ${({ theme }) => theme.colors.G_01};
  width: 24rem;
  height: 24rem;
  margin: 0 auto;
  margin-top: 6.1rem;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const IcEmptyThumbnailWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6.1rem;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
