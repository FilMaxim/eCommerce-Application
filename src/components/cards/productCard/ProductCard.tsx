import { Typography, CircularProgress, CardMedia, CardContent, Card, Rating } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import type { ProductCardInterface } from '../../../utils/types';
import { PriceTag } from './PriceTag';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { useCart } from '../../../hooks/useCart';

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
  const [isFulfilled, setFulfiled] = useState<boolean>(false);

  const { addToCart, cart } = useCart();

  const handleCardClick = (id: string): void => {
    navigate({ pathname: `/product/${id}` });
  };

  useEffect(() => {
    if (cart !== null) {
      const { lineItems } = cart;
      const isAdded = Boolean(lineItems.find((item) => item.productId === id));
      setFulfiled(isAdded);
    }
  }, [cart, id]);

  const CartIcon = ({ predicate }: { predicate: boolean }) => {
    // prettier-ignore
    return predicate
      ? (
        <>
          <Typography
            variant="body1"
            color="text.primary"
            fontWeight="bold"
          >
            To Cart
          </Typography>
          <ShoppingCartIcon
            sx={{
              color: '#DB4444',
              transform: ' translate(10px)'
            }}
            fontSize="large"
          />
        </>)
      : (
        <ShoppingCartOutlinedIcon fontSize="large" />);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleAddClick = async () => {
    setSubmitting(true);
    isFulfilled && navigate({ pathname: '/cart' });
    const productId = id;

    if (cart !== null && !isFulfilled) {
      const { id, version } = cart;
      try {
        await addToCart({ cartId: id, cartVersion: version, productId });
      } catch (error) {
        console.error(error);
      }
    }
    setSubmitting(false);
    setFulfiled(true);
  };

  return (
    <Card className="group grid grid-cols-[14rem] grid-rows-catalog-cards items-center justify-items-start gap-[0.3rem] hover:shadow-xl">
      <CardMedia
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          height: '12rem',
          width: '12rem',
          justifySelf: 'center',
          cursor: 'pointer'
        }}
        image={imageUrl}
        title={title}
        className=""
        onClick={() => {
          handleCardClick(id);
        }}
      />
      <CardContent
        sx={{
          height: '8rem',
          padding: '0 1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.3rem'
        }}
      >
        <Typography
          gutterBottom
          variant="h6"
          component="p"
          color={isHovered ? '#DB4444' : 'text.primary'}
          sx={{
            fontSize: '1.25rem',
            lineHeight: '1.5rem',
            margin: 0,
            '&:hover': {
              color: '#DB4444'
            },
            cursor: 'pointer'
          }}
          onClick={() => {
            handleCardClick(id);
          }}
        >
          {titleName}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
        >
          <span className="inline-block max-h-10 overflow-hidden text-gray-500">{description}</span>
          <button
            className="mt-[-0.5rem] block cursor-pointer text-secondary"
            onClick={() => {
              handleCardClick(id);
            }}
          >
            ...more
          </button>
        </Typography>
      </CardContent>
      <CardContent
        sx={{
          display: 'inline-flex',
          gap: '1rem',
          padding: 0
        }}
      >
        <PriceTag
          price={price}
          discount={discount}
        />
      </CardContent>
      <Rating
        sx={{
          padding: '0 1rem'
        }}
        name="read-only"
        precision={0.1}
        defaultValue={rating}
        readOnly
      />
      <LoadingButton
        size="medium"
        disabled={isSubmitting}
        sx={{
          height: '41px',
          borderRadius: '0 0 4px 4px'
        }}
        variant={isFulfilled || isSubmitting ? 'outlined' : 'contained'}
        className="w-full transition-all hover:opacity-80"
        onClick={() => {
          handleAddClick().catch((error) => {
            console.error(error);
          });
        }}
      >
        {
          // prettier-ignore
          isSubmitting
            ? (
              <CircularProgress
                sx={{ color: '#DB4444' }}
                size="1.5rem"
              />)
            : (
              <CartIcon predicate={isFulfilled} />)
        }
      </LoadingButton>
    </Card>
  );
};
