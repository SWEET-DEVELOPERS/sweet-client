import { Price } from './GiftHomePriceTag.style';

interface PriceTagProps {
  price: number;
  fonts: string;
  colors: string;
  gap: number;
}

const GiftHomePriceTag = ({ price, fonts, colors, gap }: PriceTagProps) => {
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <Price $fonts={fonts} $colors={colors} $gap={gap}>
      <span>{formatPrice(price)}</span>
      <span>원</span>
    </Price>
  );
};

export default GiftHomePriceTag;
