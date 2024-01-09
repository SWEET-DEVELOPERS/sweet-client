import styled from 'styled-components';
import theme from '../../../style/theme';

export const Title = styled.p`
  color: ${theme.colors.black};
  ${theme.fonts.heading_01};
`;
export const SubTitle = styled.p`
  color: ${theme.colors.G_10};
  ${theme.fonts.caption_02};
`;

export const Username = styled.p`
  color: ${({ theme }) => theme.colors.P_06};
  ${({ theme }) => theme.fonts.heading_01};
`;
