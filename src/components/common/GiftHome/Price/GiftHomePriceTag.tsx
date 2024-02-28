import PropTypes from 'prop-types';
import { Price } from './GiftHomePriceTag.style';

interface PriceTagProps {
  price: number;
  fonts: string;
}

const GiftHomePriceTag: React.FC<PriceTagProps> = ({ price, fonts }) => {
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <Price $fonts={fonts}>
      <span>{formatPrice(price)}</span>
      <span>원</span>
    </Price>
  );
};

GiftHomePriceTag.propTypes = {
  price: PropTypes.number.isRequired,
};

export default GiftHomePriceTag;
