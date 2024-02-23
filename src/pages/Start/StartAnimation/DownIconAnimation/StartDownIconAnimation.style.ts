import styled from 'styled-components';
import { IcDown } from '../../../../assets/svg';

export const DownIconWrapper = styled.div`
  display: flex;
`;

export const DownIcon = styled(IcDown)`
  position: absolute;
  top: 4rem;
  width: 4rem;
  color: ${({ theme: { colors } }) => colors.G_07};
`;
