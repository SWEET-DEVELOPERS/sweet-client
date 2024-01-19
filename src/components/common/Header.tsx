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
  justify-content: end;
  height: 5.6rem;
  padding: 0 2rem;
  width: 100vw;
  position: fixed;
  z-index: 1;
  gap: 21.2rem;
`;
