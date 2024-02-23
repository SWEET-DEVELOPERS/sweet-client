import styled from 'styled-components';
import BtnFill from '../../common/Button/Cta/fill/BtnFill';
import useClipboard from '../../../hooks/useCopyClip';
import { PAGE } from '../../../core/routes';

interface OnboardingFinalFooterProps {
  invitationCode: string;
  roomId?: number;
  onClick: () => void;
}
const OnboardingFinalFooter = (props: OnboardingFinalFooterProps) => {
  const { invitationCode, onClick } = props;
  const { handleCopyToClipboard } = useClipboard();

  return (
    <OnboardingFinalFooterWrapper>
      <BtnFill
        customStyle={{
          width: '16.4rem',
          background: '#FFF',
          color: '#FF2176',
          border: '1px solid #FF2176',
        }}
        /**@TODO 확인을 위한 local 주소로 공유. 추후에 배포페이지로 변경하기 */
        onClick={() => handleCopyToClipboard(`${PAGE.LOCAL_RESULT_PAGE}${invitationCode}`)}
        // handleCopyToClipboard(`${PAGE.DEPLOY_RESULT_PAGE}${invitationCode}`
      >
        공유하기
      </BtnFill>
      <BtnFill customStyle={{ width: '16.4rem', background: '#FF2176' }} onClick={onClick}>
        입장하기
      </BtnFill>
    </OnboardingFinalFooterWrapper>
  );
};

const OnboardingFinalFooterWrapper = styled.div`
  display: flex;
  justify-content: center;

  gap: 0.8rem;
  height: 5.2rem;
  position: absolute;
  bottom: 2rem;
`;

export default OnboardingFinalFooter;
