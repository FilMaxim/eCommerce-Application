import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import 'react-responsive-carousel/lib/styles/carousel.css';
import style from './productPage.module.scss';
import { getProduct } from '../../helpers/api/apiRoot';
import { type ProductProjection } from '@commercetools/platform-sdk';
import { Carousel } from 'react-responsive-carousel';
import { useParams } from 'react-router-dom';
import { PriceTag } from '../../components/cards/productCard/PriceTag';
import { Button } from '@mui/material';

export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductProjection | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [modalPreviewOpen, setModalPreviewOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchProduct = async (id: string) => {
    setIsLoading(true);
    const newProduct = await getProduct(id);
    if (newProduct === undefined) return;

    setProduct(newProduct);
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
        {product.masterVariant.images?.map((image) => (
          <div
            key={id}
            onClick={() => {
              setModalPreviewOpen(true);
            }}
          >
            <img
              className="max-h-[20rem] object-contain"
              src={image.url}
              alt={image.label}
            />
          </div>
        ))}
      </Carousel>
      <div className="flex max-w-[90%] flex-col justify-between gap-4 sm:w-[30rem] lg:w-[270px]">
        <div className="flex flex-col gap-2">
          <h1 className="bold text-2xl">{product.name['en-US']}</h1>
          <p>Rating: *****</p>
          {product.masterVariant.prices !== undefined && (
            <div className="flex justify-between">
              <PriceTag
                price={product.masterVariant.prices[0].value.centAmount / 100}
                discount={Number(product.masterVariant.prices[0].discounted?.value?.centAmount) / 100}
              />
            </div>
          )}
          <p className="">{product.description?.['en-US']}</p>
          <hr />
        </div>
        <p>colors</p>
        <p>sizes</p>
        <Button
          color="error"
          className="self-center w-full"
          variant="contained"
        >
          Buy Now
        </Button>
      </div>
      <Modal
        className={style.modal}
        isOpen={modalPreviewOpen}
        shouldCloseOnEsc
        shouldCloseOnOverlayClick
        onRequestClose={() => {
          setModalPreviewOpen(false);
        }}
      >
        <button
          className="relative float-right mx-5 my-5  rounded-full bg-gray-200 px-4 py-2 font-bold text-gray-700 hover:bg-gray-300"
          onClick={() => {
            setModalPreviewOpen(false);
          }}
        >
          X
        </button>
        <Carousel
          className={style.slider}
          selectedItem={currentImageIndex}
          onChange={setCurrentImageIndex}
          infiniteLoop={true}
          showArrows={true}
          showIndicators={false}
          showStatus={false}
        >
          {product.masterVariant.images?.map((img, index: React.Key | null | undefined) => (
            <div
              className="max-w-[50%] object-contain"
              key={index}
              onClick={() => {
                setModalPreviewOpen(false);
              }}
            >
              <img
                src={img.url}
                alt={img.label}
              />
            </div>
          ))}
        </Carousel>
      </Modal>
    </div>
  );
};
