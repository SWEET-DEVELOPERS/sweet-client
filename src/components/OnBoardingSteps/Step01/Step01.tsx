import Title from '../../common/title/Title';
import * as S from './Step01.style';
import { IcCancelCircleFinal } from '../../../assets/svg';
import OnBoardingBtn from '../onboardingBtn/OnBoardingBtn';
import { OnboardingInfo } from '../../../types/Onboarding';

interface NameInputProps extends Pick<OnboardingInfo, 'gifteeName'> {
  onNext: VoidFunction;
  setGifteeName: React.Dispatch<React.SetStateAction<string>>;
}

const NameInput = (props: NameInputProps) => {
  const { onNext, gifteeName, setGifteeName } = props;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const unicodeChars = [...inputValue].filter((char) => /[\ud800-\udfff]/.test(char)).length;

    inputValue.length + unicodeChars <= 10 ? setGifteeName(inputValue) : e.preventDefault();
  };

  const handleBtnClick = () => {
    setGifteeName('');
  };

  const isActivated = gifteeName.length > 0;

  return (
    <>
      <Title>
        선물 받을 분의 <br />
        이름,혹은 닉네임을 알려주세요
      </Title>
      <S.Wrapper $hasContent={gifteeName.length > 0} $maxLengthReached={gifteeName.length === 10}>
        <S.TextField>
          <S.Input
            type='text'
            value={gifteeName}
            onChange={handleInputChange}
            maxLength={10}
            placeholder='이름을 입력해주세요'
          />
        </S.TextField>
        <S.IconWrapper onClick={handleBtnClick}>
          <S.IconField>
            {gifteeName.length > 0 && (
              <IcCancelCircleFinal
                style={{ width: '2.4rem', height: '2.4rem' }}
                onClick={handleBtnClick}
              />
            )}
          </S.IconField>
        </S.IconWrapper>
      </S.Wrapper>
      <S.LetterLength>({gifteeName.length}/10)</S.LetterLength>
      <OnBoardingBtn isActivated={isActivated} setStep={onNext}>
        다음
      </OnBoardingBtn>
    </>
  );
};

export default NameInput;
