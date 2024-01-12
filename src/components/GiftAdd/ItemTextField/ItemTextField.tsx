import * as S from './ItemTextField.styled';
import IcCancelCircleFinal from '../../../assets/svg/IcCancelCircleFinal';

interface ItemTextFieldProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  handleSetIsActivated: () => void;
  type: string;
  categoryTitle: string;
  placeholderText: string;
}

const ItemTextField = ({
  text,
  setText,
  handleSetIsActivated,
  type,
  categoryTitle,
  placeholderText,
}: ItemTextFieldProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setText(inputValue);
    handleSetIsActivated;
  };

  const handleBtnClick = () => {
    setText('');
  };

  return (
    <S.ItemTextFieldWrapper>
      <S.CategoryTitle>{categoryTitle}</S.CategoryTitle>
      <S.Wrapper hasContent={text.length > 0}>
        <S.TextField>
          <S.Input type={type} value={text} onChange={onChange} placeholder={placeholderText} />
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
    </S.ItemTextFieldWrapper>
  );
};

export default ItemTextField;
