import styled from 'styled-components';

export const EditRoomWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'column' })};
  padding: 2rem;
`;

export const CardWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  gap: 0.8rem;
  margin-top: 2.9rem;
`;

export const TextWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.inlineFlexBox({ direction: 'column' })};
`;

export const Text = styled.div`
  ${({ theme: { fonts } }) => fonts.heading_01};
  > p {
    color: ${({ theme: { colors } }) => colors.P_06};
  }
`;
