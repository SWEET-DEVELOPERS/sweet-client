import styled from 'styled-components';
import BtnFill from '../../common/Button/Cta/fill/BtnFill';
import { useHandleShare } from '../../../hooks/common/useHandleShare';
import useClipboard from '../../../hooks/useCopyClip';

interface OnboardingFinalFooterProps {
  invitationCode: string;
  roomId?: number;
  onClick: () => void;
  giftee?: string;
}
const OnboardingFinalFooter = (props: OnboardingFinalFooterProps) => {
  const { onClick, giftee, invitationCode } = props;
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
        onClick={() =>
          useHandleShare(
            `${giftee}님을 위한 선물방이 개설됐어요`,
            `${giftee}님을 위한 선물방이 개설됐어요`,
            `${import.meta.env.VITE_APP_BASE_URL_KAKAO}result/${invitationCode}`,
            handleCopyToClipboard,
          )
        }
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
  margin-top: 5rem;
`;

export default OnboardingFinalFooter;
