import React from 'react';
import { Button, Rating } from '@mui/material';
import { PriceTag } from '../../../components/cards/productCard/PriceTag';
import Box from '@mui/material/Box';
import { type ProductDetailsProps } from '../../../utils/types';
import { useCart } from '../../../hooks/useCart';
import { showToastMessage } from '../../../helpers/showToastMessage';
import { UpdateMessage } from '../../../components/forms/customerProfile/util/updateMessage';

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product, rating, color, id }) => {
  const { addToCart, removeItemFromCart, cart } = useCart();
  console.log(cart);
  if (cart == null || id == null) {
    return <div className="text-center text-2xl">Can&apos;t find cart</div>;
  }
  const productLineItem = cart.lineItems.find((lineItem) => lineItem.productId === id);

  const onAdd = () => {
    if (id == null || cart == null) return;

    void addToCart({
      cartId: cart.id,
      cartVersion: cart.version,
      productId: id
    })
      .then(() => {
        showToastMessage(UpdateMessage.success, 'green');
      })
      .catch(() => {
        showToastMessage(UpdateMessage.error, 'red');
      });
  };
  const onRemove = () => {
    if (productLineItem == null || cart == null) return;

    void removeItemFromCart(cart.id, cart.version, productLineItem.id, productLineItem.quantity)
      .then(() => {
        showToastMessage(UpdateMessage.success, 'green');
      })
      .catch(() => {
        showToastMessage(UpdateMessage.error, 'red');
      });
  };

  return (
    <div className="flex max-w-[90%] flex-col justify-between gap-4 sm:max-w-[70%] lg:w-[350px]">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        {rating !== undefined && (
          <p>
            <Rating
              name="read-only"
              precision={0.1}
              defaultValue={rating.value}
              readOnly
            />
          </p>
        )}
        {product.priceTag !== undefined && (
          <div className="flex justify-between">
            <PriceTag
              price={product.priceTag.price}
              discount={product.priceTag.discount}
            />
          </div>
        )}
        <p className="">{product.description}</p>
        <hr />
      </div>
      {color !== undefined && (
        <p className="bold flex items-center gap-3 ">
          <span className="font-bold">Colours:</span>
          {color.value.map((colorName: string) => {
            return (
              <Box
                key={colorName}
                component="span"
                sx={{
                  bgcolor: colorName,
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  border: 2
                }}
              />
            );
          })}
        </p>
      )}
      {productLineItem == null && (
        <Button
          color="secondary"
          className="w-full self-center"
          variant="contained"
          onClick={onAdd}
        >
          Buy Now
        </Button>
      )}
      {productLineItem != null && (
        <Button
          color="primary"
          className="w-full self-center"
          variant="contained"
          onClick={onRemove}
        >
          Remove From Card
        </Button>
      )}
    </div>
  );
};
