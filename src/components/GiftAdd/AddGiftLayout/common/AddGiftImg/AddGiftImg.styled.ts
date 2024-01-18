import styled from 'styled-components';

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

export const ImgPreview = styled.img`
  width: 19.2rem;
  height: 19.2rem;

  object-fit: contain;
`;
