import * as S from './ItemNameTextField.styled';
import IcCancelCircleFinal from '../../../assets/svg/IcCancelCircleFinal';

interface ItemNameTextFieldProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  handleSetIsActivated: () => void;
}

const ItemNameTextField = ({ text, setText, handleSetIsActivated }: ItemNameTextFieldProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setText(inputValue);
    handleBtnClick;
    handleSetIsActivated();
  };

  const handleBtnClick = () => {
    setText('');
  };

  return (
    <S.ItemNameTextFieldWrapper>
      <S.CategoryTitle>상품이름</S.CategoryTitle>
      <S.Wrapper hasContent={text.length > 0}>
        <S.TextField>
          <S.Input
            type='text'
            value={text}
            onChange={onChange}
            placeholder='상품명을 입력해주세요'
          />
        </S.TextField>
        <S.IconField>
          {text.length > 0 && (
            <IcCancelCircleFinal
              style={{ width: '2.4rem', height: '2.4rem' }}
              onClick={handleBtnClick}
            />
          )}
        </S.IconField>
      </S.Wrapper>
    </S.ItemNameTextFieldWrapper>
  );
};

export default ItemNameTextField;
