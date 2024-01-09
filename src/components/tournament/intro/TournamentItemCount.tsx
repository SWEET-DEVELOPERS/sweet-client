import styled from 'styled-components';

export default function TournamentItemCount() {
  const price = 16;
  return (
    <TournamentItemCountWrapper>
      <TotalItems>총 등록된 선물 {price}개</TotalItems>
    </TournamentItemCountWrapper>
  );
}

const TournamentItemCountWrapper = styled.article``;

const TotalItems = styled.p`
  
`;
