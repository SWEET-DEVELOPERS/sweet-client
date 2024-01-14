import * as S from './ItemTextField.styled';
import IcCancelCircleFinal from '../../../assets/svg/IcCancelCircleFinal';
import { SetStateAction } from 'react';

interface ItemTextFieldProps {
  text: string;
  setText: React.Dispatch<SetStateAction<string>>;
  handleSetIsActivated: VoidFunction;
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
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setText(inputValue);
    handleSetIsActivated();
  };

  const handleBtnClick = () => {
    setText('');
  };

  return (
    <S.ItemTextFieldWrapper>
      <S.CategoryTitle>{categoryTitle}</S.CategoryTitle>
      <S.Wrapper hasContent={text.length > 0}>
        <S.TextField>
          <S.Input type={type} value={text} onChange={handleChange} placeholder={placeholderText} />
        </S.TextField>
        {type === 'number' ? (
          ''
        ) : (
          <S.IconField>
            {text.length > 0 && (
              <IcCancelCircleFinal
                style={{ width: '2.4rem', height: '2.4rem' }}
                onClick={handleBtnClick}
              />
            )}
          </S.IconField>
        )}
      </S.Wrapper>
    </S.ItemTextFieldWrapper>
  );
};

export default ItemTextField;
