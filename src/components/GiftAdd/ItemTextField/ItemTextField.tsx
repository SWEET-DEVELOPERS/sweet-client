import * as S from './ItemTextField.styled';
import IcCancelCircleFinal from '../../../assets/svg/IcCancelCircleFinal';
import { useState } from 'react';

interface ItemTextFieldProps {
  text: string;
  handleTextChange: (newText: string) => void;
  type: string;
  categoryTitle: string;
  placeholderText: string;
}

const ItemTextField = ({
  text,
  handleTextChange,
  type,
  categoryTitle,
  placeholderText,
}: ItemTextFieldProps) => {
  const [isInputFocused, setInputFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    handleTextChange(inputValue);
  };

  const handleBtnClick = () => {
    handleTextChange('');
  };

  return (
    <S.ItemTextFieldWrapper>
      <S.CategoryTitle>{categoryTitle}</S.CategoryTitle>
      <S.Wrapper $isInputFocused={isInputFocused}>
        <S.TextField>
          <S.Input
            type={type}
            value={text}
            onChange={handleChange}
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
            placeholder={placeholderText}
          />
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
