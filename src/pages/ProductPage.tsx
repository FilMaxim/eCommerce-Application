/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import 'react-responsive-carousel/lib/styles/carousel.css';
import { getProduct } from '../helpers/api/apiRoot';
import { type ProductProjection } from '@commercetools/platform-sdk';
import { Carousel } from 'react-responsive-carousel';

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
    <div className='product'>
      <div className='product__slider'>
        {product != null && (
          <Carousel className='slider' selectedItem={currentImageIndex} onChange={setCurrentImageIndex} infiniteLoop={true} showArrows={false} showIndicators={false} showStatus={false}>
            {product.masterVariant.images?.map((image, index) => (
              <div className='foto' key={index} onClick={() => { setModalPreviewOpen(true); }}>
                <img src={image.url} />
              </div>
            ))}
          </Carousel>
        )}
        {product == null && (
          <div>Нет доступных изображений</div>
        )}
      </div>
      {product?.description != null && (
        <div className='product__card'>
          <h1 className='product__title'>
            {product.name['en-US']}
          </h1>
          <p>
            {product.masterVariant.prices?.[0].value.centAmount}
          </p>
          <p>
            {product.description['en-US']}
          </p>
        </div>
      )}

      <Modal isOpen={modalPreviewOpen} shouldCloseOnEsc shouldCloseOnOverlayClick onRequestClose={() => { setModalPreviewOpen(false); }}>
        <Carousel className='slider' selectedItem={currentImageIndex} onChange={setCurrentImageIndex} infiniteLoop={true} showArrows={false} showIndicators={false} showStatus={false}>
          {product?.masterVariant.images?.map((foto: { url: string | undefined; }, index: React.Key | null | undefined) => (
            <div className='foto' key={index} onClick={() => { setModalPreviewOpen(true); }}>
              <img src={foto.url} />
            </div>
          ))}
        </Carousel>
      </Modal>
    </div>
  );
};
