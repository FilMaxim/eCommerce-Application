import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import 'react-responsive-carousel/lib/styles/carousel.css';
import '../styles/product.css';
import { getProduct } from '../helpers/api/apiRoot';
import { type ProductProjection } from '@commercetools/platform-sdk';
import { Carousel } from 'react-responsive-carousel';
import { Button } from '@mui/material';

export const Product = () => {
  const [product, setProduct] = useState<ProductProjection | undefined>(undefined);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [modalPreviewOpen, setModalPreviewOpen] = useState(false);

  const fetchProduct = async () => {
    const newProduct = await getProduct('e996ba5d-4c7d-4a2e-8635-1d68bdfb21df');
    setProduct(newProduct);
  };

  useEffect(() => {
    void fetchProduct();
  }, []);

  return (
    <div className="product">
      <div className="product__slider">
        {product != null && (
          <Carousel
            className="slider"
            selectedItem={currentImageIndex}
            onChange={setCurrentImageIndex}
            infiniteLoop={true}
            showArrows={true}
            showIndicators={false}
            showStatus={false}
          >
            {product.masterVariant.images?.map((image, index) => (
              <div
                className="foto"
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
        <div className="product__card">
          <h1 className="product__title">{product.name['en-US']}</h1>
          <p className="product__price">${product.masterVariant.prices[0].value.centAmount / 100}</p>
          <p>{product.description['en-US']}</p>
          <Button>Buy</Button>
        </div>
      )}

      <Modal
        className={'modal'}
        isOpen={modalPreviewOpen}
        shouldCloseOnEsc
        shouldCloseOnOverlayClick
        onRequestClose={() => {
          setModalPreviewOpen(false);
        }}
      >
        <button className="relative float-right mx-5 my-5  bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full"
          onClick={() => { setModalPreviewOpen(false); }}>
          X
        </button>
        <Carousel
          className="slider"
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
                className="foto"
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
