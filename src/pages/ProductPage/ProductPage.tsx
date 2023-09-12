import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';
import { getProduct } from '../../helpers/api/apiRoot';
import { useParams } from 'react-router-dom';
import { getProductParams } from '../catalogPage/utils/getProductParams';
import { type ProductsDataInterface } from '../../utils/types';
import { ModalPreview } from './component/ModalPreview';
import { ProductDetails } from './component/ProductDetails';

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

  if (isLoading) return <div className="text-center text-2xl">Loading...</div>;

  if (product === null) return <div className="text-center text-2xl">Can&apos;t find product</div>;
  const rating = product.attributes?.find((obj) => obj.name === 'rating');
  const color = product.attributes?.find((obj) => obj.name === 'color');
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
          <button
            key={image.url}
            onClick={() => {
              setModalPreviewOpen(true);
            }}
          >
            <img
              className="h-full max-h-[20rem] object-contain"
              src={image.url}
              alt={image.label}
            />
          </button>
        ))}
      </Carousel>
      <ProductDetails
        product={product}
        rating={rating}
        color={color}
        id={id}
      />
      {modalPreviewOpen && (
        <ModalPreview
          product={product}
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
          setModalPreviewOpen={setModalPreviewOpen}
        />
      )}
    </div>
  );
};
