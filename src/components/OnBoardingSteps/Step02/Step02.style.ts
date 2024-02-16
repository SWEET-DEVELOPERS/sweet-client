import styled from 'styled-components';

export const ThumbnailWrapper = styled.div`
  /* ${({ theme }) =>
    theme.mixin.flexCenter({ direction: 'column', align: 'center', justify: 'center' })};
  margin-top: 6.1rem; */

  ${({ theme }) => theme.mixin.flexCenter({})}

  position: relative;

  width: 24rem;
  height: 24rem;

  margin: 0 auto;
  cursor: pointer;

  background-color: ${({ theme }) => theme.colors.G_01};
  border-radius: 1.2rem;
`;

export const PreviewImg = styled.img`
  /* src: previewImage;
  alt: 'preview';
  width: 24rem;
  height: 24rem;
  position: absolute;
  border-radius: 1.2rem;
  object-fit: cover; */

  width: 24rem;
  height: 24rem;

  object-fit: contain;
`;

export const IcEmptyThumbnailWrapper = styled.div`
  ${({ theme }) =>
    theme.mixin.flexCenter({ direction: 'column', align: 'center', justify: 'center' })};

  margin-top: 2.8rem;
  cursor: pointer;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
