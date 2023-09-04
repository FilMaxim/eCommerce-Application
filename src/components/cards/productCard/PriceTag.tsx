import { Typography } from '@mui/material';
import type { PriceTagInterface } from '../../../utils/types';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';

export const PriceTag = ({ price, discount }: PriceTagInterface) => {
  const hasDiscount = discount > 0;
  const discountColor = '#DB4444';
  const priceColor = '#000';
  const width = hasDiscount ? '20px' : 0;

  return (
    // prettier-ignore
    // prettier-config have a conflicts with eslint-config
    <>
      <Typography variant="h6" sx={{
        borderRadius: '0 4px 4px 0',
        backgroundColor: discountColor,
        width
      }} />
      {hasDiscount
        ? (
          <div className="flex gap-2 items-start">
            <Typography variant="h6" sx={{
              color: discountColor,
              fontWeight: 'bold'
            }}>
              €{discount}
            </Typography>
            <div className='flex items-center'>
              <DiscountOutlinedIcon color='warning' fontSize='small' />
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
            </div>
          </div>)
        : (
          <Typography variant="h6" sx={{
            color: priceColor,
            fontWeight: 'bold'
          }}>
            €{price}
          </Typography>)}
    </>
  );
};
