import { useState } from 'react';
import * as S from './ItemPriceTextField.styled';
import IcCancelCircleFinal from '../../../assets/svg/IcCancelCircleFinal';

const ItemPriceTextField = () => {
  const [text, setText] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setText(inputValue);
  };

  const handleBtnClick = () => {
    setText('');
  };

  return (
    <S.ItemPriceTextFieldWrapper>
      <S.CategoryTitle>가격</S.CategoryTitle>
      <S.Wrapper hasContent={text.length > 0}>
        <S.TextField>
          <S.Input
            type='number'
            value={text}
            onChange={onChange}
            placeholder='가격을 입력해주세요'
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
    </S.ItemPriceTextFieldWrapper>
  );
};

export default ItemPriceTextField;
