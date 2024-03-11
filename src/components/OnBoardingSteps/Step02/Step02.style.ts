import styled from 'styled-components';

export const ThumbnailWrapper = styled.div`
  ${({ theme }) => theme.mixin.flexCenter({})}

  position: relative;

  width: 24rem;
  height: 24rem;

  margin: 0 auto;
  cursor: pointer;

  border-radius: 1.2rem;
`;

export const PreviewImg = styled.img`
  width: 24rem;
  height: 24rem;

  object-fit: contain;
`;

export const IcEmptyThumbnailWrapper = styled.div`
  ${({ theme }) =>
    theme.mixin.flexCenter({ direction: 'column', align: 'center', justify: 'center' })};

  margin-top: 6.1rem;
  cursor: pointer;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const PreviewImage = styled.img`
  position: relative;
  width: 24rem;
  height: 24rem;
  border-radius: 1.2rem;
`;
