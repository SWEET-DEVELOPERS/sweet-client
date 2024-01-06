import React, { useState } from 'react';
import { styled } from 'styled-components';

export default function AddGift() {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('가방');
  const [price, setPrice] = useState('30000');
  const imageUrl = '';

  const handleUrlInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handlePriceInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const handleSubmit = () => {
    //
  };

  return (
    <GiftLinkFormWrapper>
      <GiftLinkInput
        type='text'
        placeholder='링크 입력'
        value={url}
        onChange={handleUrlInputChange}
      />
      <PriceInputWrapper>
        <GiftPriceInput placeholder='가격 입력' onChange={handlePriceInputChange} />
        <AddButton type='button' onClick={handleSubmit}>
          등록하기
        </AddButton>
      </PriceInputWrapper>
      <PreviewSection>
        <PreviewImage src={imageUrl} />
        <PreviewInfoWrapper>
          <PreviewTitle>{title}</PreviewTitle>
          <PreviewPrice>{price}</PreviewPrice>
          <PreviewSplit>1명 당 {Math.floor(parseInt(price) / 3)}원 예상</PreviewSplit>
        </PreviewInfoWrapper>
      </PreviewSection>
    </GiftLinkFormWrapper>
  );
}

const GiftLinkFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  row-gap: 1rem;

  width: 100%;
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  background-color: lightgray;
`;

const GiftLinkInput = styled.input`
  background-color: white;
  border-radius: 1rem;
  color: black;

  &::placeholder {
    color: gray;
  }
`;

const GiftPriceInput = styled.input`
  background-color: white;
  border-radius: 1rem;
  color: black;

  &::placeholder {
    color: gray;
  }
`;

const AddButton = styled.button`
  background-color: black;
  border-radius: 1rem;
  color: white;
`;

const PriceInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 0.5rem;
`;

const PreviewSection = styled.div`
  background-color: beige;
  display: flex;
`;

const PreviewInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const PreviewImage = styled.img`
  width: 3rem;
  height: 3rem;
`;

const PreviewTitle = styled.p`
  font-size: 0.8rem;
`;

const PreviewPrice = styled.p`
  font-size: 1rem;
`;

const PreviewSplit = styled.p`
  color: gray;
  font-size: 0.8rem;
`;
