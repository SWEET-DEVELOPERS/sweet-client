import { useState } from 'react';
import * as S from './ItemNameTextField.styled';
import IcCancelCircleFinal from '../../../assets/svg/IcCancelCircleFinal';

const ItemNameTextField = () => {
  const [text, setText] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setText(inputValue);
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
