import { Typography } from '@mui/material';
import type { PriceTagInterface } from '../../../utils/types';

export const PriceTag = ({ price, discount }: PriceTagInterface) => {
  const hasDiscount = discount > 0;
  const discountColor = '#DB4444';
  const priceColor = '#000';

  return (
    // prettier-ignore
    // prettier-config have a conflicts with eslint-config
    <>
      <Typography variant="h6" sx={{
        borderRadius: '0 4px 4px 0',
        backgroundColor: discountColor,
        width: '20px'
      }} />
      {hasDiscount
        ? (
          <div className="flex gap-2 pr-2">
            <Typography variant="h6" sx={{
              color: discountColor,
              fontWeight: 'bold'
            }}>
              €{discount}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: priceColor,
                textDecoration: 'line-through',
                fontWeight: 'bold',
                opacity: '0.5'
              }}
            >
              €{price}
            </Typography>
          </div>)
        : (
          <Typography variant="h6" sx={{
            color: discountColor,
            fontWeight: 'bold'
          }}>
            €{price}
          </Typography>)}
    </>
  );
};
