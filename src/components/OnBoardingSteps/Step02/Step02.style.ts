import styled from 'styled-components';

export const IcEmptyThumbnailWrapper = styled.div`
  ${({ theme }) =>
    theme.mixin.flexCenter({ direction: 'column', align: 'center', justify: 'center' })};
  margin-top: 6.1rem;
`;

export const PreviewImg = styled.img`
  src: previewImage;
  alt: 'preview';
  width: 24rem;
  height: 24rem;
  position: absolute;
  border-radius: 1.2rem;
  object-fit: cover;
`;
