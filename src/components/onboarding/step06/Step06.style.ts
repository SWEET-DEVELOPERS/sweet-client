import styled from 'styled-components';
import imageSample from './image_sample.png';

export const Wrapper = styled.div`
  ${({ theme }) => theme.mixin.flexBox({ align: 'center', justify: 'center' })}
  width: 100%;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.G_02};
  position: relative;
  overflow: hidden;
`;

export const GradientImg = styled.div`
  background-image: url(${imageSample});
  background-size: cover;
  background-blend-mode: overlay;

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
  z-index: 999;
  gap: 1.6rem;
  margin-left: 2rem;
`;

export const InfoWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  height: 12.8rem;
  margin-top: 2.8rem;
`;

export const InfoDetailWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
