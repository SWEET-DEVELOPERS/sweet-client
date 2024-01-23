import Title from '../../common/title/Title';
import * as S from './Step01.style';
import { IcCancelCircleFinal } from '../../../assets/svg';
import OnBoardingBtn from '../onboardingBtn/OnBoardingBtn';

interface NameInputProps {
  onNext: VoidFunction;
  gifteeName: string;
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

  return (
    <>
      <div style={{ gap: '7.2rem' }}>
        <Title title='선물 받을 분의' />
        <Title title='이름, 혹은 닉네임을 알려주세요' />
      </div>
      <div style={{ gap: '0.4rem' }}>
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
          <S.IconWrapper
            style={{
              display: 'flex',
              width: '4rem',
              height: '4rem',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={handleBtnClick}
          >
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
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <OnBoardingBtn isActivated={gifteeName.length > 0} setStep={onNext}>
          {/* <NextBtnText isActivated={gifteeName.length > 0}>다음</NextBtnText> */}
          다음
        </OnBoardingBtn>
      </div>
    </>
  );
};

export default NameInput;
