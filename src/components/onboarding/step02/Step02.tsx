import styled from 'styled-components';
import Title from '../../common/title/Title';
import { IcPlusImageFinal } from '../../../assets/svg';

const ThumbnailInput = () => {
  return (
    <>
      <Title title='썸네일을 등록해주세요' />
      <div style={{ width: '100%', marginTop: '11rem' }}>
        <ThumbnailWrapper>
          <IcPlusImageFinal style={{ width: '5rem', height: '5rem' }} />
        </ThumbnailWrapper>
      </div>
    </>
  );
};

export default ThumbnailInput;

const ThumbnailWrapper = styled.div`
  ${({ theme }) => theme.mixin.flexCenter({})}
  background-color: ${({ theme }) => theme.colors.G_01};
  width: 24rem;
  height: 24rem;
  margin: 0 auto;
`;
