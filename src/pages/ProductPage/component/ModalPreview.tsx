import { Carousel } from 'react-responsive-carousel';
import React from 'react';
import { type ModalPreviewProps } from '../../../utils/types';

export const ModalPreview: React.FC<ModalPreviewProps> = ({
  product,
  currentImageIndex,
  setCurrentImageIndex,
  setModalPreviewOpen
}) => {
  return (
    <div
      className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setModalPreviewOpen(false);
        }
      }}
      role="presentation"
      tabIndex={-1}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
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
          {product.images?.map((img) => (
            <button
              key={img.url}
              onClick={() => {
                setModalPreviewOpen(false);
              }}
            >
              <img
                className=" object-contain lg:max-h-[30rem]"
                src={img.url}
                alt={img.label}
              />
            </button>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
