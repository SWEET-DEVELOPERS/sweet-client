import styled from 'styled-components';
import { IcLeft } from '../../../assets/svg';

export const GiftDetailHeaderWrapper = styled.article`
  width: 37.5rem;
  height: 5.6rem;
  margin-bottom: 0.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.fonts.body_01};
`;
export const IcLeftSvg = styled(IcLeft)`
  position: absolute;
  left: 0.6rem;
  width: 3.6rem;
  height: 3.6rem;
  top: 1rem;

  cursor: pointer;
  ${({ theme }) => theme.fonts.body_01};
`;
