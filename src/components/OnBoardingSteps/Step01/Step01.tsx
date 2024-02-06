import Title from '../../common/title/Title';
import * as S from './Step01.style';
import { IcCancelCircleFinal } from '../../../assets/svg';
import OnBoardingBtn from '../onboardingBtn/OnBoardingBtn';
import { OnboardingInfo } from '../../../types/Onboarding';
import useNameInput from '../../../hooks/onboarding/useNameInput';

interface NameInputProps extends Pick<OnboardingInfo, 'gifteeName'> {
  onNext: VoidFunction;
  setGifteeName: React.Dispatch<React.SetStateAction<string>>;
}

const NameInput = (props: NameInputProps) => {
  const { onNext } = props;

  const { onboardingInfo, handleInputChange, handleBtnClick, isActivated } = useNameInput();

  return (
    <>
      <Title>
        선물 받을 분의 <br />
        이름,혹은 닉네임을 알려주세요
      </Title>
      <S.Wrapper
        $hasContent={onboardingInfo.gifteeName.length > 0}
        $maxLengthReached={onboardingInfo.gifteeName.length === 10}
      >
        <S.TextField>
          <S.Input
            type='text'
            value={onboardingInfo.gifteeName}
            onChange={handleInputChange}
            maxLength={10}
            placeholder='이름을 입력해주세요'
          />
        </S.TextField>
        <S.IconWrapper onClick={handleBtnClick}>
          <S.IconField>
            {onboardingInfo.gifteeName.length > 0 && (
              <IcCancelCircleFinal
                style={{ width: '2.4rem', height: '2.4rem' }}
                onClick={handleBtnClick}
              />
            )}
          </S.IconField>
        </S.IconWrapper>
      </S.Wrapper>
      <S.LetterLength>({onboardingInfo.gifteeName.length}/10)</S.LetterLength>
      <OnBoardingBtn isActivated={isActivated} setStep={onNext}>
        다음
      </OnBoardingBtn>
    </>
  );
};

export default NameInput;
