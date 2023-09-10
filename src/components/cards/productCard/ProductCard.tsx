import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import type { ProductCardInterface, RootState } from '../../../utils/types';
import { Button, Rating } from '@mui/material';
import { PriceTag } from './PriceTag';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { addProductToCart } from '../../../helpers/api/cart/addProductToCart';
import { setCart } from '../../../helpers/api/cart/setCart';
import { LoadingButton } from '@mui/lab';
import { CartInitialstate } from '../../../slices/cartSlice';
import type { Cart } from '@commercetools/platform-sdk';
import { useDispatch, useSelector } from 'react-redux';
import { setCartData } from '../../../slices/cartSlice';


const normalizeCartData = (data: Cart): CartInitialstate => {
  const { anonymousId, id, lineItems, version, totalLineItemQuantity, totalPrice } = data;
  return { anonymousId, id, lineItems, version, totalLineItemQuantity, totalPrice };
}

export const ProductCard = ({
  imageUrl,
  title,
  titleName,
  description,
  price,
  discount,
  id,
  rating
}: ProductCardInterface) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isSubmitting, setSubmitting] = useState<boolean>(false);

  const dispatch = useDispatch();
  const cardsData = useSelector((state: { cartData: RootState }) => state.cartData);


  const handleCardClick = (id: string): void => {
    navigate({ pathname: `/product/${id}` });
  };

  return (
    <Card className="group grid grid-cols-[14rem] grid-rows-catalog-cards items-center justify-items-start gap-[0.3rem] hover:shadow-xl">
      <CardMedia
        sx={{ height: '14rem', width: '14rem' }}
        image={imageUrl}
        title={title}
        className="transition-all group-hover:scale-110"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="p"
          align="center"
          sx={{
            fontSize: '1.25rem',
            lineHeight: '1.5rem',
            height: '1.5rem',
            overflow: 'hidden'
          }}
        >
          {titleName}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
        >
          <span className="inline-block max-h-10 overflow-hidden text-gray-500">{description}</span>
          <span
            className="mt-[-0.5rem] block cursor-pointer text-secondary"
            onClick={() => {
              handleCardClick(id);
            }}
          >
            ...more
          </span>
        </Typography>
      </CardContent>
      <CardContent
        sx={{
          display: 'inline-flex',
          marginLeft: '-1rem',
          gap: '12px'
        }}
      >
        <PriceTag
          price={price}
          discount={discount}
        />
      </CardContent>
      <p>
        <Rating
          name="read-only"
          precision={0.1}
          defaultValue={rating}
          readOnly
        />
      </p>
      <Button
        size="medium"
        variant="contained"
        className="w-full transition-all hover:opacity-80"
        // disabled={isSubmitting}
        onClick={async () => {
          setSubmitting(true);
          try {
            await setCart();
            const response = await addProductToCart(id);
            const normalizedData = normalizeCartData(response.body);
            dispatch(setCartData(normalizedData));
            console.log(cardsData);
            if (response.statusCode === 200) {
              // setSubmitting(false);
            }
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <ShoppingCartOutlinedIcon fontSize="large" />
      </LoadingButton>
    </Card>
  );
};
