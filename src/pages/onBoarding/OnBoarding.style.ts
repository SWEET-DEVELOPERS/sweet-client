import styled from 'styled-components';
import theme from '../../style/theme';

export const TitleWrapper = styled.div`
  background-color: pink;
  margin-left: 2rem;
  margin-right: 2rem;
`;

export const Title = styled.p`
  color: ${theme.colors.B_01};
  ${theme.fonts.heading_01};
`;

export const SubTitle = styled.p`
  color: ${theme.colors.G_10};
  ${theme.fonts.caption_02};
`;
