/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import 'react-responsive-carousel/lib/styles/carousel.css';
import style from './productPage.module.scss';
import { getProduct } from '../../helpers/api/apiRoot';
import { type ProductProjection } from '@commercetools/platform-sdk';
import { Carousel } from 'react-responsive-carousel';
import { useParams } from 'react-router-dom';
import { PriceTag } from '../../components/cards/productCard/PriceTag';
import { BlackButton } from '../../components/buttons/BlackButton';

export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductProjection | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [modalPreviewOpen, setModalPreviewOpen] = useState<boolean>(false);

  const fetchProduct = async (id: string) => {
    const newProduct = await getProduct(id);
    if (newProduct === undefined) return;

    setProduct(newProduct);
  };

  useEffect(() => {
    if (id !== undefined) {
      fetchProduct(id).catch((error) => {
        Error(error);
      });
    }
  }, [id]);

  return (
    <div className={style.product}>
      <div className={style.product__slider}>
        {product !== null && (
          <Carousel
            className={style.slider}
            selectedItem={currentImageIndex}
            onChange={setCurrentImageIndex}
            infiniteLoop={true}
            showArrows={true}
            showIndicators={false}
            showStatus={false}
          >
            {product.masterVariant.images?.map((image, index) => (
              <div
                className={style.foto}
                key={index}
                onClick={() => {
                  setModalPreviewOpen(true);
                }}
              >
                <img src={image.url} />
              </div>
            ))}
          </Carousel>
        )}
        {product == null && <div>Нет доступных изображений</div>}
      </div>
      {product?.description != null && product.masterVariant.prices !== undefined && (
        <div className={style.product__card}>
          <h1 className={style.product__title}>{product.name['en-US']}</h1>
          <p className={style.product__desc}>{product.description['en-US']}</p>
          <PriceTag
            price={product.masterVariant.prices[0].value.centAmount / 100}
            discount={Number(product.masterVariant.prices[0].discounted?.value?.centAmount) / 100}
          />
          <BlackButton
            size="medium"
            variant="contained"
            sx={{
              padding: 0,
              height: 41,
              width: 270
            }}
          >
            Buy Now
          </BlackButton>
        </div>
      )}

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
          {product?.masterVariant.images?.map(
            (foto: { url: string | undefined }, index: React.Key | null | undefined) => (
              <div
                className={style.foto}
                key={index}
                onClick={() => {
                  setModalPreviewOpen(true);
                }}
              >
                <img src={foto.url} />
              </div>
            )
          )}
        </Carousel>
      </Modal>
    </div>
  );
};
