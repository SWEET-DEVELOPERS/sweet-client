import styled from 'styled-components';
import { IcMenu } from '../../assets/svg';

function Header() {
  return (
    <HeaderWrapper>
      <IcMenu style={{ width: '2.8rem' }} />
    </HeaderWrapper>
  );
}

export default Header;
const HeaderWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({})};

  height: 5.6rem;
  gap: 21.2rem;
  justify-content: flex-end;
`;
