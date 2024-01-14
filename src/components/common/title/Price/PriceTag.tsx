import PropTypes from 'prop-types';
import { Price } from './PriceTag.style';

interface PriceTagProps {
  price: number;
}

const PriceTag: React.FC<PriceTagProps> = ({ price }) => {
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return <Price>{formatPrice(price)}원</Price>;
};

PriceTag.propTypes = {
  price: PropTypes.number.isRequired,
};

export default PriceTag;
