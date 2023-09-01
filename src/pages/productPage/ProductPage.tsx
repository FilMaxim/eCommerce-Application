/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';
import { getProduct } from '../../helpers/api/apiRoot';
import { useParams } from 'react-router-dom';
import { Button, Rating } from '@mui/material';
import { getProductParams } from '../catalogPage/utils/getProductParams';
import { type ProductsDataInterface } from '../../utils/types';
import { PriceTag } from '../../components/cards/productCard/PriceTag';
import Box from '@mui/material/Box';

export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductsDataInterface | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [modalPreviewOpen, setModalPreviewOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchProduct = async (id: string) => {
    setIsLoading(true);
    const newProduct = await getProduct(id);
    if (newProduct === undefined) return;
    setProduct(getProductParams(newProduct, newProduct.masterVariant));
    setIsLoading(false);
  };

  useEffect(() => {
    if (id !== undefined) {
      fetchProduct(id).catch((error) => {
        if (!(error instanceof Error)) return;
        throw new Error(error.message);
      });
    }
  }, [id]);

  if (isLoading) return <div className="text-center text-2xl">Loading...</div>; // todo: add cool loader component

  if (product === null) return <div className="text-center text-2xl">Can&apos;t find product</div>;
  const rating = product.attributes?.find(obj => obj.name === 'rating');
  const color = product.attributes?.find(obj => obj.name === 'color');
  return (
    <div className="flex flex-wrap justify-center gap-8 p-1 sm:p-4">
      <Carousel
        className="w-[30rem] max-w-[90%] object-contain"
        selectedItem={currentImageIndex}
        onChange={setCurrentImageIndex}
        infiniteLoop={true}
        showArrows={true}
        showIndicators={false}
        showStatus={false}
        interval={5000}
        autoPlay={true}
        stopOnHover
      >
        {product.images?.map((image) => (
          <div
            key={id}
            onClick={() => {
              setModalPreviewOpen(true);
            }}
          >
            <img
              className="max-h-[20rem] object-contain h-full"
              src={image.url}
              alt={image.label}
            />
          </div>
        ))}
      </Carousel>
      <div className="flex max-w-[90%] flex-col justify-between gap-4 sm:max-w-[70%] lg:w-[350px]">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl">{product.name}</h1>
          {
            rating !== undefined && (
              <p>
                <Rating
                  name="read-only"
                  precision={0.1}
                  defaultValue={rating.value}
                  readOnly />
              </p>
            )
          }
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
          <p className='flex gap-3 items-center bold '>
            <span className='font-bold'>Colours:</span>
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
                  }} />
              );
            })
            }
          </p>
        )}
        <Button
          color="secondary"
          className="w-full self-center"
          variant="contained"
        >
          Buy Now
        </Button>
      </div>
      {modalPreviewOpen && (
        <div
          className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setModalPreviewOpen(false);
            }
          }}
        >
          <div className="relative flex max-w-[90%] items-center justify-center rounded bg-white lg:max-w-[60rem]">
            <button
              className="absolute right-1 top-1  z-20 cursor-pointer rounded-full px-4 py-2 font-bold text-gray-700 hover:text-red-600"
              onClick={() => {
                setModalPreviewOpen(false);
              }}
            >
              X
            </button>
            <Carousel
              className="max-w-[90%] sm:max-w-[60%]"
              selectedItem={currentImageIndex}
              onChange={setCurrentImageIndex}
              infiniteLoop={true}
              showArrows={true}
              showIndicators={false}
              showStatus={false}
              interval={5000}
              autoPlay={true}
              stopOnHover
            >
              {product.images?.map((img, index: React.Key | null | undefined) => (
                <div
                  key={index}
                  onClick={() => {
                    setModalPreviewOpen(false);
                  }}
                >
                  <img
                    className=" object-contain lg:max-h-[30rem]"
                    src={img.url}
                    alt={img.label}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
};
