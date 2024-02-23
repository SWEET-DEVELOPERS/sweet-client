import styled from 'styled-components';

export const EditRoomWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'column' })};
  padding: 6.9rem 0;
`;

export const CardWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  gap: 0.8rem;
  margin-top: 2.9rem;
`;

export const TextWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.inlineFlexBox({ direction: 'column' })};
  padding: 0 2rem;
`;

export const Text = styled.div`
  ${({ theme: { fonts } }) => fonts.heading_01};
  > span {
    color: ${({ theme: { colors } }) => colors.P_06};
  }
`;
